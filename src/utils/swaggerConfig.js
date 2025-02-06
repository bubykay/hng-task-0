// src/utils/swaggerConfig.js
import swaggerJSDoc from "swagger-jsdoc";
import config from "../config/env.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HNG Internship API Documentation - Task 1",
      version: "1.0.0",
      description: "API documentation for Task 1 project",
    },
    components: {
    responses: {
      NotFound: {
        description: "Resource not found",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  example: "User not found",
                },
              },
            },
          },
        },
      },
      ServerError: {
        description: "Internal server error",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  example: "Internal server error. Please try again later.",
                },
              },
            },
          },
        },
      },
    },
  },
    
    servers: [
      {
        url: config.swaggerDomain, // Change this to your deployed URL
        description: config.isProduction ? "Production Server": "Local development server",
      },
    ],
  },
  
  apis: ["./src/routes/*.js"], // Path to your API route files
};



const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
