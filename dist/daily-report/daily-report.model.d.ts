import { Model } from "sequelize-typescript";
import { Child } from "src/child/child.model";
import { User } from "src/user/user.model";
export declare class DailyReport extends Model<DailyReport> {
    report_id: number;
    parentId: number;
    parent: User;
    childId: number;
    child: Child;
    sleep: number;
    nutrition: number;
    condition: number;
    activity: number;
    reportDate: Date;
}
