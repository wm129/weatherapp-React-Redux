import React,{ Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Rank from './components/Rank';

const App = () => {

    return(
<>
<div className="App">
<ul>
    <li><Link to="/all">全ての都市はこちら</Link></li>
    <li><Link to="/city/XXXX">地域ごと</Link></li>
    <li><Link to="/city/Xxxx">都市</Link></li>
</ul>
</div>
<Route path="/all" component={Rank} />
{/*
2つ目、3つ目のルートは下のようにかく

<Route 
path="/city/:id"
render={
({ match } => <city name ={match.params.id} />
)
}
  />
*/}
</>
    )
}

export default App;