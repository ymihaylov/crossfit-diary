import { Router } from "express";

import IndexController from "./controllers/IndexController";

import WorkoutsController from "./controllers/WorkoutsController";

const routes: Router = Router()

routes.get('/', IndexController.index);
routes.post('/workouts/create', WorkoutsController.createWorkout);

export default routes;
