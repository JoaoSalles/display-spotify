import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import queryString from 'query-string';
import { LOGGIN_SAGA } from 'store/actions/authActions';


const useAuth = () => {
    const dispatch = useDispatch();

    function getAuth() {
        const urlQueries = queryString.parse(window.location.hash);
        if(urlQueries.access_token) {
            dispatch({ type: LOGGIN_SAGA, urlQueries });
        }
    }

    useEffect(() => {
        getAuth();
    // eslint-disable-next-line
    }, []);

    return {
    }
}

export default useAuth;