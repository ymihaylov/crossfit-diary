import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import { Client } from 'pg';
import { Sequelize } from 'sequelize';

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

async function tryToConnectToDatabaseOld() {
    const client = new Client({
        user: 'postgres',
        password: 'postgres',
        host: 'crossfit-diary-db-service',
        database: 'crossfit_diary',
        port: 5432
      });

      try {
        await client.connect();
        console.log('Connected to the databas');
      } catch (err) {
        console.error('Failed to connect to the database');
        console.error(err);
      }
}

async function tryToConnectToDatabase() {
    const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
      });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {
    request.body.text;
    response.send('Yyyyss POST Request! Express server with TypeScript!');
});

const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
});
