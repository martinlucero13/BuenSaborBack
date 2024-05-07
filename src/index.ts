import "reflect-metadata";
import ip from 'ip';
import express from 'express';

import { apiOptions } from "./config";
import { initDatabaseConnections } from "./database";
import { useExpressServer } from "routing-controllers";
import { controllers } from "./controllers";
import { ResponseInterceptor } from "./interceptors/responseInterceptor";
import * as bodyParser from 'body-parser';

initDatabaseConnections().then(() => {
    const app = express();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    useExpressServer(app, {
        controllers: [...controllers],
        interceptors: [ResponseInterceptor],
        defaultErrorHandler: true,
        cors: apiOptions.cors,
        routePrefix: apiOptions.baseUrl === '/' ? undefined : apiOptions.baseUrl,
    }).listen(apiOptions.port, function () {
        const ipAddress = ip.address();
        const port = apiOptions.port;
        console.log(`Example app listening on port ${port}!`);
        console.log(`Network access via: ${ipAddress}:${port}!`);
    });
})


