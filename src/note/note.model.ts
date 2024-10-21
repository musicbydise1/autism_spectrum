import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Child } from 'src/child/child.model';
import { User } from 'src/user/user.model';

@Table({ tableName: 'notes' })
export class Note extends Model<Note> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parentId: number;
  @BelongsTo(() => User)
  parent: User;

  @ForeignKey(() => Child)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  childId: number;
  @BelongsTo(() => Child)
  child: Child;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  noteText: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  date: Date;
}
