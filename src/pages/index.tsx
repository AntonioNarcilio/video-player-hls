/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useEffect, useState,
} from 'react';

import Hls from 'hls.js';
import Plyr from 'plyr';
import { Container, VideoWrapper } from '../styles/pages/index/styles';
import 'plyr-react/dist/plyr.css';

export default function Home() {
  // const bffVideo = '/video/720p.m3u8';
  const [url, setUrl] = useState('');

  // const inputRef = useRef({ value: '' });

  // const loadVideo = (event: FormEvent) => {
  //   event.preventDefault();

  //   if (inputRef.current.value !== '') {
  //     // const hls = new Hls();

  //     setUrl(inputRef.current.value);
  //   }
  // };

  useEffect(() => {
    const win = window as any;
    const videoElement = document.querySelector<HTMLVideoElement>('#player');
    let player;

    if (videoElement) {
      player = new Plyr(videoElement,
        {
          // captions: { active: true, update: true },
          autoplay: false,
          controls: [
            'play-large', // The large play button in the center
            'restart', // Restart playback
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
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

  const clearInput = () => {
    setUrl('');
  };

  return (
    <Container>
      <VideoWrapper>
        <video
          id="player"
          autoPlay={false}
          crossOrigin="true"
        >
        </video>
      </VideoWrapper>

      <footer>
        {/* <form onSubmit={loadVideo}> */}
        <div>
          <label htmlFor="video-url">Paste the url (M3U8)</label>
          <input
            id="video-url"
            type="text"
            // placeholder="Paste the url (M3U8)"
            //   // @ts-ignore
            // ref={inputRef}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <hr />

        <button type="button" onClick={clearInput}>clear</button>
        {/* <button type="submit">Go</button>
        </form> */}
      </footer>
    </Container>
  );
}
