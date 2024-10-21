import { PassedTest } from "./passed-test.model";
import PassTestDto from "./Dto/pass-test.dto";
export declare class PassedTestService {
    private readonly testModel;
    constructor(testModel: typeof PassedTest);
    submitTest(passedTest: PassTestDto): Promise<PassedTest>;
    getPassedTestsByParent(parentId: number): Promise<PassedTest[]>;
}
