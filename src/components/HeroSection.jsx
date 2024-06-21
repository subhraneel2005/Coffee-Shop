import Image from 'next/image';
import { useEffect, useState } from 'react';


const images = [
  '/image1.jpg', // coffee shop image 1
  '/image2.jpg', // coffee shop image 2
  '/image3.jpg'  // coffee shop image 3
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Coffee shop image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Coffee Shop</h1>
          <p className="text-xl md:text-2xl">Where every cup is brewed with passion</p>
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
