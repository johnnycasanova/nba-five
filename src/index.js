import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { players } from './players'

ReactDOM.render(

  <div>
    <Card id={players[0].id} name={players[0].full_name}/>
    <Card id={players[1].id} name={players[1].full_name}/>
    <Card id={players[2].id} name={players[2].full_name}/>
  </div>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
