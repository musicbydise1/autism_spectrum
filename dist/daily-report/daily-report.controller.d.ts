import { DailyReportService } from "./daily-report.service";
import { CreateDailyReportDto } from "./Dto/create.daily-report.dto";
import { DailyReport } from "./daily-report.model";
export declare class DailyReportController {
    private readonly dailyReportService;
    constructor(dailyReportService: DailyReportService);
    create(createDailyReportDto: CreateDailyReportDto): Promise<DailyReport>;
    findByParentAndChild(parentId: number, childId: number): Promise<DailyReport[]>;
    findByChild(childId: number): Promise<DailyReport[]>;
    findByParent(parentId: number): Promise<DailyReport[]>;
}
