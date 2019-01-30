import { EventController } from './event.controller'
import middlewares from '../../middlewares/index';
import schemas from './schemas';

export default (router) => {
    router.get('', ...middlewares(schemas, 'userAuth'), EventController.getEvents);
}
