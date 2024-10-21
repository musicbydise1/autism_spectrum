import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Test } from "./test.model";

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test)
    private testModel: typeof Test
  ) {}

  async createTest(testName: string): Promise<Test> {
    return this.testModel.create({ testName });
  }

  async findAll(): Promise<Test[]> {
    return this.testModel.findAll();
  }

  async findOne(testId: number): Promise<Test> {
    return this.testModel.findOne({ where: { testId } });
  }
}
