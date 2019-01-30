import moment from 'moment';

// custom validator used by express-validator
export const isValidDate = (value) => {
    return  moment(value).isValid();
};
