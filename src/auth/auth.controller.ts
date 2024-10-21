import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateCustomerDto } from "src/user/Dto/create.customer.dto";
import { LoginCustomerDto } from "src/user/Dto/login.customer.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() customerDto: LoginCustomerDto) {
    return this.authService.login(customerDto);
  }

  @Post("/registration")
  async registration(@Body() customerDto: CreateCustomerDto) {
    return this.authService.registration(customerDto);
  }
}
