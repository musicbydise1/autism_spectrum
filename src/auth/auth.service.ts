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
import { ChildService } from 'src/child/child.service';  // Подключаем ChildService

@Injectable()
export class AuthService {
  constructor(
      private customerService: UserService,
      private childService: ChildService,  // Добавляем сервис для работы с детьми
      private jwtService: JwtService
  ) {}

  async login(customerDto: LoginCustomerDto) {
    const customer = await this.validateCustomer(customerDto);
    const tkn = await this.generateToken(customer);

    // Получаем информацию о ребенке по ID родителя
    const children = await this.childService.getByParent(customer.user_id) || [];

    log(tkn);
    return { token: tkn, user: customer, children };  // Возвращаем данные о токене, пользователе и детях
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
    const tkn = await this.generateToken(customer);

    // Получаем информацию о ребенке после регистрации
    const children = await this.childService.getByParent(customer.user_id) || [];

    log(tkn);
    return { token: tkn, user: customer, children };  // Возвращаем токен, пользователя и детей
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.user_id };

    return {
      token: this.jwtService.sign(payload),
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
