import { Model, DataTypes } from 'sequelize';
import sequelize from '../infrastructure/db';

export class WodEntry extends Model {
  public id!: number;
  public text!: string;
  public wod_date!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

console.log(sequelize.getDatabaseName());

WodEntry.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	text: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	wod_date: {
		type: DataTypes.DATEONLY,
		allowNull: false,
	},
}, {
  sequelize,
  tableName: 'wod_entries',
  timestamps: true,
});
