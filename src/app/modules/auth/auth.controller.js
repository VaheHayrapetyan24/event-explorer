import { UserService } from '../../services/index';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest } from '../../errors/index';
import { ALREADY_EXISTS, INVALID_EMAIL_OR_PASSWORD } from '../../configs/constants';
import Utils from '../../helpers/utils';

export class AuthController {

    static async signup(req, res, next) {
        const payload = req.body;
        try {
            console.log(payload);
            let user = await UserService.getByEmail(req.body.email);

            if (user) {
                throw new BadRequest(ALREADY_EXISTS('Email'));
            }

            user = await UserService.create(payload);

            console.log(user);

            const tokenInfo = Utils.signJWTToken(user);

            return res.status(SUCCESS_CODE).json({
                access_token: tokenInfo.token,
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    createdAt: user.createdAt,
                }
            });
        } catch(err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body;

        try {
            let user = await UserService.getByEmail(email);

            if (!user || !user.comparePassword(password)) {
                throw new BadRequest(INVALID_EMAIL_OR_PASSWORD);
            }

            const tokenInfo = Utils.signJWTToken(user);

            return res.status(SUCCESS_CODE)
                    .json({
                        access_token: tokenInfo.token,
                        user: {
                            _id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.lastName,
                            createdAt: user.createdAt,
                        }
                    });
        } catch (err) {
            next(err);
        }
    }

    static async logout(req, res, next) {
        try {
            req.logout();

            return res.status(SUCCESS_CODE).json({
                success: true
            });
        } catch (err) {
            next(err);
        }
    }

}
