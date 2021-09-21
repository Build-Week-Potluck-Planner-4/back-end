const User = require('./modal');

const checkToken = (req, res, next) => {
    next();
};

const checkTokenId = (req, res, next) => {
    next();
};

const checkUsernameExists = async (req, res, next) => {
    try {
        const { username } = req.body;
        const exist = await User.getBy({ username });
        if (!exist) {
            next({
                message: 'Invalid credentials',
                status: 401
            });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

const checkUsernameUnique = async (req, res, next) => {
    try {
        const { username } = req.body;
        const exist = await User.getBy({ username });

        if (exist.length >= 1) {
            next({
                message: 'Username taken',
                status: 422
            });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

const checkUserPayload = (req, res, next) => {
    next();
};

module.exports = {
    checkToken,
    checkUsernameExists,
    checkUsernameUnique,
    checkUserPayload
};