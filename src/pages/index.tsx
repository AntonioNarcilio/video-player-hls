/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useState,
} from 'react';
import dynamic from 'next/dynamic';

import Head from '@/components/Head';

import { Container } from '../styles/pages/index/styles';
import 'plyr-react/dist/plyr.css';

const PlyrPlayer = dynamic(() => import('@/components/Plyr'), { loading: () => null });

export default function Home() {
  const [url, setUrl] = useState('');

  const clearInput = () => {
    setUrl('');
  };

  return (
    <>
      <Head title="HLS Player" />

      <Container>

        <PlyrPlayer url={url} />

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
    </>
  );
}
