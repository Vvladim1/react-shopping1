import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

import createStore from './store';

const store = createStore();


// setTimeout(function(){
//   store.dispatch({
//     type: 'SET_BOOKS',
//     payload: [{
//       id: 1,
//       title: 'God is love'
//     }]
//   });
// }, 1000);

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);




