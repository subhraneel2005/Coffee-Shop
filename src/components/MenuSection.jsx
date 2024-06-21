import Image from 'next/image';

const menuItems = [
  {
    title: 'Espresso',
    description: 'Rich and smooth espresso shots, crafted to perfection.',
    image: '/menu1.jpg'
  },
  {
    title: 'Cappuccino',
    description: 'A perfect balance of espresso, steamed milk, and foam.',
    image: '/menu2.jpg'
  },
  {
    title: 'Latte',
    description: 'Creamy latte with rich espresso and steamed milk.',
    image: '/menu3.jpg'
  },
  {
    title: 'Mocha',
    description: 'Decadent mocha with espresso, chocolate, and steamed milk.',
    image: '/menu4.jpg'
  }
];

const pastryItems = [
  {
    title: 'Chocolate Cake',
    description: 'Dark and buttery cake, perfect with your morning coffee.',
    image: '/pastry1.jpg'
  },
  {
    title: 'Muffin',
    description: 'Soft and delicious muffins with various flavors.',
    image: '/pastry2.jpg'
  },
  {
    title: 'Donut',
    description: 'Sweet and fluffy donuts topped with sugar or glaze.',
    image: '/pastry3.jpg'
  },
  {
    title: 'Cake Slice',
    description: 'A slice of heaven with our rich and moist cakes.',
    image: '/pastry4.jpg'
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="relative py-16 bg-gray-50">
      <div className="absolute inset-0">
        <Image 
          src="/bg2.png" 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="md:text-6xl text-yellow-500 text-4xl font-bold mb-4">Our Menu</h2>
        <p className="text-xl mb-8">Explore our selection of delicious coffee drinks and pastries.</p>
        
        {/* Coffee Menu */}
        <div className="mt-8">
          <div className="flex justify-center items-center">
          <h3 className="text-3xl mt-9 font-semibold mb-4 bg-black px-10 py-4 rounded-xl text-yellow-600 w-fit">Coffee</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 duration-300">
                <Image src={item.image} alt={item.title} width={500} height={300} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pastry Menu */}
        <div className="mt-6 md:mt-20">
        <div className="flex justify-center items-center">
          <h3 className="text-3xl mt-9 font-semibold mb-4 bg-black px-10 py-4 rounded-xl text-yellow-600 w-fit">Pastries</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastryItems.map((item, index) => (
              <div key={index} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 duration-300">
                <Image src={item.image} alt={item.title} width={500} height={300} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
