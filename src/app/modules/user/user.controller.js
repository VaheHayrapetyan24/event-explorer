import Utils from '../../helpers/utils';
import { UserService } from '../../services';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest, NotFound } from '../../errors';
import { INVALID, NOT_EXISTS } from '../../configs/constants';

export class UserController {
    static async getUser(req, res, next) {
        try {
            const { authorization } = req.headers;
            const token = authorization.replace('bearer ', '');

            const tokenInfo = await Utils.verifyJWTToken(token);
            const user = await UserService.getById(tokenInfo.id);

            if (!user) {
                throw new NotFound(NOT_EXISTS('User'));
            }

            return res.status(SUCCESS_CODE)
                    .json({
                        user: {
                            _id: user._id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                        }
                    });
        } catch (err) {
            next(err);
        }
    }

    static async changePassword(req, res, next) {
        const { oldPassword, newPassword } = req.body;
        const user = req.user;
        try {
            if (!user.comparePassword(oldPassword)) {
                throw new BadRequest(INVALID('Password'));
            }

            const hash = user.generatePassword(newPassword);

            await UserService.update(user._id, { password: hash });

            return res.status(SUCCESS_CODE).json({
                success: true
            });
        } catch (err) {
            next(err);
        }
    }
}
