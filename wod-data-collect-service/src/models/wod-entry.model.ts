import { Model, DataTypes, NOW } from 'sequelize';
import sequelize from '../infrastructure/db';

export class WodEntry extends Model {
  public id!: number;
  public text!: string;
  public wod_date!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

WodEntry.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	text: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Please enter the text ..'
			},
		}
	},
	wod_date: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		validate: {
			isDate: true,
		}
	},
}, {
  sequelize,
  tableName: 'wod_entries',
  timestamps: true,
});
