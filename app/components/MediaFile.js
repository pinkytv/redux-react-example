import React from "react";
import {connect} from "react-redux";
import {selectMedia} from "../actions"

/*
MediaFile KOMPONENTE
 */
export const MediaFile = ({media, handleClick}) => <img src={media} width={150} height={150} onClick={() => handleClick(media)}/>;

const mapProps = (state, props) => ({
    media: props.media
});

const mapDispatch = (dispatch) => ({
    handleClick: (media) => dispatch(selectMedia(media))
});

export default connect(
    mapProps,
    mapDispatch
)(MediaFile);