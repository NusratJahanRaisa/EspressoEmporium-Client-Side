import React from 'react';

const Home = () => {
    return (
        <div className="relative min-h-screen">

            
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* <Navbar></Navbar> */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center text-white px-4">
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
    );
};

export default Home;