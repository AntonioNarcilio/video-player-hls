import styled from 'styled-components';

export const VideoWrapper = styled.main`
  width: 640px;
  max-height: 360px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  box-shadow: 0px 30px 20px -10px rgb(0 0 0 / 47%);

  video#player {
    min-width: 640px;
    min-height: 360px;
  }


  /* PLYR CSS */

  .plyr {
    --plyr-color-main: ${(props) => props.theme.colors.secondary};
    --plyr-menu-color: ${(props) => props.theme.colors.secondary};
    --plyr-menu-background: ${(props) => props.theme.colors.white};
    --plyr-video-control-color: ${(props) => props.theme.colors.white};
    --plyr-video-control-color-hover:  ${(props) => props.theme.colors.white};
    --plyr-video-controls-background: transparent;
    --plyr-video-control-background-hover: ${(props) => props.theme.colors.secondary};

    /* BUTTON LARGE PALY */
    .plyr__control--overlaid {
      width: 110px;
      height: 110px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: rgb(211 211 211 / 53%);

      svg {
        width: 40px;
        height: 40px;
      }
    }

  }

  .plyr__controls {
    display: flex;
    flex-direction: column;
    opacity: 0; // removed whit js => opacity: 1;

    /* PROGRESS BAR */
    .plyr__progress input[type="range"] {
      appearance: none;
      color: ${(props) => props.theme.colors.white};

      transition: opacity .4s;
      opacity: .8;

      &::-webkit-slider-thumb {
        appearance: none;
        opacity: 0;
      }
      &::-webkit-slider-runnable-track {
        appearance: none;
      }

      &:hover {
        opacity: 1;
      }
    }

    /* MENU */
    .plyr__menu {
      button {
        background: transparent;
        transition: opacity .4s;
        opacity: .8;

        &:hover, :active {
          opacity: 1;
        }
      }

      div.plyr__menu__container div {
        background: ${(props) => props.theme.colors.white};
        border-radius: 4px;

        button[data-plyr="settings"], button.plyr__control--back, button[data-plyr="speed"], [data-plyr="capture"] {
          &:hover {
            color: ${(props) => props.theme.colors.pink};
          }
        }
      }
    }

    /* Remove background color hover */
    [data-plyr='rewind'], [data-plyr='play'],
    [data-plyr="fast-forward"], [data-plyr="pip"], [data-plyr="fullscreen"] {
      background: transparent;
      opacity: .8;
      transition: opacity .4s;
      &:hover {
        opacity: 1;
      }
    }

    /* CONTROLS  rewind | forward */
    [data-plyr="rewind"] {
      svg {
        width: 15px;
      }
      margin-right: -7px;
    }

    [data-plyr="fast-forward"] {
      svg {
        width: 15px;
      }
      margin-left: -7px;
      margin-right: 7px;
    }

    /* VOLUME */
    .plyr__volume {
      width: 100%;

      > button {
        opacity: .8;
        transition: opacity .4s;
        &:hover {
          opacity: 1;
          background: transparent;
        }
      }

      input[type="range"] {
        appearance: none;
        width: 50px;
        color: ${(props) => props.theme.colors.white};
        cursor: col-resize;

        opacity: .8;
        transition: opacity .4s;

        &::-webkit-slider-thumb {
          appearance: none;
          opacity: 0;
        }
        &::-webkit-slider-runnable-track {
          appearance: none;
          height: 10px;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  div.top_row {
    width: 100%;
  }

  div.bottom_row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &:first-child {
        gap: 0.5rem;
      }
      &:last-child {
        /* align-items: center; */
        justify-content: flex-end;
      }
    }
  }



`;
