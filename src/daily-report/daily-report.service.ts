import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { DailyReport } from "./daily-report.model";
import { CreateDailyReportDto } from "./Dto/create.daily-report.dto";

@Injectable()
export class DailyReportService {
  constructor(
    @InjectModel(DailyReport)
    private dailyReportModel: typeof DailyReport
  ) {}

  async create(
    createDailyReportDto: CreateDailyReportDto
  ): Promise<DailyReport> {
    return this.dailyReportModel.create(createDailyReportDto);
  }

  async findByParentAndChild(
    parentId: number,
    childId: number
  ): Promise<DailyReport[]> {
    return this.dailyReportModel.findAll({
      where: { parentId, childId },
    });
  }

  async findByChild(childId: number): Promise<DailyReport[]> {
    return this.dailyReportModel.findAll({
      where: { childId },
    });
  }

  async findByParent(parentId: number): Promise<DailyReport[]> {
    return this.dailyReportModel.findAll({
      where: { parentId },
    });
  }
}
