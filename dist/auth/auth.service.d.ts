import { JwtService } from "@nestjs/jwt";
import { CreateCustomerDto } from "src/user/Dto/create.customer.dto";
import { LoginCustomerDto } from "src/user/Dto/login.customer.dto";
import { User } from "src/user/user.model";
import { UserService } from "src/user/user.service";
import { ChildService } from 'src/child/child.service';
export declare class AuthService {
    private customerService;
    private childService;
    private jwtService;
    constructor(customerService: UserService, childService: ChildService, jwtService: JwtService);
    login(customerDto: LoginCustomerDto): Promise<{
        token: {
            token: string;
        };
        user: User;
        children: import("../child/child.model").Child[];
    }>;
    registration(customerDto: CreateCustomerDto): Promise<{
        token: {
            token: string;
        };
        user: User;
        children: import("../child/child.model").Child[];
    }>;
    private generateToken;
    private validateCustomer;
}
