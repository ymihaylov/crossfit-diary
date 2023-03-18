import { model, Mongoose, Schema, Types } from "mongoose";

export interface IWorkout extends Document {
	id: string;
	// _id: Types.ObjectId;
	name?: string;
	rawText: string;
	workoutDate: Date;

	createdAt: Date,
	updatedAt: Date,
}

const workoutSchema = new Schema<IWorkout>({
	name: {
		type: String,
	},
	rawText: {
		type: String,
		required: true,
		immutable: true
	},
	workoutDate: {
		type: Date,
		required: true,
		default: Date.now
	},
}, {
	timestamps: true,
});

const Workout = model('Workout', workoutSchema);

export default Workout;
