import { NextFunction, Request, Response } from "express";
import Workout from "../models/Workout";

class WorkoutsController {
    public async createWorkout(request: Request, response: Response, next: NextFunction) {
		const workout = new Workout({
			name: "Workout 13.03.2023",
			rawText: "Some workout 2222",
			workoutDate: '2021-02-06',
		});

		await workout
			.save()
			.then(() => console.log("Workout saved"))
			.catch((e) => {
				console.log(e);
			});

		response.status(200).json({
			status: "Successs",
			message: "Successfuly created new workout entry!",
		});
    }
}

export default new WorkoutsController;
