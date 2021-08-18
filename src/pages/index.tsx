/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useRef, useState,
} from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';

import { Container } from '../styles/pages/index/styles';

export default function Home() {
  const [url, setUrl] = useState('');
  const [playing, setPlaying] = useState<boolean>();
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState<boolean>();

  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  // const handleStop = () => {
  //   this.setState({ url: null, playing: false });
  // };

  const handleVolumeChange = (e:any) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleToggleMuted = () => {
    setMuted(!muted);
  };

  // handleTogglePIP = () => {
  //   this.setState({ pip: !this.state.pip });
  // };

  // handleEnablePIP = () => {
  //   console.log('onEnablePIP');
  //   this.setState({ pip: true });
  // };

  // handleDisablePIP = () => {
  //   console.log('onDisablePIP');
  //   this.setState({ pip: false });
  // };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e:any) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e:any) => {
    setSeeking(false);
    // @ts-ignore
    playerRef.current?.seekTo(parseFloat(e.target.value));
  };

  // eslint-disable-next-line no-unused-vars
  const handleProgress = (state:any) => {
    // console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    if (!seeking) {
      setSeeking(seeking);
    }
  };

  const handleSetPlaybackRate = (e:any) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  // handleEnded = () => {
  //   console.log('onEnded');
  //   this.setState({ playing: this.state.loop });
  // };

  // handleDuration = (duration) => {
  //   console.log('onDuration', duration);
  //   this.setState({ duration });
  // };

  const handleClickFullscreen = () => {
    if (screenfull.isEnabled) {
      // @ts-ignore
      // eslint-disable-next-line react/no-find-dom-node
      screenfull.request(findDOMNode(playerRef.current));
    }
  };

  return (
    <Container>
      <ReactPlayer
        id="react-player"
        ref={playerRef}
        controls={false}
        playing={playing}
        playbackRate={playbackRate}
        muted={muted}
        volume={volume}
        url={url}
        onProgress={handleProgress}
        // url="https://gist.githubusercontent.com/WillTreze/11e28b08257825ce838840b3f17d55a0/raw/066d6faa2758e32c07118b067f8bf0bddde2b7c8/720p.m3u8"
      />

      <table>
        <tbody>
          <tr>
            <th>Controls</th>
            <td>
              {/* <button type="button" onClick={this.handleStop}>Stop</button> */}
              <button type="button" onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
              <button type="button" onClick={handleClickFullscreen}>Fullscreen</button>
            </td>
          </tr>
          <tr>
            <th>Speed</th>
            <td>
              <button type="button" onClick={handleSetPlaybackRate} value={1}>1x</button>
              <button type="button" onClick={handleSetPlaybackRate} value={1.5}>1.5x</button>
              <button type="button" onClick={handleSetPlaybackRate} value={2}>2x</button>
            </td>
          </tr>
          <tr>
            <th>Seek</th>
            <td>
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={played}
                onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
              />
            </td>
          </tr>
          <tr>
            <th>Volume</th>
            <td>
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={handleVolumeChange}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="muted">Muted</label>
            </th>
            <td>
              <input
                id="muted"
                type="checkbox"
                checked={muted}
                onChange={handleToggleMuted}
              />
            </td>
          </tr>
          <tr>
            <th>Progress</th>
            <td><progress max={1} value={played} /></td>
          </tr>
        </tbody>
      </table>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </Container>
  );
}
