/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useContext,
  useState,
} from 'react';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { ThemeContext } from 'styled-components';

import Head from '@/components/Head';

import { Container } from '../styles/pages/index/styles';
import 'plyr-react/dist/plyr.css';

const HotToast = dynamic(() => (import('@/components/HotToast')));
const PlyrPlayer = dynamic(() => import('@/components/Plyr'),
  {
    loading: () => (
      <div style={{
        width: '100%',
        height: '360px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <ReactLoading width={30} type="bars" color="#fff" />
      </div>
    ),
  });

export default function Home() {
  const [url, setUrl] = useState('');
  const { colors } = useContext(ThemeContext);

  const clearInput = () => {
    toast('The input was cleaned', {
      id: 'clear-input',
      icon: '🧹',
      position: 'top-center',
      style: {
        borderRadius: '6px',
        padding: '16px',
        fontWeight: 500,
        fontSize: '14px',
        color: `${colors.white}`,
        boxShadow: '0px 7px 8px 2px rgb(0 0 0 / 41%)',
      },
    });
    setUrl('');
  };

  return (
    <>
      <Head title="HLS Player" />

      <Container>

        <PlyrPlayer url={url} />

        <footer>
          <div>
            <label htmlFor="video-url">Paste the url (M3U8)</label>
            <input
              id="video-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <hr />

          <button type="button" onClick={clearInput}>clear</button>
        </footer>
      </Container>

      <HotToast />
    </>
  );
}
