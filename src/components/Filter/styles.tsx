import styled from 'styled-components';
import { BACKGROUND_WHITE, BORDER_WHITE } from 'constants/colors';

export const FilterElement = styled.div`
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
`;

export const FilterPainel = styled.div`
    background: ${BACKGROUND_WHITE};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid ${BORDER_WHITE};
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    width: 100%;

    & > div {
        margin: 20px 20px;
    }

    @media only screen and (max-width: 800px) {
        & > div {
            margin: 10px 0;
        }
    }

    @media only screen and (min-width: 800px) {
        & > div {
            flex: 0 45%;
        }
    }
    

    @media only screen and (min-width: 1200px) {
        & > div {
            flex: 0 45%;
        }
    }
`;