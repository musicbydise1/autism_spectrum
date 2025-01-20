import { AuthService } from "./auth.service";
import { CreateCustomerDto } from "src/user/Dto/create.customer.dto";
import { LoginCustomerDto } from "src/user/Dto/login.customer.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(customerDto: LoginCustomerDto): Promise<{
        token: {
            token: string;
        };
        user: import("../user/user.model").User;
        children: import("../child/child.model").Child[];
    }>;
    registration(customerDto: CreateCustomerDto): Promise<{
        token: {
            token: string;
        };
        user: import("../user/user.model").User;
        children: import("../child/child.model").Child[];
    }>;
}
