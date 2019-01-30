import moment from 'moment';
import * as jwt from 'jsonwebtoken';
import params from '../configs/params';

export default class Utils {
    static signJWTToken(data, admin = false) {
        const payload = { id: data._id, created_at: moment().toString() }; // data for creating jwt token
        let secret = admin ? params.adminTokenSecret : params.userTokenSecret; // admin and user token secrets from .env

        let token = jwt.sign(payload, secret);

        return { token };
    }

    static verifyJWTToken(token, secret = params.userTokenSecret) {
        try {
            return jwt.verify(token, secret); // result will be verified(logged in) user's data
        } catch (e) {
            return null;
        }
    }
}
