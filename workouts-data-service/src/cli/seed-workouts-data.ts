import MongoDatabase from "../database/MongoDatabase";
import { config } from 'dotenv';
import Workout from "../models/Workout";
import workoutsData from "./workouts-data";

config()

async function execute() {
	/**
	 * @TODO Fix this typing
	 */
	// @ts-ignore
	const mongoUri: string = process.env.MONGO_URI;

	console.log("Connecting to the DB ...");
	await MongoDatabase.connect(mongoUri);


	for (const workoutData of workoutsData) {
		const workout = new Workout({
			name: workoutData.name,
			rawText: workoutData.rawText,
			workoutDate: workoutData.workoutDate,
		});

		try {
			await workout.save();
			console.log(`Workout ${workoutData.name} saved!`);
		} catch (e) {
			console.log(e);
		}
	}

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
