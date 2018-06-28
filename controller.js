const fs = require('fs');

const Router = require('koa-router');
const router = new Router();

// add url-route in /controllers:
function addMapping(router, mapping) {
    // console.log(router, 'router');
    // console.log(mapping, 'mapping');
    for (const [url, func] of Object.entries(mapping)) {
        // console.log(url, func, 'url, func');
        if (url.startsWith('GET ')) {
            const path = url.substring(4);
            router.get(path, func);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            const path = url.substring(5);
            router.post(path, func);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            const path = url.substring(4);
            router.put(path, func);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            const path = url.substring(7);
            router.del(path, func);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

/**
 * @description
 * @param router
 * @param dir
 */
function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir)
        .filter(
            (f) => {
                return f.endsWith('.js');
            }
        )
        .forEach(
            (f) => {
                // console.log(`process controller: ${f}...`);
                let mapping = require(__dirname + '/' + dir + '/' + f);
                addMapping(router, mapping);
            }
        );
}

module.exports = function (dir) {
    const controllers_dir = dir || 'controllers';
    // const Router = require('koa-router');
    // const router = new Router();
    addControllers(router, controllers_dir);
    return router.routes();
};
