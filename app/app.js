import "@babel/polyfill";
import React from 'react';
import {render} from 'react-dom'
import {Provider} from "react-redux";
import {createStore} from "redux";
import media from "./reducer";
import {MediaLibrary, AvailableMedias, MediaFile} from "./components"

// Den Store erstellen
const reducerInitializedStore  = createStore(media);


const App = () => (
    <MediaLibrary> // A Media Library
        <AvailableMedias> // List of available media files
            <MediaFile/> // One media file
        </AvailableMedias>
    </MediaLibrary>
);


render(
    <Provider store={reducerInitializedStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);
