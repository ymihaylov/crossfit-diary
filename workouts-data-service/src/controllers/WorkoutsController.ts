import { NextFunction, Request, Response } from "express";
import Workout from "../models/Workout";

type CreateWorkoutRequestBody = {
	name: string,
	text: string,
	date: Date
}

class WorkoutsController {
    public async createWorkout(request: Request, response: Response, next: NextFunction) {
		const body: CreateWorkoutRequestBody = request.body;

		const workout = new Workout({
			name: body.name,
			rawText: body.text,
			workoutDate: body.date,
		});

		try {
			await workout.save();
			console.log('Workout saved');

			response.status(201).json({
				status: "Successs",
				message: "Successfuly created new workout entry!",
				entry_id: workout.id,
			});
		} catch (error) {
			next(error);
		}
    }
}

export default new WorkoutsController;
