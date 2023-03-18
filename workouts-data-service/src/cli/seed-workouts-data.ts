import MongoDatabase from "../database/MongoDatabase";
import { config } from 'dotenv';
import Workout from "../models/Workout";

config()

async function execute() {
	/**
	 * @TODO Fix this typing
	 */
	// @ts-ignore
	const mongoUri: string = process.env.MONGO_URI;

	console.log("Connecting to the DB ...");
	await MongoDatabase.connect(mongoUri);

	console.log("About to delete documetns in collection `workouts` ...");
	const deleteResult = await Workout.deleteMany({});
	console.log("Delete command result:", deleteResult);

	console.log("Disconnecting from DB ...");
	await MongoDatabase.disconnect();
}

execute()
	.then(() => {
		console.log("Execution finished, exiting process...");
		process.exit();
	})
	.catch((error) => {
		console.error("An error occurred during execution:", error);
		process.exit(1);
	});
