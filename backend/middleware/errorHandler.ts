import { Request, Response } from "express";
import { ServerError } from "../utils/serverError";

const errorHandler = (err: any, req: Request, res: Response) => {
  console.error(err);
  // Check if the error is a known type
  if (err instanceof ServerError) {
    return res.status(err.code).json({ message: err.message });
  }
  // For generic errors, return a 500 status code and a generic error message
  res.status(500).json({ error: "Internal Server Error" });
};

export default errorHandler;
