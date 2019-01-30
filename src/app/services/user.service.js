import mongoose from 'mongoose';
const User = mongoose.model('User');
import params from '../configs/params';
import {
    VERIFICATION_EMAIL_SUBJECT,
    VERIFICATION_MESSAGE,
    RESET_PASSWORD_MESSAGE,
    RESET_PASSWORD_SUBJECT
} from '../configs/constants';
import {BadRequest} from "../errors";


export class UserService {

    constructor() { }

    static async getById(_id) { // get and select all fields without password
        return await User.findOne({ _id })
                .select('email firstName lastName createdAt emailVerified isDeleted');
    }

    static async getByEmail(email) {
        return User.findOne({ email });
    }

    static async create(payload) {
        if(payload.password === payload.confirmPassword) {
            let user = new User({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password
            });

            // generating hash from userSchema methods
            user.password = user.generatePassword(user.password);

            return await User.create(user);
        } else{
            throw new BadRequest('wrong password');
        }
    }

    static async update(_id, attributes) {
        const options = { new: true }; // returns newly updated result

        return User.findOneAndUpdate({ _id }, attributes, options);
    }

}
