import { ChildService } from "./child.service";
import { CreateChildDto } from "./Dto/create.child.dto";
import { UpdateChildDto } from "./Dto/update.child.dto";
export declare class ChildController {
    private service;
    constructor(service: ChildService);
    createChild(childDto: CreateChildDto): Promise<import("./child.model").Child>;
    getByParent(parentId: number): Promise<import("./child.model").Child[]>;
    getAllChildren(): Promise<import("./child.model").Child[]>;
    updateChild(id: number, updateChildDto: UpdateChildDto): Promise<import("./child.model").Child>;
    deleteChild(id: number): Promise<void>;
}
