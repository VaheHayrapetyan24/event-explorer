import { INVALID, REQUIRED, USER_AUTH } from '../../configs/constants';

export default {
    signup: {    },
    login: {
        validation: {
            email: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Email')
                },
                isEmail: {
                    errorMessage: INVALID('Email')
                }
            },
            password: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Password')
                }
            }
        }
    },
    logout: {
        authentication: true,
        authenticationType: USER_AUTH
    },
    resetPasswordCheckEmail: {
        validation: {
            email: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Email')
                },
                isEmail: {
                    errorMessage: INVALID('Email')
                }
            }
        }
    },
    resetPassword: {
        validation: {
            password: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('Password')
                }
            }
        }
    }
};

