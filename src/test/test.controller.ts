import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
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

  @Put("admin/:id")
  update(@Param("id") id: number, @Body("testName") testName: string) {
    return this.testService.updateTest(id, testName);
  }

  // Метод для удаления теста по ID
  @Delete("admin/:id")
  remove(@Param("id") id: number) {
    return this.testService.deleteTest(id);
  }


}
