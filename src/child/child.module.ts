import { Module } from "@nestjs/common";
import { ChildController } from "./child.controller";
import { ChildService } from "./child.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Child } from "./child.model";

@Module({
  controllers: [ChildController],
  providers: [ChildService],
  imports: [SequelizeModule.forFeature([Child])],
  exports: [ChildService],  // Экспортируем ChildService
})
export class ChildModule {}
