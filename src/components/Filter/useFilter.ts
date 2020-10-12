import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterFormatField } from 'types/filterFormatTypes';
import { PLAYLIST_SAGA } from 'store/actions/playlistActions';
import { RootState } from 'store/reducers';
import getURLParams from 'utils/getURLParams';
import * as status from 'constants/utils/status';

const useFilter = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);
    const [loading, setLoading] = useState<boolean>(true);
    const [filterFields, setFilterFields] = useState<Array<filterFormatField>>([]);
    const [filterData, setFilterData] = useState<{[key: string]: string}>({});

    const handleFieldChange = ({ field, value }: { field: string, value: string}) => {
        const newValue: {[key: string]: string} = {};
        newValue[field] = value;
        setFilterData({ ...filterData, ...newValue });
      }

    async function getFilterFormat() {
        const response = await fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
        if (response.status === 200) {
            const reponseJson = await response.json();
            setLoading(false);
            setFilterFields(reponseJson.filters);
        }
    }

    async function getPlaylists() {
        if( auth.status === status.LOADED) {
            dispatch({ 
                type: PLAYLIST_SAGA,
                payload: {
                    token: auth.access_token,
                    url: `https://api.spotify.com/v1/browse/featured-playlists${getURLParams(filterData)}`
                }
            });
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getPlaylistsMemo();
        }, 30000);
        return () => clearInterval(interval);
    // eslint-disable-next-line
    }, [auth, filterData]);

    const getPlaylistsMemo = useCallback(
        () => {
            getPlaylists()
        },
        // eslint-disable-next-line
        [auth, filterData]
    );

    useEffect(() => {
        getPlaylistsMemo();
    }, [filterData, getPlaylistsMemo]);

    useEffect(() => {
        getFilterFormat();
    // eslint-disable-next-line
    }, []);

    return {
        filterFields,
        loading,
        handleFieldChange,
        filterData
    }
}

export default useFilter;