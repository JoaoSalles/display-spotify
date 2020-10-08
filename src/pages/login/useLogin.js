
const useLogin = () => {
    const redirectToLogin = () => {
        const scopes = 'user-read-email';
        window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&scope=${encodeURIComponent(scopes)}&response_type=token&redirect_uri=${encodeURIComponent(process.env.REACT_APP_REDIRECT_URL)}`;;
    };

    return {
        redirectToLogin
    }
}

export default useLogin;

