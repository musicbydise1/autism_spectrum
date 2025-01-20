import { UserService } from "./user.service";
import { CreateCustomerDto } from "./Dto/create.customer.dto";
import { User } from "./user.model";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(createCustomerDto: CreateCustomerDto): Promise<User>;
    updateUser(id: number, updateCustomerDto: Partial<CreateCustomerDto>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
