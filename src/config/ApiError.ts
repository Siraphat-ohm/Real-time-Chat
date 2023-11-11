import { HttpStatusCode } from "../utils/HttpStatusCode";
import BaseError from "./BaseError";

class ApiError extends BaseError {
    constructor ( name: string, httpCode = HttpStatusCode.INTERNALL_SERVER, description = "Internal Server Error" ) {
        super( name, httpCode, description);
    }
}

export default ApiError;