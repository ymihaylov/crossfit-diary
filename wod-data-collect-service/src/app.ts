import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import { ValidationError } from 'sequelize';
import sequelize from './infrastructure/db';
import { WodEntry } from './models/wod-entry.model';

config();

const app: Application = express();
app.use(express.json());

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.json({
        status: "Successs",
        message: "Hello World!",
        description: "Nothing to do here! Express server with TypeScript!"
    });
});

async function createWodEntity(text: string, date: string): Promise<WodEntry> {
    return await WodEntry.create({text: text, wod_date: date});
}

app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {
    createWodEntity(request.body.text, request.body.date)
        .then(function (wodEntry: WodEntry) {
            response.status(200).json({
                status: "Successs",
                message: "Successfuly created new Wod Entry!",
            });
        })
        .catch(function (errorObj: ValidationError) {
            response.status(401).json({
                status: "Error",
                message: "Error",
            });
        });
});

const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
});
