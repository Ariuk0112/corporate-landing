import { Header, Footer } from '.';

const RootLayout = ({ children, title, description, logo, address, mail }) => {
  return (
    <>
      <Header />
      {children}
      {/* todo: footer */}
      <div className="w-full">
        <Footer logo={logo} address={address} mail={mail} />
      </div>
    </>
  );
};
export default RootLayout;
