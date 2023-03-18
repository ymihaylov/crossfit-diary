import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { DefaultResponseType } from "../../types/ResponseTypes";

class CreateWorkoutValidator {
	public validateWorkoutCreation = [
		check('text', 'Text is required').notEmpty(),

		check('date', 'Invalid date format')
			.optional()
			.custom(this.validateDate),

		this.handleValidationResult,
	];

	private handleValidationResult(request: Request, response: Response, next: NextFunction) {
		const errors = validationResult(request);

		if (!errors.isEmpty()) {
			return response
				.status(400)
				.json({
					status: 'unsuccessful',
					message: "Validation errors occurred",
					errors: errors.array(),
				} as DefaultResponseType);
		}

		next();
	}

	private validateDate(value: string) {
		const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

		if (!dateRegex.test(value)) {
          throw new Error('Invalid date format. Correct format is YYYY-MM-DD');
        }

		if (isNaN(Date.parse(value))) {
          throw new Error('Invalid date');
        }

		return true;
	}
}

export default new CreateWorkoutValidator;
