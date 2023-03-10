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
				msg: 'Text field should not be blank.'
			},
			notNull: {
				msg: 'Text field should not be blank'
			},
		}
	},
	wod_date: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		validate: {
			isDate: {
				args: true,
				msg: 'Date should be valid date value',
			},
		}
	},
}, {
  sequelize,
  tableName: 'wod_entries',
  timestamps: true,
});
