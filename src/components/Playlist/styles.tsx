import styled from 'styled-components';
import { BACKGROUND_WHITE, BORDER_WHITE } from 'constants/colors';

export const PlaylistElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;


export const FilterSearchPainel = styled.div`
    border: 1px solid ${BORDER_WHITE};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    margin: 20px 0;
    justify-content: center;
    width: 100%;

    & > div {
        flex: 0 100%;
    }

    @media only screen and (min-width: 800px) {
        max-width: 800px;
    }
    

    @media only screen and (min-width: 1200px) {
        max-width: 1140px;
    }
`;

export const FilterPainel = styled.div`
    background: ${BACKGROUND_WHITE};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid ${BORDER_WHITE};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 0;
    width: 100%;

    & > div {
        margin: 20px 0;
    }

    @media only screen and (max-width: 800px) {
        & > div {
            margin: 10px 0;
        }
    }

    @media only screen and (min-width: 800px) {
        max-width: 800px;

        & > div {
            flex: 0 45%;
        }
    }
    

    @media only screen and (min-width: 1200px) {
        max-width: 1140px;

        & > div {
            flex: 0 45%;
        }
    }
`;