import Image from 'next/image';
import bgImage from '../../public/bg3.jpg';
const reviews = [
  {
    name: 'John Doe',
    review: 'The best coffee shop in town! Great atmosphere and delicious coffee.',
    image: '/review1.jpg'
  },
  {
    name: 'Jane Smith',
    review: 'I love their cappuccinos! The staff is always friendly and welcoming.',
    image: '/review2.jpg'
  },
  {
    name: 'Emily Johnson',
    review: 'A cozy place to relax and enjoy a good book with a cup of coffee.',
    image: '/review3.jpg'
  },
  {
    name: 'Michael Brown',
    review: 'Their pastries are to die for! Highly recommend this place.',
    image: '/review4.jpg'
  }
];

const stories = [
  {
    name: 'Anna Green',
    story: 'Anna has been a regular at our coffee shop for over 5 years. She loves our lattes and the friendly environment. Here\'s her story...',
    image: '/story2.jpg'
  },
  {
    name: 'Mark Wilson',
    story: 'Mark visits us every morning before heading to work. He enjoys our espresso and the quick service. Here\'s his story...',
    image: '/story1.jpg'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="min-h-screen w-full p-3">
      <div className="relative">
        <Image src={bgImage} alt="Background" layout="fill" objectFit="cover" className="opacity-30" />
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="md:text-6xl text-5xl mt-5 font-bold text-center mb-12 text-yellow-400">Testimonials</h2>
          
          {/* Customer Reviews */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-yellow-600 text-center">Customer Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden text-center">
                  <Image src={review.image} alt={review.name} width={500} height={300} className="object-cover w-full h-48" />
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-2 text-yellow-800">{review.name}</h4>
                    <p className="text-gray-700">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Stories */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-yellow-400 text-center">Featured Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stories.map((story, index) => (
                <div key={index} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                  <Image src={story.image} alt={story.name} width={500} height={300} className="object-cover w-full md:w-1/2 h-48 md:h-auto" />
                  <div className="p-6 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-2 text-yellow-600">{story.name}</h4>
                    <p className="text-gray-700">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
