import styled from 'styled-components';
import { BACKGROUND_WHITE, BORDER_WHITE } from 'constants/colors';

export const FilterElement = styled.div`
    background: ${BACKGROUND_WHITE};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid ${BORDER_WHITE};
    display: flex;
    justify-content: center;
    width: 100%;

    @media only screen and (min-width: 1200px) {
        max-width: 1140px;
    }
`;