import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'notifications', timestamps: false })
export default class Notification extends Model<Notification> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  message!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  })
  read!: boolean;
}
