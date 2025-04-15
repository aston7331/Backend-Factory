import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'payments', timestamps: false })
export default class Payment extends Model<Payment> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false
  })
  id!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  amount!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status!: string;
}
