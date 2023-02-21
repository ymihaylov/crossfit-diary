import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import { ValidationError } from 'sequelize';
import sequelize from './infrastructure/db';
import { WodEntry } from './models/wod-entry.model';
import { ValidationService } from './services/ValidationService';
import WodService from './services/WodService';

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

app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {
    WodEntry.create({text: request.body.text, wod_date: request.body.date})
        .then(function (wodEntry: WodEntry) {
            response.status(200).json({
                status: "Successs",
                message: "Successfuly created new Wod Entry!",
            });
        })
        .catch((error) => {
            if (error instanceof ValidationError) {
                const validationService = new ValidationService;
                response.status(422).json({
                    status: "error",
                    message: "Validation error!",
                    errors: validationService.extractErrorMessages(error)
                });
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
