
import React from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#001f3f] border-b border-white/10 shadow-xl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center gap-4 group">
            <div className="flex items-end gap-1 mb-1">
              <div className="w-2.5 h-12 bg-blue-500/90 rounded-sm skew-x-[-12deg] shadow-[4px_0_10px_rgba(0,0,0,0.3)]"></div>
              <div className="w-2.5 h-10 bg-blue-400/80 rounded-sm skew-x-[-12deg] opacity-80"></div>
              <div className="w-2.5 h-8 bg-blue-300/70 rounded-sm skew-x-[-12deg] opacity-60"></div>
            </div>
            <div className="relative">
              <div className="flex flex-col">
                <span className="text-white text-base md:text-lg font-medium leading-none">Casa dos</span>
                <span className="text-white text-3xl md:text-4xl font-black leading-none tracking-tight">Vidros</span>
                <span className="text-[#FF8C00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mt-1">Vidraçaria</span>
              </div>
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
              className="bg-[#FF8C00] text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 hover:bg-[#e67e00] transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/40"
            >
              <MessageCircle className="w-4 h-4" />
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
              className="block w-full text-center bg-green-500 text-white px-5 py-5 rounded-2xl font-black text-xl shadow-xl shadow-green-900/30"
              onClick={() => setIsMenuOpen(false)}
            >
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
