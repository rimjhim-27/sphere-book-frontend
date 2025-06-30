
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "@/App";
import { BookOpen, User as UserIcon, LogOut, Menu, X } from "lucide-react";

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar = ({ user, onLogout }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/library", label: "Library" },
    { to: "/virtual-show", label: "Virtual Show" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 text-book-primary hover:text-book-secondary transition-colors">
            <BookOpen className="h-8 w-8" />
            <span className="font-playfair font-bold text-xl">BookSphere</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-book-primary ${
                    isActive ? "text-book-primary" : "text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <NavLink to="/dashboard">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <UserIcon className="h-4 w-4" />
                    <span>{user.name}</span>
                  </Button>
                </NavLink>
                <Button variant="ghost" size="sm" onClick={onLogout} className="flex items-center space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <NavLink to="/auth">
                <Button className="book-gradient text-white hover:opacity-90 transition-opacity">
                  Login / Sign Up
                </Button>
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-book-primary px-2 py-1 ${
                      isActive ? "text-book-primary" : "text-foreground"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="border-t border-border pt-4">
                {user ? (
                  <div className="flex flex-col space-y-2">
                    <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <UserIcon className="h-4 w-4 mr-2" />
                        {user.name}
                      </Button>
                    </NavLink>
                    <Button variant="ghost" size="sm" onClick={() => { onLogout(); setIsMenuOpen(false); }} className="w-full justify-start">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <NavLink to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full book-gradient text-white hover:opacity-90 transition-opacity">
                      Login / Sign Up
                    </Button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
