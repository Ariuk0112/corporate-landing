import Link from 'next/link';
import Head from 'next/head';

const Video = ({ VIDEO_ID }) => {
  return (
    <div className="overflow-hidden">
      <div className="w-full md:h-[500px] bg-[#676767] my-10">
        <iframe
          id="player"
          className=""
          type="text/html"
          width="100%"
          height="100%"
          src={`http://www.youtube.com/embed/${VIDEO_ID || 'lhl2BgFhrI0'}?autoplay=1&mute=1`}
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
