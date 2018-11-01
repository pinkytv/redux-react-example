import "@babel/polyfill";

import React from 'react';
import {render} from 'react-dom'
import MediaApp from "../medias/react/Components/MediaApp";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import reducer from '../medias/react/Reducers/index';

const reducerInitializedStore  = createStore(reducer);

render(
    <Provider store={reducerInitializedStore}>
        <MediaApp />
    </Provider>,
    document.getElementById('mediaUpload')
);
