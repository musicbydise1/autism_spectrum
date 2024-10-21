import { TestService } from "./test.service";
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    create(testName: string): Promise<import("./test.model").Test>;
    findAll(): Promise<import("./test.model").Test[]>;
    findOne(id: number): Promise<import("./test.model").Test>;
}
