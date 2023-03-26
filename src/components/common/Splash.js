/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';

const Splash = () => {
  return (
    <main className="overflow-hidden h-screen w-screen bg black flex items-center justify-center bg-black">
      <motion.div
        key={'my_unique_key'}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <div className="w-42 h-auto">
          <img src="/logo.png" alt="logo" className="w-full h-full" />
        </div>
      </motion.div>
      ;
    </main>
  );
};

export default Splash;
