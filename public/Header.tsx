import React, { useState, useEffect } from 'react';

const ByRosyHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Check if we're at the top of the page
      setAtTop(currentScrollPos < 10);
      
      // Set the header visible based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        !visible ? '-translate-y-full' : ''
      } ${atTop ? 'py-4 md:py-6 bg-transparent' : 'py-3 md:py-4 bg-white/90 shadow-sm backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="/" 
          className={`text-xl md:text-2xl font-bold transition-colors ${atTop ? 'text-white' : 'text-deep-charcoal'}`}
          style={{fontFamily: 'var(--font-family-playfair)'}}
        >
          ByRosy
        </a>
        
        {/* Hamburger button for mobile */}
        <button 
          className={`md:hidden z-50 ${atTop || menuOpen ? 'text-white' : 'text-deep-charcoal'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#about" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                About Rosy
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
                  atTop ? 'text-white' : 'text-deep-charcoal'
                }`}
                style={{fontFamily: 'var(--font-family-inter)'}}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black/90 z-40 flex items-center justify-center transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <nav>
            <ul className="flex flex-col space-y-8 text-center">
              <li>
                <a 
                  href="#about" 
                  className="text-xl text-white hover:text-gold-accent transition-colors"
                  style={{fontFamily: 'var(--font-family-playfair)'}}
                  onClick={closeMenu}
                >
                  About Rosy
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-xl text-white hover:text-gold-accent transition-colors"
                  style={{fontFamily: 'var(--font-family-playfair)'}}
                  onClick={closeMenu}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-xl text-white hover:text-gold-accent transition-colors"
                  style={{fontFamily: 'var(--font-family-playfair)'}}
                  onClick={closeMenu}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-xl text-white hover:text-gold-accent transition-colors"
                  style={{fontFamily: 'var(--font-family-playfair)'}}
                  onClick={closeMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ByRosyHeader; 