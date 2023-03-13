import { NextFunction, Request, Response } from "express";
import Workout from "../models/Workout";

class IndexController {
    public async index(request: Request, response: Response, next: NextFunction) {
		response.json({
            status: "successs",
            message: "Hello World!",
            description: "Nothing to do here! Express server with TypeScript!"
        });
    }
}

export default new IndexController;
