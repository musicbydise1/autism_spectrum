import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "src/user/user.model";

@Table({ tableName: "feedbacks" })
export class Feedback extends Model<Feedback> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  feedback_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parentId: number;

  @BelongsTo(() => User)
  parent: User;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  feedbackText: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  date: Date;
}
