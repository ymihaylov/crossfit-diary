```typescript
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
```

```typescript
async function tryToConnectToDatabase() {

const user = await WodEntry.findOne({where: {text: "Hello"}});
  console.log(user);

  console.log(user.wod_date);
}
```

```bash
docker exec -it  0bf215a82792 kafka-console-producer.sh --broker-list localhost:9092 --topic MyTestTopic
docker exec -it 0bf215a82792 kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic MyTestTopic --from-beginning
```
