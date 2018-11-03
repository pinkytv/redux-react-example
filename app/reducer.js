import {SELECT_MEDIA} from './actions';
import React from "react";


export const initialState = {
    medias: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/120',
        'https://via.placeholder.com/110'
    ],
    selectedMedias: []
};

function media(state = initialState, action) {

    switch (action.type) {
        case SELECT_MEDIA:
            return Object.assign({}, state, {
                selectedMedias: [...state.selectedMedias, action.media]
            });
        default:
            return state
    }
}

export default media;