import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { log } from "console";
import { CreateCustomerDto } from "src/user/Dto/create.customer.dto";
import { LoginCustomerDto } from "src/user/Dto/login.customer.dto";
import { User } from "src/user/user.model";
import { UserService } from "src/user/user.service";
@Injectable()
export class AuthService {
  constructor(
      private customerService: UserService,
      private jwtService: JwtService
  ) {}

  async login(customerDto: LoginCustomerDto) {
    const customer = await this.validateCustomer(customerDto);
    const tkn = await this.generateToken(customer);  // Добавляем await
    log(tkn);
    return [tkn, customer];
  }

  async registration(customerDto: CreateCustomerDto) {
    const candidate = await this.customerService.findOneByEmail(
        customerDto.email
    );

    if (candidate) {
      throw new HttpException(
          "Пользователь с таким email уже существует",
          HttpStatus.BAD_REQUEST
      );
    }

    const hash = await bcrypt.hash(customerDto.password, 5);
    const customer = await this.customerService.createUser({
      ...customerDto,
      password: hash,
    });
    const tkn = await this.generateToken(customer);  // Добавляем await
    log(tkn);
    return [tkn, customer];
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.user_id };

    return {
      token: this.jwtService.sign(payload),  // Подписываем токен
    };
  }

  private async validateCustomer(customerDto: LoginCustomerDto) {
    const customer = await this.customerService.findOneByEmail(
        customerDto.email
    );
    const password = await bcrypt.compare(
        customerDto.password,
        customer.password
    );

    if (customer && password) {
      return customer;
    }
    throw new UnauthorizedException({ message: "Некорректные данные" });
  }
}
