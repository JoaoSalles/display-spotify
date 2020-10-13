import styled from "styled-components";

export const HomeElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 800px) {
    max-width: 800px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;
