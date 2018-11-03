import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Pages from '../../src/routing/routes/Pages';
import { Helmet } from 'react-helmet';

export default (req, context) => {

    const content = renderToString(
        <StaticRouter location={req.path} context={context}>
            {renderRoutes(Pages)}
        </StaticRouter >
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
        <script src="bundle.js"></script>
    </body>
</html>
    `;
}