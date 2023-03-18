import { Router } from "express";

import IndexController from "./controllers/IndexController";

import WorkoutsController from "./controllers/WorkoutsController";
import CreateWorkoutValidator from "./validators/CreateWorkoutValidator";

const routes: Router = Router()

routes.get('/', IndexController.index);
routes.post(
	'/workouts/create',
	CreateWorkoutValidator.validateWorkoutCreation,
	WorkoutsController.createWorkout
);

export default routes;
