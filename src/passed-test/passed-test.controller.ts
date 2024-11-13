import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PassedTestService } from "./passed-test.service";
import PassTestDto from "./Dto/pass-test.dto";

@Controller("passed-test")
export class PassedTestController {
  constructor(private testService: PassedTestService) {}

  @Post("/submitTest")
  endTest(@Body() passedTest: PassTestDto) {
    return this.testService.submitTest(passedTest);
  }

  @Get()
  async getPassedTestsByParent(@Query("parentId") parentId: number) {
    return this.testService.getPassedTestsByParent(parentId);
  }
  @Get("/all")
  async getAllPassedTests() {
    return this.testService.getAllPassedTests();
  }
}
