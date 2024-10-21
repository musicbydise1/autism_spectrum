import { Model } from "sequelize-typescript";
import { User } from "src/user/user.model";
export declare class Child extends Model<Child> {
    childe_id: number;
    parentId: number;
    user: User;
    firstName: string;
    lastName: string;
    Patronymic: string;
    age: number;
    diagnosed: boolean;
}
