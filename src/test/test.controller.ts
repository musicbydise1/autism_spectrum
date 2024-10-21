import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TestService } from "./test.service";

@Controller("test")
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body("testName") testName: string) {
    return this.testService.createTest(testName);
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.testService.findOne(id);
  }
}
