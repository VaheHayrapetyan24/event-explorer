import { GithubController } from './github.controller';
import middlewares from '../../middlewares/index';
import schemas from './schemas';

export default (router) => {
    router.get('', ...middlewares(schemas, 'getByName'), GithubController.top20repositories);
};
