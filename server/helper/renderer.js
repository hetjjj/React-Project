import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Pages from '../../src/routing/routes/Pages';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';

export default (req, context) => {
    let modules = [];
    const content = renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(Pages)}
            </StaticRouter >
        </Loadable.Capture>
    );

    const helmet = Helmet.renderStatic();

    return `<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <title>React App</title>
    ${helmet.meta.toString()}
    <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="main.js"></script>
    </body>
</html>
    `;
}