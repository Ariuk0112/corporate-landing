import { Header } from '.';
import { Helmet } from '../common/Helmet';

const RootLayout = ({ children, title, description }) => {
  return (
    <>
      {/* <Helmet title={title} description={description} /> */}
      <Header />
      {children}
      {/* todo: footer */}
      {/* <div className="w-full"><Footer /></div> */}
    </>
  );
};
export default RootLayout;
