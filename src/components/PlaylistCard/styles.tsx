import styled from "styled-components";
import { BLACK, GRAY, BORDER_WHITE } from "constants/colors";

export const PlaylistCardElement = styled.a`
  &.playlist-card {
    transition: transform 0.2s;
    transition-timing-function: ease-in;
    align-items: center;
    color: ${BLACK};
    display: flex;
    flex: 0 23%;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    position: relative;
    width: 100%;
    margin: 10px 1%;

    .playlist-card__content {
      border: 1px solid ${BORDER_WHITE};
      border-radius: 5px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
      text-align: center;

      &__description {
        display: inline-grid;

        &__title {
          font-weight: 600;
        }

        &__tracks {
          color: ${GRAY};
        }
      }
    }

    img {
      border-radius: 5px;
      max-height: 100%;
      max-width: 100%;
    }

    &:hover {
      transform: translateY(-5px);
    }

    @media only screen and (max-width: 1439px) {
      flex: 0 31%;
    }

    @media only screen and (max-width: 768px) {
      flex: 0 47%;
    }

    @media only screen and (max-width: 425px) {
      flex: 0 100%;
    }

    .playlist-card__overlay {
      align-items: center;
      display: flex;
      justify-content: center;
      position: absolute;
      height: 100%;
      transition: opacity 0.2s ease-in;
      width: 100%;
      opacity: 0;

      &--paint {
        background: ${GRAY};
        border-radius: 5px;
        height: 100%;
        opacity: 30%;
        position: absolute;
        width: 100%;
      }

      img {
        width: 50%;
        z-index: 10;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
`;
