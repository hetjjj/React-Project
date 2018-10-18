import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Introduction from './components/introduction/Introduction';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Home} />
            <Route path="/introduction" component={Introduction}></Route>
        </App>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
