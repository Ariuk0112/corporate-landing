const About = (about) => {
  return (
    <div>
      <div className="flex flex-col pt-10 w-full">
        <p className="text-[#B58E3E] text-xl md:text-[29px]">ABOUT & HISTORY</p>
        <p className=" text-black text-[13px] ">Welcome to The Corporate Hotels</p>
        <article className="py-5 text-black text-[14px] text-opacity-50">
          {about.about
            ? about.about
            : 'The Corporate Hotel and Convention Centre is one of the newest additions to The Corporate Hotels. It is a hotel where member of the team takes terrific pride in offering the highest levels of service, where guests are sincerely welcomed and can enjoy elegant accommodations, and the splendid lobby bar, restaurant, coffee lounge where every best of Asian and Western cuisine served. With 92 rooms and suites, The Corporate Hotel and Convention Centre is truly one of the finest hotels in perfect location. Its central location and modern design are a convenient choice for a comfortable stay. What sets this hotel apart from the others is its attention given to every detail of the modern look and design. The unique texture that collectively created and energized interior with sophisticated presence will surely help you to enjoy your stay in the city. The hotel is carefully planned to provide an accommodation for holding special events, weddings, conferences, meetings and other official gatherings. With a management team and staff dedicated to make every guest feel important, the corporate Hotel and Convention Centre is truly the ultimate place of what comfort should be like. The hotel is also a home to the one of the outstanding restaurants in Ulaanbaatar. The energetic members of our rapidly growing team have a goal to serve you with passion. The warm and comfortable atmosphere will make your dining experience rigorously exclusive. Take advantage of our Health Club with indoor pool, fitness room, sauna and Jacuzzi. Enjoy and kick back in our stylishly decorated lounge club, or gather with friends and family for a delicious meal at Chairman Restaurant. Stay in touch with what matters to you the most with high-speed internet access and refresh yourself with a coffee at our coffee Lounge conveniently located in the lobby.'}
        </article>
      </div>
    </div>
  );
};

export default About;
