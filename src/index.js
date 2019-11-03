import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function IconButton({children}) {
    return (
        <button className="icon-button">
            <i className="fas fa-exclamation-circle"></i>
            {children}
        </button>
    )
}

function App(){
    return(
        <div>
            <IconButton> Something has gone wrong</IconButton>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
