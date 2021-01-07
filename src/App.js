import React,{ Component } from 'react';

import Main from "./components/main";
import Store from "./store/store";
import {Provider} from "react-redux";

const App = () => {

    return(
<Provider store={Store}>
<div className="container">
<h1>Weather App</h1>
<Main />
</div>
</Provider>
    );
}

export default App;