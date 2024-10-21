import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DailyReportService } from "./daily-report.service";
import { CreateDailyReportDto } from "./Dto/create.daily-report.dto";
import { DailyReport } from "./daily-report.model";

@Controller("daily-report")
export class DailyReportController {
  constructor(private readonly dailyReportService: DailyReportService) {}

  @Post()
  async create(
    @Body() createDailyReportDto: CreateDailyReportDto
  ): Promise<DailyReport> {
    return this.dailyReportService.create(createDailyReportDto);
  }

  @Get("parent/:parentId/child/:childId")
  async findByParentAndChild(
    @Param("parentId") parentId: number,
    @Param("childId") childId: number
  ): Promise<DailyReport[]> {
    return this.dailyReportService.findByParentAndChild(parentId, childId);
  }

  @Get("child/:childId")
  async findByChild(@Param("childId") childId: number): Promise<DailyReport[]> {
    return this.dailyReportService.findByChild(childId);
  }

  @Get("parent/:parentId")
  async findByParent(
    @Param("parentId") parentId: number
  ): Promise<DailyReport[]> {
    return this.dailyReportService.findByParent(parentId);
  }
}
