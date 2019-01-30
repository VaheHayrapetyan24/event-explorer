import { Router } from 'express';
import eventEndpoints from './endpoints';

export default class EventModule {
    apiRouter;
    router;

    constructor (apiRouter) {
        this.apiRouter = apiRouter;
        this.router = Router();
    }

    createEndpoints() {
        this.assignRouter();
        this.assignEndpoints();
    }

    assignRouter() {
        this.apiRouter.use('/events', this.router);
    }

    assignEndpoints() {
        eventEndpoints(this.router);
    }
}
