import "@babel/polyfill";
import React from 'react';
import {render} from 'react-dom'
import {Provider} from "react-redux";
import {createStore} from "redux";
import media from "./reducer";
import {MediaLibrary} from "./components/MediaLibrary"

// Den Store erstellen
const reducerInitializedStore  = createStore(media);

const App = () => (
    <MediaLibrary />
);

render(
    <Provider store={reducerInitializedStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);
