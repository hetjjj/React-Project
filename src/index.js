import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import './index.css';
import AppRootPage from './views/pages/AppRootPage';
import registerServiceWorker from './registerServiceWorker';
import Pages from './routing/routes/Pages';


ReactDOM.hydrate(
    <BrowserRouter>
        <AppRootPage>
            {renderRoutes(Pages)}
        </AppRootPage>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
