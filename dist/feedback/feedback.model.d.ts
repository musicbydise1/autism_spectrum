import { Model } from "sequelize-typescript";
import { User } from "src/user/user.model";
export declare class Feedback extends Model<Feedback> {
    feedback_id: number;
    parentId: number;
    parent: User;
    feedbackText: string;
    date: Date;
}
