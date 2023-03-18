import { Kafka } from "kafkajs";

class KafkaSerice {
	private readonly kafka: Kafka;

	constructor(brokers: string[]) {
		this.kafka = new Kafka({
			clientId: 'workouts-data-service',
			brokers: brokers,
		});
	}
}

export default KafkaSerice;
