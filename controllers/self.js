const jwt = require('jsonwebtoken');

module.exports = {
    'POST /self': async (ctx, next) => {
        const token = ctx.get('x-access-token');
        const {name} = ctx.request.body;
        console.log(token, 'access-token');
        const decoded = jwt.verify(token, 'shhhhh');
        console.log(decoded.username, 'decoded.username'); // bar
        ctx.body = {
            code: 0,
            message: 'Hi !',
            result: {
                happy: 'Hello ' + decoded.username,
            }
        }
    }
};
