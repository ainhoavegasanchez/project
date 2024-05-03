"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var common_1 = require("@angular/common");
var ssr_1 = require("@angular/ssr");
var express_1 = require("express");
var url_1 = require("url");
var path_1 = require("path");
var main_server_1 = require("./src/main.server");
var cors_1 = require("cors");
// The Express app is exported so that it can be used by serverless Functions.
function app() {
    var server = (0, express_1.default)();
    var serverDistFolder = (0, path_1.dirname)((0, url_1.fileURLToPath)(import.meta.url));
    var browserDistFolder = (0, path_1.resolve)(serverDistFolder, '../browser');
    var indexHtml = (0, path_1.join)(serverDistFolder, 'index.server.html');
    var commonEngine = new ssr_1.CommonEngine();
    server.set('view engine', 'html');
    server.set('views', browserDistFolder);
    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get('*.*', express_1.default.static(browserDistFolder, {
        maxAge: '1y'
    }));
    var corsOptions = {
        origin: '*',
        credentials: true,
        optionsSuccessStatus: 200,
    };
    server.use((0, cors_1.default)(corsOptions));
    // All regular routes use the Angular engine
    server.get('*', function (req, res, next) {
        var protocol = req.protocol, originalUrl = req.originalUrl, baseUrl = req.baseUrl, headers = req.headers;
        commonEngine
            .render({
            bootstrap: main_server_1.default,
            documentFilePath: indexHtml,
            url: "".concat(protocol, "://").concat(headers.host).concat(originalUrl),
            publicPath: browserDistFolder,
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: baseUrl }],
        })
            .then(function (html) { return res.send(html); })
            .catch(function (err) { return next(err); });
    });
    return server;
}
exports.app = app;
function run() {
    var port = process.env['PORT'] || 4200;
    // Start up the Node server
    var server = app();
    server.listen(port, function () {
        console.log("Node Express server listening on http://localhost:".concat(port));
    });
}
run();
