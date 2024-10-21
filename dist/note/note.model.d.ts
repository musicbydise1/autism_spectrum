import { Model } from 'sequelize-typescript';
import { Child } from 'src/child/child.model';
import { User } from 'src/user/user.model';
export declare class Note extends Model<Note> {
    parentId: number;
    parent: User;
    childId: number;
    child: Child;
    noteText: string;
    date: Date;
}
