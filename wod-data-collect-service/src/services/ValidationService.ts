import { ValidationError, ValidationErrorItem } from "sequelize";

type ExtractedErrorMessages = {
  [key: string]: string[];
};

export default class ValidationService {
	public extractErrorMessages(validationError: ValidationError): ExtractedErrorMessages {
		return validationError.errors.reduce((result: ExtractedErrorMessages, error: ValidationErrorItem) => {
			if (!error.path) {
				return result;
			}

			if (!result[error.path]) {
				result[error.path] = [];
			}

		  	result[error.path]?.push(error.message);

		  	return result;
		}, {});
	  }
}
