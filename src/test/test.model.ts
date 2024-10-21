import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({ tableName: "tests" })
export class Test extends Model<Test> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  testId: number;

  @Column({
    type: DataType.TEXT,
  })
  testName: string;
}
