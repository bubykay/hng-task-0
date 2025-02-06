import dotenv from "dotenv";
import { getEnvVariable } from "../utils/index.js";
dotenv.config()


export default {
    port: getEnvVariable("port"),
    email: getEnvVariable('email'),
    githubUrl: getEnvVariable("github_url"),
    // domain:getEnvVariable('domain'),
    swaggerDomain: getEnvVariable('swagger_domain'),
    nodeEnv: getEnvVariable('node_env'),
    isProduction: getEnvVariable('is_production')
};
