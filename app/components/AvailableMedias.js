import React from "react";
import {connect} from "react-redux";
import MediaFile from "./MediaFile";

/*
AvailableMedias KOMPONENTE
 */
const AvailableMedias = ({medias}) => (
    <div className={'availableMedias'}>
        {medias.map((media, i) => <MediaFile key={i} media={media} />)}
    </div>
);

const mapProps = (state) => ({
    medias: state.medias
});

export default connect(
    mapProps
)(AvailableMedias);