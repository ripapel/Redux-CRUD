import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import './index.css'


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>

    , document.getElementById('root'))