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
				console.error("Error appeared while connecting to db: " + error);
			});
	}

	public static async disconnect() {
		if (!MongoDatabase.databaseConnection) {
			return;
		}

		Mongoose.disconnect();
	};

	/**
	 * @TODO move this middlewhere somewhere else
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
