const { Kafka } = require("kafkajs");

const kafka = new Kafka({
	clientId: 'crossfit-diary',
	brokers: ['kafka:9092']
});

async function run() {
	const consumer = kafka.consumer({ groupId: 'test-group' });
	await consumer.connect();
	await consumer.subscribe({ topic: 'MyTestTopic' });

	return await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			console.log(topic, partition, message.value.toString());
		},
	});
}

run().catch(console.error);
