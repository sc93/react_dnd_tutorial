import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from './Board';
import { observe } from './testComponents/Game';
ReactDOM.render(<App />, document.getElementById('root'));
// observe((knightPosition) =>
//     ReactDOM.render(
//         <Board knightPosition={knightPosition} />,
//         document.getElementById('root'),
//     ),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
