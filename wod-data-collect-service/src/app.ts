import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import sequelize from './infrastructure/db';
import { WodEntry } from './models/wod-entry.model';

config();

const app: Application = express();
app.use(express.json());

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    tryToConnectToDatabase();

    response.json({
        status: "Successs",
        message: "Hello World!",
        description: "Express server with TypeScript"
    });
});

async function tryToConnectToDatabase() {
    // const user = await WodEntry.create({text: "Hello", wod_date: new Date()});

    const user = await WodEntry.findOne({where: {text: "Hello"}});
    console.log(user);

    // console.log(user.wod_date);
}

app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {
    request.body.text;
    response.send('Yyyyss POST Request! Express server with TypeScript!');
});

const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
});
