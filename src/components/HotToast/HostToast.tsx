/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';

const HotToast = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Toaster
      containerStyle={{
        position: 'absolute',
      }}
      toastOptions={{
        className: '',
        style: {
          padding: '16px',
          background: colors.secondary,
          color: colors.text,
        },
      }}
      gutter={10}
    />

  );
};

export default HotToast;
