import '../styles/globals.css';
// Import Swiper styles
import 'swiper/css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, asPath } = router;
  const navigateLocale = () => {
    router.push(asPath, asPath, { locale: locale === 'en' ? 'mn' : 'en' });
  };
  return (
    <>
      <Component {...pageProps} />
      <div className="fixed bottom-5 right-5 z-[9999]">
        <button className="uppercase w-10 h-10 bg-[#B0985A] text-white opacity-90 font-Montserrat rounded-full shadow-lg font-semibold" onClick={() => navigateLocale()}>
          {locale === 'en' ? 'MN' : 'EN'}
        </button>
      </div>
    </>
  );
}

export default MyApp;
