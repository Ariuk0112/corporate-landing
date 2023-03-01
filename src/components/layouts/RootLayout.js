import { Header, Footer } from '.';
import { Helmet } from '../common/Helmet';

const Main = ({ children, title, description }) => {
  return (
    <>
      <Helmet title={title} description={description} />
      <Header />
      {children}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};
export default Main;
