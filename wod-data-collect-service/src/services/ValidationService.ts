import { ValidationError, ValidationErrorItem } from "sequelize";

export class ValidationService {
	public extractErrorMessages(validationError: ValidationError) {
		const result = {
			text: [

			]
		};

		// validationError.errors.forEach((error: ValidationErrorItem) => {error.path: }})
	}
}
