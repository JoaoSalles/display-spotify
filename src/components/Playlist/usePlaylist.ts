import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from 'store/reducers';
import { Playlist } from 'store/reducers/playlistReducer';

const usePlaylist = () => {
    const [filteredPlaylists, setFilteredPlaylists] = useState<Array<Playlist>>([]);

    const searchFilter = useSelector((state: RootState) => state.search.searchFilter);
    const playlists = useSelector((state: RootState) => state.playlist.playlist);

    useEffect(() => {
        setFilteredPlaylists(playlists.filter( 
            (playlist: Playlist) => playlist.name.toUpperCase().includes(searchFilter.toUpperCase()))
        );
    }, [playlists, searchFilter]);

    return {
        filteredPlaylists
    }
}

export default usePlaylist;