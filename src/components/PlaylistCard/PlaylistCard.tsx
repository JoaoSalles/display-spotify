import React from "react";
import { PlaylistCardElement } from './styles';
import defaultImage from 'assets/default_playlist_image.jpg';
import playIcon from 'assets/play-button.svg';

import { Playlist } from 'store/reducers/playlistReducer';


interface Props extends Playlist {
};

function PlaylistCard(props: Props) {
    const { name, images, external_urls, description, tracks } = props;
    return (
        <PlaylistCardElement className="playlist-card" href={external_urls.spotify}>
            <div className="playlist-card__content">
                <img src={images.length > 0 ? images[0].url : defaultImage} alt={description}/>
                <div className="playlist-card__content__description">
                    <span className="playlist-card__content__description__title">{name}</span>
                    <span className="playlist-card__content__description__tracks">{tracks.total} musicas</span>
                </div>
            </div>
            <div className="playlist-card__overlay">
                <div className="playlist-card__overlay--paint"></div>
                <img src={playIcon} alt="Play Icon" />
            </div>
        </PlaylistCardElement>
    );
}

export default PlaylistCard;