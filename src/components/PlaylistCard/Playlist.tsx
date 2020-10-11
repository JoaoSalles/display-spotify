import React from "react";
import { PlaylistCardElement } from './styles';

interface Props {
}

function Playlist(props: Props) {
    return (
        <PlaylistCardElement className="container">
            <span>PlayList Results:</span>
        </PlaylistCardElement>
    );
}

export default Playlist;