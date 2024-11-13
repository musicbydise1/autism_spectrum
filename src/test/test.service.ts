import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Test } from "./test.model";
import { FindOptions } from 'sequelize';

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
    const options: FindOptions<Test> = { where: { testId } };
    return this.testModel.findOne(options);
  }

  async updateTest(id: number, testName: string): Promise<void> {
    const test = await this.findOne(id);
    if (!test) {
      throw new Error('Test not found');
    }
    test.testName = testName;
    await test.save();
  }

  async deleteTest(id: number): Promise<void> {
    const test = await this.findOne(id);
    if (!test) {
      throw new Error('Test not found');
    }
    await test.destroy();
  }
}
