import React from "react";


// Die MediaFile Komponente repräsentiert ein Image
export const MediaFile = ({media, handleClick}) => <img src={media} width={150} height={150} onClick={() => handleClick(media)}/>;


// Die AvailableMedias Komponente repräsentiert eine auflistung aller verfügbaren Medien
export const AvailableMedias = ({medias, handleClick}) => (
    <div className={'availableMedias'}>
        {medias.map((media, i) => <MediaFile key={i} media={media} handleClick={handleClick}/>)}
    </div>
);


// Die MediaLibrary Komponente hat die oberste Ebene und verwaltet den state!
export const MediaLibrary = () => (
    <div id={'library'}>
        <AvailableMedias />
    </div>
);