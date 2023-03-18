import { NextFunction, Request, Response } from "express";

class CreateWorkoutDefaultSetter {
	public setDefaults(request: Request, response: Response, next: NextFunction) {
		request.body.name = request.body.name ?? '';
		request.body.date = request.body.date ?? Date.now();

		next();
	}
}

export default new CreateWorkoutDefaultSetter;
