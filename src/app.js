import express from 'express'
import cors from 'cors'
import apiRoutes from './routes/apiRoutes.js';
import errorHandler from './middlewares/errorHandlers.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swaggerConfig.js';
import responseMiddleware from './middlewares/responseMiddleware.js';



class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.errorHandler();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(responseMiddleware)
    }

    routes() {
        this.app.use("/api", apiRoutes);
        this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    errorHandler() {
        this.app.use(errorHandler);
        
    }

    getServer() {
        return this.app;
    }
}



export default new App().getServer()
