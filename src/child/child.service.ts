import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Child } from "./child.model";
import { CreateChildDto } from "./Dto/create.child.dto";
import { UpdateChildDto } from "./Dto/update.child.dto";
import { FindOptions } from 'sequelize';

@Injectable()
export class ChildService {
  constructor(@InjectModel(Child) private readonly childModel: typeof Child) {}

  // Метод для создания ребенка
  async createChild(dto: CreateChildDto) {
    return this.childModel.create(dto);
  }

  // Метод для получения всех детей по ID родителя
  async getByParent(parentId: number) {
    return this.childModel.findAll({ where: { parentId } });
  }

  // Метод для получения всех детей
  async getAllChildren() {
    return this.childModel.findAll();
  }

  // Метод для получения одного ребенка по ID
  async findOneById(id: number): Promise<Child> {
    const options: FindOptions<Child> = { where: { id } };
    return this.childModel.findOne(options);
  }

  // Метод для обновления данных ребенка по ID
  async updateChild(id: number, updateChildDto: UpdateChildDto): Promise<Child> {
    const child = await this.findOneById(id);
    if (!child) {
      throw new Error('Child not found');
    }
    await child.update(updateChildDto);
    return child.reload();
  }

  // Метод для удаления ребенка по ID
  async deleteChild(id: number): Promise<void> {
    const child = await this.findOneById(id);
    if (!child) {
      throw new Error('Child not found');
    }
    await child.destroy();
  }
}
