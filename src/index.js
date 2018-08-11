import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import {store} from './MeinStore';
// import {AppContainer} from './SignIn';
import App from './App'
import {Provider} from 'react-redux';



ReactDOM.render(
    <Provider store={store}>
        {/* <AppContainer /> */}
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
