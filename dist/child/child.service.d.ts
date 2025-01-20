import { Child } from "./child.model";
import { CreateChildDto } from "./Dto/create.child.dto";
import { UpdateChildDto } from "./Dto/update.child.dto";
export declare class ChildService {
    private readonly childModel;
    constructor(childModel: typeof Child);
    createChild(dto: CreateChildDto): Promise<Child>;
    getByParent(parentId: number): Promise<Child[]>;
    getAllChildren(): Promise<Child[]>;
    findOneById(id: number): Promise<Child>;
    updateChild(id: number, updateChildDto: UpdateChildDto): Promise<Child>;
    deleteChild(id: number): Promise<void>;
}
