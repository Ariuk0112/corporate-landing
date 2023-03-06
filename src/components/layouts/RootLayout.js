import { Header, Footer } from '.';
import { Helmet } from '../common/Helmet';

const RootLayout = ({ children, title, description, logo }) => {
  console.log(logo);
  return (
    <>
      {/* <Helmet title={title} description={description} /> */}
      <Header />
      {children}
      {/* todo: footer */}
      <div className="w-full">
        <Footer logo={logo} />
      </div>
    </>
  );
};
export default RootLayout;
