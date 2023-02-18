import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import { Client } from 'pg';


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
    const client = new Client({
        user: 'postgres',
        password: 'postgres',
        host: 'crossfit-diary-db-service', // This is the name of the Postgres service defined in your docker-compose.yaml
        database: 'crossfit_diary',
        port: 5432
      });

      try {
        await client.connect();
        console.log('Connected to the database');
      } catch (err) {
        console.error('Failed to connect to the database');
        console.error(err);
      }
}

app.post('/collect-wod-data', (request: Request, response: Response, next: NextFunction) => {
    request.body.text;
    response.send('Yyyyss POST Request! Express server with TypeScript!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
