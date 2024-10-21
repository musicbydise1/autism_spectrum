import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ChildService } from "./child.service";
import { CreateChildDto } from "./Dto/create.child.dto";

@Controller("child")
export class ChildController {
  constructor(private service: ChildService) {}

  @Post("/createChild")
  createChild(@Body() childDto: CreateChildDto) {
    return this.service.createChild(childDto);
  }

  @Get("/getByParent/:parentId")
  getByParent(@Param("parentId") parentId: number) {
    return this.service.getByParent(parentId);
  }
}
