import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Pages from './routing/routes/Pages';


ReactDOM.hydrate(
    <BrowserRouter>
        {renderRoutes(Pages)}
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
