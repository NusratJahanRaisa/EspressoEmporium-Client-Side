import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Espresso Emporium</h2>
          <p className="text-sm">
            Brewing happiness, one cup at a time.  
            Freshly roasted beans and cozy vibes await you!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/shop" className="hover:text-orange-400">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Espresso Emporium. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
