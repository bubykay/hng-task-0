import {
  successResponseFormat,
  errorResponseFormat,
} from "../schemas/responseSchemas.js";

const responseMiddleware = (req, res, next) => {
  const originalSend = res.send;

  res.send = (body) => {
    let modifiedResponse = body;
    try {
      const parsedBody = JSON.parse(body);

      if (res.statusCode < 400) {
        parsedBody.statusCode = res.statusCode;
        modifiedResponse = JSON.stringify(
          successResponseFormat({ ...parsedBody }, parsedBody.message)
        );
      } else if (res.statusCode >= 400) {
        parsedBody.statusCode = res.statusCode;
        modifiedResponse = JSON.stringify(errorResponseFormat(parsedBody));
      }
    } catch (e) {
      console.log("Failed to parse response body, sending as is:", e);
    }

    originalSend.call(res, modifiedResponse);
  };
  next();
};

export default responseMiddleware;
