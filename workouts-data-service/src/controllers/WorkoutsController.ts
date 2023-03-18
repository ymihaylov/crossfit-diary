import { NextFunction, Request, Response } from "express";
import Workout from "../models/Workout";
import { DefaultResponseType } from "../types/ResponseTypes";

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
				status: "success",
				message: "Successfully created new workout entry!",
				entryId: workout.id,
			} as DefaultResponseType);
		} catch (error) {
			next(error);
		}
    }
}

export default new WorkoutsController;
