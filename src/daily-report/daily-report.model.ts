import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Child } from "src/child/child.model";
import { User } from "src/user/user.model";

@Table({ tableName: "daily_reports" })
export class DailyReport extends Model<DailyReport> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  report_id: number;

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
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  })
  sleep: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  })
  nutrition: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  })
  condition: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  })
  activity: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  reportDate: Date;
}
