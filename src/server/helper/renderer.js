import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Pages from '../../routing/routes/Pages';
import AppRootPage from '../../views/pages/AppRootPage';

export default (req) => {

const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
        <AppRootPage>{renderRoutes(Pages)}</AppRootPage>
    </StaticRouter >
);

return `<html>
    <head>
    <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
    </body>
</html>
    `;
}