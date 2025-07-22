import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-neutral text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            ☕ Espresso Emporium
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/addCoffee" className="hover:underline">Add Coffee</Link>
            {/* <Link to="/orders" className="hover:underline">Your Orders</Link> */}
          </nav>
        </div>

        {/* Right Side: Login Button */}
        <div>
          <Link to="/login" className="btn btn-outline btn-sm">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
