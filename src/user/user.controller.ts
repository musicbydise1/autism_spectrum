import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateCustomerDto } from "./Dto/create.customer.dto";
import { User } from "./user.model";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    // Получение списка всех пользователей
    @Get("admin")
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    // Получение пользователя по ID
    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.findOneById(id);
    }

    // Создание нового пользователя
    @Post()
    async createUser(@Body() createCustomerDto: CreateCustomerDto): Promise<User> {
        return this.userService.createUser(createCustomerDto);
    }

    // Обновление информации о пользователе по ID
    @Put('admin/:id')
    async updateUser(@Param('id') id: number, @Body() updateCustomerDto: Partial<CreateCustomerDto>): Promise<User> {
        return this.userService.updateUser(id, updateCustomerDto);
    }

    // Удаление пользователя по ID
    @Delete('admin/:id')
    async deleteUser(@Param('id') id: number): Promise<void> {
        return this.userService.deleteUser(id);
    }
}
