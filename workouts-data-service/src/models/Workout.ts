import { model, Mongoose, Schema } from "mongoose";

interface IWorkout extends Document {
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
	},
	workoutDate: {
		type: Date,
		required: true,
	},
}, {
	timestamps: true,
});

const Workout = model("Workout", workoutSchema);

export default Workout;
