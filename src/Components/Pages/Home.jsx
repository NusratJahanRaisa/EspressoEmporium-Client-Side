import { useState } from 'react';
import AllCoffeeCard from '../Modules/AllCoffeeCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const coffeeData = useLoaderData();
  const [coffees,setCoffees] = useState(coffeeData)

  return (
    <div className="relative min-h-screen">

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center text-white px-4">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/cups/6.jpeg')] bg-cover bg-center bg-no-repeat"></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="max-w-xl mb-6">
          It’s coffee time – Sip & Savor. Relaxation in every sip! Get the most
          delicious, fresh coffee you’ll ever taste! Enjoy a break at Espresso
          Emporium and treat your taste buds.
        </p>
        <button className="btn btn-warning">Learn More</button>
      </div>

    </div>




      {/* Coffee Cards */}
        <div className="relative z-10 bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 text-center ">
            Our Popular Products
          </h3>
          <AllCoffeeCard coffees={coffees} setCoffees={setCoffees} />
        </div> 
      </div> 



    </div>
  );
};

export default Home;
