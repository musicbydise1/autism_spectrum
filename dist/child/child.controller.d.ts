import { ChildService } from "./child.service";
import { CreateChildDto } from "./Dto/create.child.dto";
export declare class ChildController {
    private service;
    constructor(service: ChildService);
    createChild(childDto: CreateChildDto): Promise<import("./child.model").Child>;
    getByParent(parentId: number): Promise<import("./child.model").Child[]>;
}
