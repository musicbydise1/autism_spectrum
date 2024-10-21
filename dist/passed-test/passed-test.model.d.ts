import { Model } from "sequelize-typescript";
import { Child } from "src/child/child.model";
import { Test } from "src/test/test.model";
import { User } from "src/user/user.model";
export declare class PassedTest extends Model<PassedTest> {
    passed_test_id: number;
    parentId: number;
    user: User;
    testId: number;
    test: Test;
    childId: number;
    child: Child;
    testPoints: number;
    notes: string;
}
