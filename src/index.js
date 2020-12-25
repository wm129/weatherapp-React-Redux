import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import createStore from './createStore';

//historyインスタンス生成
const history = createBrowserHistory();

//Store 生成
const store = createStore(history);

ReactDOM.render(
    //StoreをAppコンポーネントに紐付け
    <Provider store={store}>
{/*
react-router-domのrouterではなく　react-router-reduxのConnectedRouterを使う
*/}
        <ConnectedRouter history={history}>

            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
