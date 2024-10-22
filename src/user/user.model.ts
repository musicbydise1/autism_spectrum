import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  user_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  patronymic: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phoneNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  children: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,  // Это поле может быть пустым
  })
  city: string;

  // Добавляем поле для поликлиники
  @Column({
    type: DataType.STRING,
    allowNull: true,  // Это поле может быть пустым
  })
  clinic: string;
}
