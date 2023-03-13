import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

import { Kafka } from 'kafkajs';
import { MongoClient, MongoClientOptions } from 'mongodb';
import { Mongoose } from 'mongoose';
import Workout from './models/Workout';
import MongoDatabase from './database/MongoDatabase';

config();

const app: Application = express();
app.use(express.json());

app.use(MongoDatabase.middleware);

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.json({
        status: "successs",
        message: "Hello World!",
        description: "Nothing to do here! Express server with TypeScript!"
    });
});

app.get('/test-mongoose', async (request: Request, response: Response, next: NextFunction) => {
    testMongooseConnection();

    response.json({
        status: "successs",
        message: "Test mongoose connection",
        description: "Nothing to do here! Test mongodb connection!"
    });
});

async function testMongooseConnection() {
    const workout = new Workout({
        name: "Workout 13.03.2023",
        rawText: "Some workout 2222",
        workoutDate: Date.now(),
    });

    await workout.save().then(() => console.log("Workout saved"));
}


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
app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {
//     workouts: [
//         {
//             id: "1234",
//             date: "2023-02-14",
//             updatedAt: "2023-02-14",
//             createdAt: "2023-02-14",
//             exercies: {
//                 id: "213123221",
//                 name: "dasdsadsa",
//                 updatedAt: "2023-02-14",
//                 createdAt: "2023-02-14"
//             }
// ,        }
//     ];
    // WodEntry.create({text: request.body.text, wod_date: request.body.date})
    //     .then(function (wodEntry: WodEntry) {
    //         response.status(200).json({
    //             status: "Successs",
    //             message: "Successfuly created new Wod Entry!",
    //         });
    //     })
    //     .catch((error) => {
    //         // @TODO - Move this to middleware
    //         if (error instanceof ValidationError) {
    //             const validationService = new ValidationService;

    //             response.status(422).json({
    //                 status: "error",
    //                 message: "Validation error!",
    //                 errors: validationService.extractErrorMessages(error)
    //             });

    //             return;
    //         }

    //         response.status(500).json({
    //             status: "internal_server_error",
    //             message: "something_went_wrong",
    //         });
    //     });
});

const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
});
