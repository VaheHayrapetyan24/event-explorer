import { Router } from 'express';
import githubEndpoints from './endpoints';

export default class GithubModule {
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
        this.apiRouter.use('/github', this.router);
    }

    assignEndpoints() {
        githubEndpoints(this.router);
    }
}
