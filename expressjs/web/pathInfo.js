var path = require('path');
const _apiDir = path.join(process.cwd(), "/routes/api/");
const _configDir = path.join(process.cwd(), "/config/");
const _routesDir = path.join(process.cwd(), "/routes/");
const _viewsDir = path.join(process.cwd(), "/views/");
const _serviceDir = path.join(process.cwd(), "/service/");

const _getApiPath = (pathStr) => {return (pathStr) ? _apiDir + pathStr : _apiDir;}
const _getConfigPath = (pathStr) => {return (pathStr) ? _configDir + pathStr : _configDir;}
const _getRoutesPath = (pathStr) => {return (pathStr) ? _routesDir + pathStr : _routesDir;}
const _getViewsPath = (pathStr) => {return (pathStr) ? _viewsDir + pathStr : _viewsDir;}
const _getServicePath = (pathStr) => {return (pathStr) ? _serviceDir + pathStr : _serviceDir;}

module.exports = {
    getApiPath: _getApiPath,
    getConfigPath: _getConfigPath,
    getRoutesPath: _getRoutesPath,
    getViewsPath: _getViewsPath,
    getServicePath: _getServicePath,
}