const passport = require('passport');

export default (rule) => { // dynamic function to authenticate with specific passport strategy
    return passport.authenticate(rule, { session: false });
}
