import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Optional } from 'sequelize';

// Define attribute interface
export interface ErrorLogAttributes {
  id: string;
  message: string;
  stack?: string;
  statusCode?: number;
  date: string;
  timestamp: Date;
}
// Define creation attributes interface (id is optional for creation)
export interface ErrorLogCreationAttributes extends Optional<ErrorLogAttributes, 'id'> {}

@Table({ tableName: 'error_logs', timestamps: false })
export default class ErrorLog extends Model<ErrorLogAttributes, ErrorLogCreationAttributes> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  message!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  stack?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  statusCode?: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  date!: string; // YYYY-MM-DD for daily grouping

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW
  })
  timestamp!: Date;
}
