import { Module } from "@nestjs/common";
import { PassedTestController } from "./passed-test.controller";
import { PassedTestService } from "./passed-test.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { PassedTest } from "./passed-test.model";

@Module({
  controllers: [PassedTestController],
  providers: [PassedTestService],
  imports: [SequelizeModule.forFeature([PassedTest])],
})
export class PassedTestModule {}
