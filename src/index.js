import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/state';

let rerenderEntireTree = (state) => {
ReactDOM.render(
   <BrowserRouter>
   <App state={state}
      despatch={store.despatch.bind(store)}
   />
   </BrowserRouter>, document.getElementById('root'));
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
