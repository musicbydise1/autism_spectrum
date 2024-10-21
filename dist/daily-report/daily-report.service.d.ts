import { DailyReport } from "./daily-report.model";
import { CreateDailyReportDto } from "./Dto/create.daily-report.dto";
export declare class DailyReportService {
    private dailyReportModel;
    constructor(dailyReportModel: typeof DailyReport);
    create(createDailyReportDto: CreateDailyReportDto): Promise<DailyReport>;
    findByParentAndChild(parentId: number, childId: number): Promise<DailyReport[]>;
    findByChild(childId: number): Promise<DailyReport[]>;
    findByParent(parentId: number): Promise<DailyReport[]>;
}
