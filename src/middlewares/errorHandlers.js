export default (err, req, res, next) => {
  // Set default status code to 500 if not specified
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  // Send error response with status code and message
  res.status(statusCode).json({
    message: message,
    status: statusCode,
  });
};
