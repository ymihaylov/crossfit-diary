import MongoDatabase from "../database/MongoDatabase";
import { config } from 'dotenv';
import Workout from "../models/Workout";
import workoutsData from "./workouts-data";
import { Kafka } from 'kafkajs';

config()

async function produceMessage(workout: any) {
	const kafka = new Kafka({
		clientId: 'workouts-data-service',
		brokers: ['kafka:9092'],
	});

	const producer = kafka.producer();
	try {
		await producer.connect();

		const result = await producer.send({
			topic: 'workout_created',
			messages: [{ value: JSON.stringify({ workoutId: 15 }) }],
		});

		console.log("hello worldldldldldlddldl");

		console.log("Message sent: ", result);
	} catch (error) {
		console.error("Error sending message:", error);
	} finally {
		await producer.disconnect();
	}

}

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
			produceMessage(workout);
			break;
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
