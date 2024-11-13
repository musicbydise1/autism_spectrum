import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { ChildService } from "./child.service";
import { CreateChildDto } from "./Dto/create.child.dto";
import { UpdateChildDto } from "./Dto/update.child.dto";

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

  @Get("admin")
  getAllChildren() {
    return this.service.getAllChildren();
  }

  // Обновление записи по ID
  @Put("admin/:id")
  updateChild(@Param("id") id: number, @Body() updateChildDto: UpdateChildDto) {
    return this.service.updateChild(id, updateChildDto);
  }

  // Удаление записи по ID
  @Delete("admin/:id")
  deleteChild(@Param("id") id: number) {
    return this.service.deleteChild(id);
  }

}
