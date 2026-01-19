import React, { useState, useEffect, useRef } from "react";

const games = [
  { id: 1, title: "BasketBall", description: "Fast-paced team sport.", image: "assets/sports/basketball/basketball_1.jpg" },
  { id: 2, title: "Cricket", description: "A game of skill and strategy.", image: "assets/sports/cricket/cricket_1.jpg" },
  { id: 3, title: "Football", description: "The beautiful game.", image: "assets/sports/football/football_1.jpg" },
  { id: 4, title: "VolleyBall", description: "High-energy net sport.", image: "assets/sports/volleyball/volleyball_1.jpg" },
  { id: 5, title: "HandBall", description: "Fast indoor action.", image: "assets/sports/handball/handball_1.jpg" },
  { id: 6, title: "ShotPut", description: "Strength & technique.", image: "assets/sports/shortput/shortput_1.jpg" },
  { id: 7, title: "BasketBall", description: "Fast-paced team sport.", image: "assets/sports/basketball/basketball_1.jpg" },
  { id: 8, title: "Cricket", description: "A game of skill and strategy.", image: "assets/sports/cricket/cricket_1.jpg" },
  { id: 9, title: "Football", description: "The beautiful game.", image: "assets/sports/football/football_1.jpg" },
  { id: 10, title: "VolleyBall", description: "High-energy net sport.", image: "assets/sports/volleyball/volleyball_1.jpg" },
  { id: 11, title: "HandBall", description: "Fast indoor action.", image: "assets/sports/handball/handball_1.jpg" },
  { id: 12, title: "ShotPut", description: "Strength & technique.", image: "assets/sports/shortput/shortput_1.jpg" },
];

function ImageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = games.length;
  const isClicked = useRef(false);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isClicked.current) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + totalItems) % totalItems
    );
  };

  const handleCardClick = (index) => {
    if (index !== activeIndex) {
      clearInterval(intervalRef.current);
      isClicked.current = true;

      setActiveIndex(index);

      timeoutRef.current = setTimeout(() => {
        handleNext();
        isClicked.current = false;
        intervalRef.current = setInterval(() => {
          handleNext();
        }, 3000);
      }, 10000);
    }
  };
  return (
    <section className="py-14 sm:py-20 flex justify-center">
      <main className="w-full max-w-[1600px] px-4 sm:px-10">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="font-audiowide text-3xl sm:text-4xl lg:text-5xl text-white">
            Image{" "}
            <span className="italic text-[#8CCCFF] glow-text">Gallery</span>
          </h1>
          <div className="relative mt-3 flex justify-center">
            <span className="w-32 h-1 bg-gray-100 rounded-xl"></span>
            <span className="absolute w-8 h-1 bg-amber-500 rounded-xl"></span>
          </div>
        </div>

        <div className="p-5">
          <div className="hidden md:flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 340}px)` }} >
            {games.map((game, index) => (
              <div key={game.id} onClick={() => handleCardClick(index)} className={`relative flex-shrink-0 ml-5 cursor-pointer border-2 border-[#8CCCFF] rounded-xl overflow-hidden transition-all duration-500 ease-in-out group ${index === activeIndex ? "w-[550px]" : "w-[320px]"} h-[400px]`} style={{ backgroundImage: `url(${game.image})`, backgroundSize: "cover", backgroundPosition: "center", }} >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all ease-in-out"></div>
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-in-out ${index === activeIndex ? "translate-y-0" : "translate-y-[calc(100%-80px)]"}`} >
                  <h3 className="text-xl font-bold mb-2 uppercase font-crossFly italic">
                    {game.title}
                  </h3>

                  <p className={`text-gray-300 transition-opacity duration-500 font-brave81 lowercase tracking-wider ${index === activeIndex ? "opacity-100" : "opacity-0"}`} >
                    {game.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex md:hidden transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 120}px)` }} >
            {games.map((game, index) => (
              <div key={game.id} onClick={() => handleCardClick(index)} className={`relative flex-shrink-0 ml-5 cursor-pointer border-2 border-[#8CCCFF] rounded-xl overflow-hidden transition-all duration-500 ease-in-out group ${index === activeIndex ? "w-[200px]" : "w-[100px]"} h-[200px]`} style={{ backgroundImage: `url(${game.image})`, backgroundSize: "cover", backgroundPosition: "center", }} >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all ease-in-out"></div>
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-in-out ${index === activeIndex ? "translate-y-0" : "translate-y-[calc(100%-80px)]"}`} >
                  <h3 className="text-l font-bold mb-2 uppercase font-crossFly italic">
                    {game.title}
                  </h3>

                  <p className={`text-gray-300 text-sm transition-opacity duration-500 font-brave81 lowercase tracking-wider ${index === activeIndex ? "opacity-100" : "opacity-0"}`} >
                    {game.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </main>
    </section >
  );
}

export default ImageSection;
