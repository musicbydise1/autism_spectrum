import { PassedTestService } from "./passed-test.service";
import PassTestDto from "./Dto/pass-test.dto";
export declare class PassedTestController {
    private testService;
    constructor(testService: PassedTestService);
    endTest(passedTest: PassTestDto): Promise<import("./passed-test.model").PassedTest>;
    getPassedTestsByParent(parentId: number): Promise<import("./passed-test.model").PassedTest[]>;
}
