import { Child } from "./child.model";
import { CreateChildDto } from "./Dto/create.child.dto";
export declare class ChildService {
    private readonly childModel;
    constructor(childModel: typeof Child);
    createChild(dto: CreateChildDto): Promise<Child>;
    getByParent(parentId: number): Promise<Child[]>;
}
