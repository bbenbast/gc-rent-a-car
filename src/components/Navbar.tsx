import React, { useState } from 'react';
import { Menu, X, Phone, Car } from 'lucide-react';
import { COMPANY_INFO, ASSETS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Frota', href: '#fleet' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contactos', href: '#contact' },
  ];

  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-white p-1 rounded-full flex items-center justify-center overflow-hidden">
              { !logoError ? (
                <img
                  src={ASSETS.logo}
                  alt="GC logo"
                  onError={() => setLogoError(true)}
                  className="h-8 w-8 object-cover rounded-full"
                />
              ) : (
                <Car className="h-8 w-8 text-brand-dark" />
              ) }
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider text-brand-blue">GC-RENT-A-CAR</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Aluguer de Viaturas</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-blue transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`tel:${COMPANY_INFO.phone1.replace(/\s/g, '')}`}
                className="bg-brand-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
              >
                <Phone size={16} />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
             <a 
                href={`tel:${COMPANY_INFO.phone1.replace(/\s/g, '')}`}
                className="bg-brand-blue text-white mt-4 block text-center px-3 py-3 rounded-md font-bold"
              >
                Ligar Agora
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;