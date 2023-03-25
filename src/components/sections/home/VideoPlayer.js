import { Container } from './../../layouts/Container';
const VideoPlayer = ({ VIDEO_ID }) => {
  return (
    <Container>
      <div className="w-full">
        <div className="overflow-hidden ">
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
      </div>
    </Container>
  );
};

export default VideoPlayer;
