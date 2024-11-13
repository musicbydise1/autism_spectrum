import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { CreateCustomerDto } from "./Dto/create.customer.dto";
import { FindOptions } from 'sequelize';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async findOneByEmail(email: string): Promise<User> {
    const options: FindOptions<User> = { where: { email } };
    return this.userModel.findOne(options);
  }

  async findOneById(id: number): Promise<User> {
    const options: FindOptions<User> = { where: { user_id: id } };
    return this.userModel.findOne(options);
  }

  async createUser(createCustomerDto: CreateCustomerDto): Promise<User> {
    return this.userModel.create(createCustomerDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async updateUser(id: number, updateCustomerDto: Partial<CreateCustomerDto>): Promise<User> {
    const user = await this.findOneById(id);
    if (!user) {
      throw new Error('User not found'); // Обработайте ошибку по своему усмотрению
    }
    await user.update(updateCustomerDto);
    return user.reload(); // Возвращаем обновленный экземпляр пользователя
  }


  async deleteUser(id: number): Promise<void> {
    const user = await this.findOneById(id);
    await user.destroy();
  }
}
