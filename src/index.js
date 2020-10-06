import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchInput from './SearchInput';
import Buttons from './Buttons';
import HeaderTitle from './HeaderTitle';
import LocalLang from './LoncalLang';
import Content from './Content';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HeaderTitle />
    <SearchInput />
    <Buttons />
    <LocalLang />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
