// module.exports = {
//     root: './server',
//     api: './server/api',
//     config: './server/config',
//     routes: './server/routes',
//     views: './server/views'
// }

var path = require('path');

module.exports.api = (pathStr) => {
    return path.join(__dirname, "./routes/api/") + pathStr;
}

module.exports.config = (pathStr) => {
    return path.join(__dirname, "./config/") + pathStr;
}

module.exports.routes = (pathStr) => {
    return path.join(__dirname, "./routes/") + pathStr;
}

module.exports.views = (pathStr) => {
    return path.join(__dirname, "./views/") + pathStr;
}

module.exports.service = (pathStr) => {
    return path.join(__dirname, "./service/") + pathStr;
}