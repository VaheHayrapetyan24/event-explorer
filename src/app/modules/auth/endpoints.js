import { AuthController } from './auth.controller';
import middlewares from '../../middlewares/index';
import schemas from './schemas';

export default (router) => {
    router.post('/signup', ...middlewares(schemas, 'signup'), AuthController.signup); // /api/auth/signup
    router.post('/login', ...middlewares(schemas, 'login'), AuthController.login); // /api/auth/login
    router.get('/logout', ...middlewares(schemas, 'logout') , AuthController.logout); // /api/auth/logout
};
