import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Pages from '../../routing/routes/Pages';
import { Helmet } from 'react-helmet';

export default (req, context) => {

    const content = renderToString(
        <StaticRouter location={req.path} context={context}>
            {renderRoutes(Pages)}
        </StaticRouter >
    );

    const helmet = Helmet.renderStatic();

    return `<html>
    <head>
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