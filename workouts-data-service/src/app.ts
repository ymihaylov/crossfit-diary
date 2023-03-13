import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

import { Kafka } from 'kafkajs';
import { Mongoose } from 'mongoose';
import Workout from './models/Workout';
import MongoDatabase from './database/MongoDatabase';
import routes from './routes';

config();

const app: Application = express();

app.use(MongoDatabase.middleware);

app.use(express.json());
app.use(routes);

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
