import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom'
import Main from './containers/main';
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
       <Route path="/" component={Main}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
