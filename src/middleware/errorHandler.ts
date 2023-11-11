import { NextFunction, Request, Response } from "express";
import ApiError from "../config/ApiError";


const errorHandler = async( err: Error, req: Request, res: Response, next: NextFunction ) => {
    if ( res.headersSent ) {
        return next(err);
    }

    if ( err instanceof ApiError ) {
        res.status( err.httpCode ).json( { error: err.name } );
        return;
    }
    
    console.log(err.message);
    

    res.status(500).json({
        error: {
            name: "Internal Server Error"
        }
    })
}

export default errorHandler;