import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import TwitchApp from './reducers/TwitchApp'
import Streams from './components/containers/Streams';

// top level of React component hierarchy
class App extends React.Component {
    render (){
        return(
            <div className='app'>
                <Streams store={store}/>
            </div>
        )
    }
}

//initialize Store
let store = createStore(TwitchApp,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);