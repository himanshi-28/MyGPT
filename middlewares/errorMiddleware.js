const errorResponse = require("../utils/errorResponse");
/*This code defines an errorHandler function, which is a middleware function typically used 
to handle errors in an Express application. The function takes four parameters: err, req, res, and next. 
The err parameter represents the error object, req represents the request object, res represents the response object, 
and next is a function to pass control to the next middleware in the stack.
Inside the errorHandler function, a new object named error is created using the spread operator ({ ...err }) 
to make a shallow copy of the err object. This allows modifications to be made without directly affecting the original err object. 
The message property of error is set to the message property of the original err object.*/
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
  
    //mongoose cast Error
    /*This if statement checks if the name property of the err object is equal to "castError". 
    If it is, it means that the error is a MongoDB Mongoose cast error, typically occurring when a resource is not found. 
    In this case, a new errorResponse object is created with the message "Resources Not Found" and a status code of 404 (Not Found). 
    The error variable is then updated to refer to this new errorResponse object.*/
    if (err.name === "castError") {
      const message = "Resources Not Found";
      error = new errorResponse(message, 404);
    }
    //duplicate key error
    /* This if statement checks if the code property of the err object is equal to 11000. If it is, it means that the error is a MongoDB duplicate key error, 
    typically occurring when a unique field has a duplicate value. In this case, a new errorResponse object is created with the message "Duplicate field value" 
    and a status code of 400 (Bad Request). The error variable is then updated to refer to this new errorResponse object.*/
    if (err.code === 11000) {
      const message = "Duplicate field value";
      error = new errorResponse(message, 400);
    }
    //mongoose validation
    /*This if statement checks if the name property of the err object is equal to "ValidationError". 
    If it is, it means that the error is a Mongoose validation error, typically occurring when a document fails to pass the defined schema validations. 
    In this case, the message variable is set to an array of error messages extracted from the err.errors object. Each error message is accessed using Object.values(err.errors) 
    and then mapped to extract the message property.
    A new errorResponse object is created with the array of error messages and a status code of 400 (Bad Request). 
    The error variable is then updated to refer to this new errorResponse object. Finally, the response status is set using res.status(), 
    and a JSON response is sent back containing success: false, the error message from the errorResponse object, 
    or a default message of "Server Error" if the error.message is not available. */
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new errorResponse(message, 400);
      res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
      });
    }
  };
  
  module.exports = errorHandler;