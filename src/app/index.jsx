import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './components/main';

// console.log('hello world');
// console.log('store', store.getState());

const element = <h1>Hello, world</h1>;

ReactDOM.render(
        <Main/> ,
        document.getElementById("app")
);


