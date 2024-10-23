import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Child } from "./child.model";
import { CreateChildDto } from "./Dto/create.child.dto";

@Injectable()
export class ChildService {
  constructor(@InjectModel(Child) private readonly childModel: typeof Child) {}

  // Метод для создания ребенка
  async createChild(dto: CreateChildDto) {
    return this.childModel.create(dto);
  }

  // Метод для получения всех детей по ID родителя
  async getByParent(parentId: number) {
    return this.childModel.findAll({ where: { parentId } });  // Возвращаем всех детей
  }
}
