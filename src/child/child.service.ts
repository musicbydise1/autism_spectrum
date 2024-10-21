import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Child } from "./child.model";
import { CreateChildDto } from "./Dto/create.child.dto";

@Injectable()
export class ChildService {
  constructor(@InjectModel(Child) private readonly childModel: typeof Child) {}

  async createChild(dto: CreateChildDto) {
    return this.childModel.create(dto);
  }
  async getByParent(id) {
    return this.childModel.findOne({ where: { parentId: id } });
  }
}
