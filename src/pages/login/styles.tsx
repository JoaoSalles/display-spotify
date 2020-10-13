import styled from "styled-components";
import ifoodBanner from "assets/ifoodBanner.png";
import { BORDER_WHITE } from "constants/colors";

export const LoginElement = styled.div`
    align-items: center;
    background: url(${ifoodBanner}) no-repeat;
    background-size: cover;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: 100vh;
    width: 100%
}
`;

export const LoginTextElement = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: ${BORDER_WHITE};
    font-size: 3em;
    text-align: center;
  }
`;
