import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

config();

const app: Application = express();

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    console.log("hello!");
    response.json({
        status: "Successs",
        message: "Hello World!",
        description: "Express server with TypeScript"
    });

    // response.send('Express server with TypeScript!');
});

app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {
    response.send('Yyyyss POST Request! Express server with TypeScript!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
