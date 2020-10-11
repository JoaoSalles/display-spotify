import React from "react";
import { PlaylistElement } from './styles';

interface Props {
}

function Playlist(props: Props) {
    return (
        <PlaylistElement className="container">
            <span>PlayList Results:</span>
        </PlaylistElement>
    );
}

export default Playlist;