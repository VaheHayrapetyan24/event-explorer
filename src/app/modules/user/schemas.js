import { REQUIRED, USER_AUTH } from '../../configs/constants';

export default {
    me: {
        authentication: true
    },
    changePassword: {
        validation: {
            oldPassword: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Current Password')
                }
            },
            newPassword: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('New Password')
                }
            }
        },
        authentication: true,
        authenticationType: USER_AUTH
    }
};
