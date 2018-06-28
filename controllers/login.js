const jwt = require('jsonwebtoken');
const users = require('../services/userInfo');

module.exports = {
    'POST /auth': async (ctx, next) => {
        ctx.set({
            'Content-Type': 'application/json',
        });
        const isExist = users.find(item => username === item.username && password === item.password);
        if (isExist) {
            ctx.status = 200;
            const token = jwt.sign({
                username,
            }, 'shhhhh');

            ctx.body = {
                code: 0,
                message: 'login success',
                result: {
                    token,
                },
            };
        } else {
            ctx.status = 200;
            ctx.body = {
                code: -1,
                message: 'login fail',
            };
        }

    }
};
