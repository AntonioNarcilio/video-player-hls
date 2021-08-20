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
    --plyr-color-main: #1ac266;
    --plyr-menu-background: #fbfbfb;
    --plyr-video-controls-background: transparent;
  }

  .plyr__controls {
    display: flex;
    flex-direction: column;

    opacity: 0;
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

        [data-plyr="fast-forward"] {
          margin-right: 7px;
        }
      }

      &:last-child {
        .plyr__volume {
          width: 100%;
        }
        /* align-items: center; */
        justify-content: flex-end;
      }
    }
  }



`;
