import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

import { Kafka } from 'kafkajs';
import { MongoClient, MongoClientOptions } from 'mongodb';
import { Mongoose } from 'mongoose';
import Workout from './models/Workout';
import MongoDatabase from './database/MongoDatabase';
import router from './routes/workouts';

config();

const app: Application = express();

app.use(express.json());
app.use(MongoDatabase.middleware);
app.use(router);

app.post('/collect-workout-data', async (request: Request, response: Response, next: NextFunction) => {
    const workout = new Workout({
        name: "Workout 13.03.2023",
        rawText: "Some workout 2222",
        workoutDate: Date.now(),
    });

    await workout.save().then(() => console.log("Workout saved"));

    response.status(200).json({
        status: "Successs",
        message: "Successfuly created new workout entry!",
    });
});


app.get('/test-kafka-producer', async (request: Request, response: Response, next: NextFunction) => {
    // create a new Kafka instance with a broker list
    // const kafka = new Kafka({
    //     clientId: 'crossfit-diary',
    //     brokers: ['kafka:9092'],
    // });

    // create a producer instance
    // const producer = kafka.producer();

    // connect the producer
    // await producer.connect();

    // send a message to a topic
    // await producer.send({
    //     topic: 'MyTestTopic',
    //     messages: [
    //         { value: 'Hello KafkaJS user new new!' },
    //     ],
    // });

    response.json({
        status: "successs",
        message: "Added!",
    });
});

/**
 * @TODO Fix this with type in env.d.ts
 */
const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
});
