import React from "react";
import usePlaylist from './usePlaylist';
import PlaylistCard from 'components/PlaylistCard';
import { PlaylistElement } from './styles';

interface Props {
}

function Playlist(props: Props) {
    const { filteredPlaylists } = usePlaylist();

    return (
        <PlaylistElement className="container">
            {filteredPlaylists.map( filteredPlaylist => {
                return (
                    <PlaylistCard 
                        name={filteredPlaylist.name}
                        external_urls={filteredPlaylist.external_urls}
                        images={filteredPlaylist.images}
                        description={filteredPlaylist.description}
                        tracks={filteredPlaylist.tracks}
                        key={filteredPlaylist.id}
                    />)
            })}
        </PlaylistElement>
    );
}

export default Playlist;