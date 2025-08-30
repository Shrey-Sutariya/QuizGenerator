import { useEffect, useState } from 'react';

export default function Carousel({ img }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [img.length]);

  return (
    <div className="flex justify-center p-4 w-full">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        
        <img
          src={img[currentIndex]}
          alt={`carousel-item-${currentIndex}`}
          className="w-full h-full object-cover"
        />

        
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white transition p-2 rounded-full shadow-md"
        >
          ‹
        </button>


        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white transition p-2 rounded-full shadow-md"
        >
          ›
        </button>

        
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {img.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
