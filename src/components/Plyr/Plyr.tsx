/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';

import 'plyr-react/dist/plyr.css';
import { VideoWrapper } from './styles';

type PlyrPlayerTypes = {
  url: string
}

const PlyrPlayer = ({ url }:PlyrPlayerTypes) => {
  useEffect(() => {
    (function plyrPluginCapture(document) {
      function saveScreenShot(data: string, filename:string) {
        const saveLink = document.createElement('a');
        saveLink.href = data;
        saveLink.download = filename;
        const event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        saveLink.dispatchEvent(event);
      }

      function capture(player:any, label:string) {
        const width = player.media.videoWidth;
        const height = player.media.videoHeight;
        const canvas = Object.assign(document.createElement('canvas'), { width, height });
        const canvasCtx = canvas.getContext('2d');

        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        // @ts-ignore
        img.onload = (function onload() {
          canvasCtx?.drawImage(player.media, 0, 0, width, height);
          img.src = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

          const screenShotImg = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
          saveScreenShot(screenShotImg, `${label}.png`);
        }());
      }

      document.addEventListener('ready', (event) => {
        // @ts-ignore
        const curPlayer = event.detail.plyr;
        const { config } = curPlayer;
        if (Array.isArray(config.controls) && config.controls.includes('capture')) {
          const captureLabel = config.i18n.capture || 'Capture';

          const menu = document.querySelector('.plyr__controls__item.plyr__menu');
          const btn = `
            <button button class="plyr__control plyr__control--forward" type="button" data-plyr="capture">
              Screenshot
              <span class="plyr__sr-only">${captureLabel}</span>
            </button>
          `;
          menu?.insertAdjacentHTML('beforebegin', btn);

          const btnElement = document.querySelector('button[data-plyr="capture"]');
          btnElement?.addEventListener('click', () => {
            capture(curPlayer, captureLabel);
          });
        }
      });
    }(document));

    const checkReadyState = setInterval(() => {
      // console.info(document.readyState);
      if (document.readyState === 'complete') {
        clearInterval(checkReadyState);

        const plyrControls = document.querySelector<HTMLElement>('.plyr__controls');
        const plyrProgressContainer = document.querySelector('.plyr__progress__container');

        const plyrRewind = document.querySelector('[data-plyr="rewind"]');
        const plyrPlay = document.querySelector('[data-plyr="play"]');
        const plyrFastForward = document.querySelector('[data-plyr="fast-forward"]');

        const plyrTimeCurrent = document.querySelector('.plyr__time--current');
        const plyrTimeDuration = document.querySelector('.plyr__time--duration');

        const plyrVolume = document.querySelector('.plyr__volume');
        const plyrPip = document.querySelector('[data-plyr="pip"]');
        const plyrMenu = document.querySelector('.plyr__menu');
        const plyrFullscreen = document.querySelector('[data-plyr="fullscreen"]');

        const plyrCapture = document.querySelector('[data-plyr="capture"]');
        const plyrMenuContainer = document.querySelector('.plyr__menu .plyr__menu__container [role="menu"]');
        if (plyrMenuContainer && plyrCapture) {
          plyrMenuContainer.appendChild(plyrCapture);
        }

        const divTopRow = document.createElement('div');
        const divBottomRow = document.createElement('div');
        const divContentOne = document.createElement('div');
        const divContentTwo = document.createElement('div');
        // const divContentThree = document.createElement('div');

        divTopRow.setAttribute('class', 'top_row');
        divBottomRow.setAttribute('class', 'bottom_row');
        divContentOne.setAttribute('class', 'content');
        divContentTwo.setAttribute('class', 'content');
        // divContentThree.setAttribute('class', 'content');

        if (plyrProgressContainer) {
          divTopRow.appendChild(plyrProgressContainer);
        }
        if (plyrRewind && plyrPlay && plyrFastForward && plyrTimeCurrent && plyrTimeDuration) {
          divContentOne.appendChild(plyrRewind);
          divContentOne.appendChild(plyrPlay);
          divContentOne.appendChild(plyrFastForward);
          divContentOne.appendChild(plyrTimeCurrent);
          divContentOne.appendChild(plyrTimeDuration);

          divBottomRow.appendChild(divContentOne);
        }
        if (plyrVolume && plyrPip && plyrMenu && plyrFullscreen) {
          // divContentTwo.appendChild(plyrCapture);
          divContentTwo.appendChild(plyrVolume);
          divContentTwo.appendChild(plyrPip);
          divContentTwo.appendChild(plyrMenu);
          divContentTwo.appendChild(plyrFullscreen);

          divBottomRow.appendChild(divContentTwo);
        }

        if (plyrControls) {
          plyrControls.appendChild(divTopRow);
          plyrControls.appendChild(divBottomRow);
          plyrControls.style.opacity = '1';
        }
      }
    }, 100);
  }, []);

  useEffect(() => {
    const win = window as any;
    const videoElement = document.querySelector<HTMLVideoElement>('#player');
    let player;

    if (videoElement) {
      player = new Plyr(videoElement,
        {
          // captions: { active: true, update: true },
          autoplay: false,
          hideControls: false,
          speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
          controls: [
            'progress', // The progress bar and scrubber for playback and buffering
            'play-large', // The large play button in the center
            // 'restart', // Restart playback
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'capture',

            'mute', // Toggle mute
            'volume', // Volume control
            // 'captions', // Toggle captions
            'pip', // Picture-in-picture (currently Safari only)
            'settings', // Settings menu
            'fullscreen', // Toggle fullscreen
          ],
        });

      if (Hls.isSupported()) {
        const hls = new Hls();
        if (url !== '') {
          hls.loadSource(url);
        } else {
          hls.loadSource('/video/720p.m3u8');
        }
        hls.attachMedia(videoElement);
        // hls.once(Hls.Events.BUFFER_CREATED, (event, data) => {
        //   console.log(data.tracks.audio);
        // });
      } else {
        videoElement.src = url;
      }

      Plyr.setup(videoElement);
      win.player = player;
    }
  }, [url]);

  return (
    <VideoWrapper>
      <video
        id="player"
        // autoPlay
        crossOrigin="true"
        poster="/assets/poster.svg"
      />
    </VideoWrapper>
  );
};

export default PlyrPlayer;
