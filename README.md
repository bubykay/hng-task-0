# HNG12 Stage 0 - Public API

## Overview
This project is a simple public API that provides basic information, including:
- Your registered email address (used on HNG12 Slack workspace).
- The current date and time in ISO 8601 format.
- The GitHub repository URL for this project.

The API is built using **Node.js** with **Express.js** and follows best practices for structuring and handling requests.

## Features
- RESTful API with a single endpoint.
- Returns JSON-formatted responses.
- CORS-enabled for cross-origin requests.
- Proper error handling.
- Hosted on a publicly accessible platform.

## Technology Stack
- **Programming Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Deployment Platform:** [Specify your hosting provider]
- **Version Control:** Git & GitHub

## API Documentation
### Endpoint: `GET /api`
#### Response Format (200 OK)
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```
- **SwaggerDoc Link:** [https://hng-week1-riea.onrender.com/api-docs/#/default/get_api_info](https://hng-week1-riea.onrender.com/api-docs/#/default/get_api_info)

## Getting Started
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Yarn](https://yarnpkg.com/) (optional but recommended)
- Git

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```sh
   yarn install  # or npm install
   ```

3. Start the server locally:
   ```sh
   yarn dev  # or npm run dev
   ```
   The server will run on `http://localhost:3000` by default.

## Deployment
To deploy the API, you can use any cloud platform such as:
- Vercel
- Render
- Railway
- AWS Lambda (via API Gateway)
- DigitalOcean, Linode, or Heroku

Ensure the API is accessible via a public URL before submission.

## Links
- **GitHub Repository:** [https://github.com/bubykay/hng-week1/](https://github.com/bubykay/hng-week1)
- **HNG Internship Hiring Links:**
  - [Python Developers](https://hng.tech/hire/python-developers)
  - [C# Developers](https://hng.tech/hire/csharp-developers)
  - [Golang Developers](https://hng.tech/hire/golang-developers)
  - [PHP Developers](https://hng.tech/hire/php-developers)
  - [Java Developers](https://hng.tech/hire/java-developers)
  - [Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License
This project is licensed under the MIT License.

## Contact
For any issues, feel free to open an issue on GitHub or reach out via email: `your-email@example.com`.

