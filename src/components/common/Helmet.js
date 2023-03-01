import Head from "next/head";

const Helmet = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{`${title} - НИЙСЛЭЛИЙН ЦАГДААГИЙН ГАЗАР`}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={
          description ??
          "Нийслэлийн засаг даргын дэрэгдэх цагдаагийн газар, нийслэлийн, цагдаа, дэрэгдэх, газарь niisleliin tsagdaa, niislel, tsagdaa"
        }
      />
      <meta
        name="keywords"
        content="Нийслэлийн засаг даргын дэрэгдэх цагдаагийн газар, нийслэлийн, цагдаа, дэрэгдэх, газарь niisleliin tsagdaa, niislel, tsagdaa"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <link rel="icon" href="/favicon.ico" />


    </Head>
  );
};
export default Helmet;
