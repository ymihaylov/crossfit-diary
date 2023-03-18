import { ValidationError } from "express-validator";

export type DefaultResponseType = {
	status: string,
	message: string,
	entryId?: string,
	errors?: Array<ValidationError>,
}
