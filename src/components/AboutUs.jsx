import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CgCoffee } from "react-icons/cg";

const aboutImages = [
   // about us image 1
  '/about2.png', // about us image 2
 // about us image 3
];

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % aboutImages.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
          <Image
            src={"/about2.png"}
            alt={`About us image`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 opacity-100`}
          />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4 max-w-4xl space-y-6">
          <div className="flex gap-4 justify-center items-center bg-black p-4 bg-opacity-80 shadow-lg rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400 md:mt-10">Our Story</h2>
          <CgCoffee className="text-yellow-500 mt-4" size={70}/>
          </div>
          <div className="p-3 rounded-xl bg-black bg-opacity-70">
          <p className="text-xl md:text-2xl mb-4">Our journey began with a passion for coffee and a love for community. We strive to bring you the best coffee experience, with every cup brewed to perfection.</p>
          <p className="text-xl md:text-2xl mb-4">Located in the heart of the city, our coffee shop is a place where friends and family come together to enjoy great coffee and delicious pastries.</p>
          <p className="text-xl md:text-2xl">We believe in sustainability and source our coffee beans from ethical farms around the world. Join us in our journey and enjoy a cup of coffee that not only tastes good but does good.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
