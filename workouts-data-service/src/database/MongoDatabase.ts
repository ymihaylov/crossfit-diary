import * as Mongoose from "mongoose";

export default class MongoDatabase {
	private static databaseConnection: Mongoose.Connection;

	public static async connect(mongoUrl: string) {
		if (MongoDatabase.databaseConnection) {
			return;
		}

		await Mongoose.connect(mongoUrl)
			.then(connection => {
				console.log('Connected to database!');
				MongoDatabase.databaseConnection = Mongoose.connection;
			})
			.catch(error => {
				console.error("Error appeared while connectio to db: " + error);
			});
	}

	public static async disconnect() {
		if (!MongoDatabase.databaseConnection) {
			return;
		}

		Mongoose.disconnect();
	};

	/**
	 * @TODO move this middlewhere somewherelese
	 */
	public static middleware(req: any, res: any, next: any) {
		if (!MongoDatabase.databaseConnection) {

			/**
			 * @TODO fix this typing
			 */
			// @ts-ignore
			MongoDatabase.connect(process.env.MONGO_URI);
		}

		req.db = MongoDatabase.databaseConnection;
		next();
	}
}


// import { Connection, Mongoose } from "mongoose";

// const mongoose = new Mongoose();

// let database: Connection;
// export const connect = () => {
// 	if (database) {
// 	  return;
// 	}

// 	const mongoUrl = 'mongodb://crossfit_diary_user:crossfit@crossfit-diary-mongodb:27017/crossfit_diary';

// 	mongoose.connect(mongoUrl)
// 		.then(connection => {
// 			console.log('Connected to database!');
// 		})
// 		.catch(error => {
// 			console.error("Error appeared while connectio to db: " + error);
// 		});

// 	database = mongoose.connection;
// 	return mongoose;
// };

// export const disconnect = () => {
// 	if ( ! database) {
// 		return;
// 	}

// 	mongoose.disconnect();
// }
