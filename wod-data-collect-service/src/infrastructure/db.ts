import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	dialect: 'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: "crossfit_diary",
	port: Number(process.env.DB_PORT), // @TODO: This should be fixed - not cool at all..
});

export default sequelize;
