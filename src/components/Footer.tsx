
import { BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-book-dark text-white py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-book-accent" />
              <span className="font-playfair font-bold text-xl">BookSphere</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your digital gateway to endless reading possibilities. Discover, read, and connect with books that inspire and educate.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 BookSphere. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-book-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/library" className="text-gray-300 hover:text-white transition-colors">
                  Library
                </NavLink>
              </li>
              <li>
                <NavLink to="/virtual-show" className="text-gray-300 hover:text-white transition-colors">
                  Virtual Show
                </NavLink>
              </li>
              <li>
                <NavLink to="/auth" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-book-accent">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Made with ❤️ for book lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
