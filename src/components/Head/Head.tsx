import NextHead from 'next/head';

type HeadProps = {
  title: string
}

const Head = ({ title }:HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);

export default Head;
