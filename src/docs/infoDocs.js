/**
 * @openapi
 * /api/info:
 *   get:
 *     summary: Retrieve basic information
 *     description: Returns email, current datetime, and GitHub URL.
 *     tags:
 *       - Information
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "your-email@example.com"
 *                 current_datetime:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-30T09:30:00Z"
 *                 github_url:
 *                   type: string
 *                   example: "https://github.com/yourusername/your-repo"
 *       500:
 *         $ref: "#/components/responses/ServerError"
 */

export const infoDocs = {
  "/api/info": {
    get: {
      summary: "Retrieve basic information",
      description: "Returns email, current datetime, and GitHub URL.",
      tags: ["Information"],
      responses: {
        200: {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    example: "your-email@example.com",
                  },
                  current_datetime: {
                    type: "string",
                    format: "date-time",
                    example: "2025-01-30T09:30:00Z",
                  },
                  github_url: {
                    type: "string",
                    example: "https://github.com/yourusername/your-repo",
                  },
                },
              },
            },
          },
        },
        500: {
          $ref: "#/components/responses/InternalServerError",
        },
      },
    },
  },
};
