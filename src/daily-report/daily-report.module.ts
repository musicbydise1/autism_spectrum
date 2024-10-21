import { Module } from "@nestjs/common";
import { DailyReportController } from "./daily-report.controller";
import { DailyReportService } from "./daily-report.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { DailyReport } from "./daily-report.model";

@Module({
  controllers: [DailyReportController],
  providers: [DailyReportService],
  imports: [SequelizeModule.forFeature([DailyReport])],
})
export class DailyReportModule {}
