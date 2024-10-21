import { AuthService } from "./auth.service";
import { CreateCustomerDto } from "src/user/Dto/create.customer.dto";
import { LoginCustomerDto } from "src/user/Dto/login.customer.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(customerDto: LoginCustomerDto): Promise<(import("../user/user.model").User | {
        token: string;
    })[]>;
    registration(customerDto: CreateCustomerDto): Promise<(import("../user/user.model").User | {
        token: string;
    })[]>;
}
