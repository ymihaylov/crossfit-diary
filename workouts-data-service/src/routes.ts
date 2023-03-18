import { Router } from "express";

import IndexController from "./controllers/IndexController";

import WorkoutsController from "./controllers/WorkoutsController";
import CreateWorkoutDefaultSetter from "./middlewares/default-input-setters/CreateWorkoutDefaultSetter";
import CreateWorkoutValidator from "./middlewares/validators/CreateWorkoutValidator";

const routes: Router = Router()

routes.get('/', IndexController.index);
routes.post(
	'/workouts/create',
	CreateWorkoutValidator.validateWorkoutCreation,
	CreateWorkoutDefaultSetter.setDefaults,
	WorkoutsController.createWorkout
);

export default routes;
