
import React from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#001f3f] border-b border-white/10 shadow-xl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="https://i.postimg.cc/SxD6jPJp/Adobe-Express-file.png" 
              alt="Casa dos Vidros Logo" 
              className="h-12 md:h-16 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-white text-xl md:text-2xl font-black tracking-tight leading-none uppercase">CASA DOS VIDROS</span>
              <span className="text-[#FF8C00] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-1">Vidraçaria e Esquadrias em Alumínio Limeira</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-white/80 hover:text-[#FF8C00] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5519981142941" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/20"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-5 h-5"
                referrerPolicy="no-referrer"
              />
              <span>Orçamento WhatsApp</span>
            </a>
          </nav>

          <button 
            className="lg:hidden p-2 text-white bg-white/10 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#001f3f] border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-10 space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="block text-2xl font-bold text-white/90 hover:text-[#FF8C00]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5519981142941" 
              className="flex items-center justify-center gap-3 w-full text-center bg-[#25D366] text-white px-5 py-5 rounded-2xl font-black text-xl shadow-xl shadow-green-900/30"
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-7 h-7"
                referrerPolicy="no-referrer"
              />
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
