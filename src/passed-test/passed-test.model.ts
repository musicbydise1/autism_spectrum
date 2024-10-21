import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Child } from "src/child/child.model";
import { Test } from "src/test/test.model";
import { User } from "src/user/user.model";

@Table({ tableName: "passedtests" })
export class PassedTest extends Model<PassedTest> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  passed_test_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parentId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Test)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  testId: number;

  @BelongsTo(() => Test)
  test: Test;

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
  })
  testPoints: number;

  @Column({
    type: DataType.TEXT,
  })
  notes: string;
}
