import { Header, Footer } from '.';

const RootLayout = ({ children, title, description, logo,id, address, mail }) => {
  return (
    <>
      <Header />
      {children}
      <div className="w-full">
        <Footer logo={logo} address={address} mail={mail} id= {id} />
      </div>
    </>
  );
};
export default RootLayout;
