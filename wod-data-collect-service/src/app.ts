import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

config();

const app: Application = express();

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.send('Express server with TypeScript!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
