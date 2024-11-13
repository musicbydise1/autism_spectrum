import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PassedTest } from "./passed-test.model";
import PassTestDto from "./Dto/pass-test.dto";

@Injectable()
export class PassedTestService {
  constructor(
    @InjectModel(PassedTest) private readonly testModel: typeof PassedTest
  ) {}

  async submitTest(passedTest: PassTestDto) {
    const test = await this.testModel.create(passedTest);
    return test;
  }
  async getPassedTestsByParent(parentId: number): Promise<PassedTest[]> {
    return this.testModel.findAll({
      where: { parentId },
      include: [{ all: true }],
    });
  }

  async getAllPassedTests(): Promise<PassedTest[]> {
    return this.testModel.findAll();
  }
}
