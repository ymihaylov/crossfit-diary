import MongoDatabase from "../database/MongoDatabase";
import { config } from 'dotenv';
import Workout, { IWorkout } from "../models/Workout";
import workoutsData from "./workouts-data";
import { Kafka } from 'kafkajs';
import KafkaSerice from "../utils/KafkaService";

config()

async function produceMessage(workout: IWorkout) {
	const kafka = new Kafka({
		clientId: 'workouts-data-service',
		brokers: ['kafka:9092'],
	});

    const producer = kafka.producer();
	try {
		await producer.connect();

		await producer.send({
			topic: 'workout_created',
			messages: [
				{ value: JSON.stringify({ workoutId: workout.id }) },
			]
		});
	} catch (e) {
		console.error("Kafka error occured", e);
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
			await produceMessage(workout);
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
