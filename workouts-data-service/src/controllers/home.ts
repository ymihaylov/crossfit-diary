import { NextFunction, Request, Response } from "express";

export function index(request: Request, response: Response, next: NextFunction) {
	response.json({
        status: "successs",
        message: "Hello World!",
        description: "Nothing to do here! Express server with TypeScript!"
    });
}
