// appのStateを可視化する
import logger from "redux-logger";
//Reduxで非同期処理を行うミドルウェア　
import thunk from "redux-thunk";
//redux 
import { applyMiddleware, createStore } from "redux";

import Reducers from "../rereducers/index";

// ミドルウェア
const middleware= applyMiddleware(logger, thunk);
//Store の設定
const Store = createStore(Reducers, middleware);

export default Store;