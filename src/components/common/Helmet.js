import Head from 'next/head';

const Helmet = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{`The Corporate`}</title>
      <meta name="title" content={'НҮҮР ХУУДАС'} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default Helmet;
