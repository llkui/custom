(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.envs = factory();
    }
}(this, function (b) {
    var allEnvs = {
        product: {
            env:'product',
            api_url: 'http://mebapi.mingyizd.com'
        },
        release: {
            env:'release',
            api_url: 'http://wap.dev.mingyizd.com'
        },
        dev: {
            env:'dev',
            api_url: 'http://121.40.127.64:8228'
        },
        localhost: {
            env:'localhost',
            api_url: 'http://192.168.10.107/meb'
        }
    };
    var envs = allEnvs.localhost;//默认连接dev开发环境
    switch (window.location.host) {
        case 'm.mingyizhudao.com':
        {
            envs = allEnvs.product;
            break;
        }
        case 'localhost':
        {
            envs = allEnvs.localhost;
            break;
        }
    }
    return envs;
}));