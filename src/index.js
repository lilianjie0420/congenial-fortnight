import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.jsx';
import { Provider } from 'react-redux'
import store from './store/index.js';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <React.StrictMode className='main'>
            <BrowserRouter>
                <Provider store={store} >
                    <Layout />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));