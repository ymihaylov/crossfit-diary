
import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import { ValidationError } from 'sequelize';
import { WodEntry } from './models/wod-entry.model';
import ValidationService from './services/ValidationService';
import { Kafka } from 'kafkajs';

config();

const app: Application = express();
app.use(express.json());

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.json({
        status: "successs",
        message: "Hello World!",
        description: "Nothing to do here! Express server with TypeScript!"
    });
});

app.get('/test-kafka-producer', async (request: Request, response: Response, next: NextFunction) => {
    // create a new Kafka instance with a broker list
    const kafka = new Kafka({
        clientId: 'wod-data-collect-service',
        brokers: ['kafka:9092'],
    });

    // create a producer instance
    const producer = kafka.producer();

    // connect the producer
    await producer.connect();

    // send a message to a topic
    await producer.send({
        topic: 'MyTestTopic',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    });

    response.json({
        status: "successs",
        message: "Added!",
    });
});
app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {

    WodEntry.create({text: request.body.text, wod_date: request.body.date})
        .then(function (wodEntry: WodEntry) {
            response.status(200).json({
                status: "Successs",
                message: "Successfuly created new Wod Entry!",
            });
        })
        .catch((error) => {
            // @TODO - Move this to middleware
            if (error instanceof ValidationError) {
                const validationService = new ValidationService;

                response.status(422).json({
                    status: "error",
                    message: "Validation error!",
                    errors: validationService.extractErrorMessages(error)
                });

                return;
            }

            response.status(500).json({
                status: "internal_server_error",
                message: "something_went_wrong",
            });
        });
});

const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
});
