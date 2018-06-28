module.exports = {
    'GET /': async (ctx, next) => {
        ctx.body = 'Hello World !';
    },
    'GET /home': async (ctx, next) => {
        ctx.body = 'Home';
    }
};
