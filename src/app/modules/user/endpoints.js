import { UserController } from './user.controller';
import middlewares from '../../middlewares/index';
import schemas from './schemas';

export default (router) => {
    router.get('/me', ...middlewares(schemas, 'me'), UserController.getUser);
    router.put('/change-password', ...middlewares(schemas, 'changePassword'), UserController.changePassword);
};
