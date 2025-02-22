import { User } from "./user.model";
import { CreateCustomerDto } from "./Dto/create.customer.dto";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: typeof User);
    findOneByEmail(email: string): Promise<User>;
    findOneById(id: number): Promise<User>;
    createUser(createCustomerDto: CreateCustomerDto): Promise<User>;
    findAll(): Promise<User[]>;
    updateUser(id: number, updateCustomerDto: Partial<CreateCustomerDto>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
