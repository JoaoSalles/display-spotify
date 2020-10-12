import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducers';
import queryString from 'query-string';
import { LOGGIN_SAGA } from 'store/actions/authActions';
import * as status from 'constants/utils/status';


const useAuth = () => {
    const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
    const authselector = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    function getAuth() {
        const urlQueries = queryString.parse(window.location.hash);
        if(urlQueries.access_token) {
            dispatch({ type: LOGGIN_SAGA, urlQueries });
        } else {
            console.log("errado")
            setShouldRedirect(true);
        }
    }

    useEffect(() => {
        if(authselector.access_token === '' && authselector.status === status.LOADED) {
            console.log(authselector, authselector.status)
            setShouldRedirect(true);
        };
    // eslint-disable-next-line
    }, [authselector.access_token, authselector.status]);

    useEffect(() => {
        getAuth();
    // eslint-disable-next-line
    }, []);

    return {
        shouldRedirect
    }
}

export default useAuth;