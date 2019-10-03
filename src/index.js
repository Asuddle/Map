import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from  'redux'
import { Provider } from 'react-redux'
import Reducer from './Reducer/MainReducer'
const Store =createStore(Reducer)

ReactDOM.render(
<Provider store={Store}>
<App/>
</Provider>
, document.getElementById('root'));