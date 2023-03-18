const { Kafka } = require("kafkajs");

async function run() {
	console.log("Run forest run")

	const kafka = new Kafka({
		clientId: 'workouts-data-transform-service',
		brokers: ['kafka:9092']
	});

	const consumer = kafka.consumer({ groupId: 'workouts-data-transform-service-group' });
	await consumer.connect();
	await consumer.subscribe({ topic: 'workout_created' });

	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			console.log("NEW MESSAGE RECEIVED: ");
			console.log(topic, partition, message.value.toString());
		},
	});
}

run().catch(console.error);
