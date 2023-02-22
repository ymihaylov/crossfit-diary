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

// =======

async function tryToConnectToDatabase() {
  // const user = await WodEntry.create({text: "Hello", wod_date: new Date()});

  // const user = await WodEntry.findOne({where: {text: "Hello"}});
  // console.log(user);

  // console.log(user.wod_date);
}

// =======
