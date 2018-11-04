import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Pages from './routing/routes/Pages';
import Loadable from 'react-loadable';
import registerServiceWorker from './registerServiceWorker';

Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
        <BrowserRouter>
            {renderRoutes(Pages)}
        </BrowserRouter>,
        document.getElementById('root'))
});
registerServiceWorker();
