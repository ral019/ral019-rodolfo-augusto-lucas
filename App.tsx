
import React, { useState } from 'react';
import { 
  MessageCircle
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export interface GalleryItem {
  url: string;
  title: string;
}

export interface CustomImages {
  hero: string;
  services: string[];
  gallery: GalleryItem[];
}

// Configuração inicial com base nas fotos enviadas
const DEFAULT_IMAGES: CustomImages = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
  services: [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", // Instalação e Montagem
    "https://i.postimg.cc/QM0zqSCB/Whats-App-Image-2026-04-06-at-17-16-28.jpg", // Manutenção e Reparos
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800", // Soluções Especializadas
  ],
  gallery: [
    { url: "https://i.postimg.cc/QM0zqSCB/Whats-App-Image-2026-04-06-at-17-16-28.jpg", title: "Manutenção de Esquadrias" },
    { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", title: "Box de Vidro Temperado" },
    { url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800", title: "Envidraçamento de Sacada" },
    { url: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=800", title: "Espelho Lapidado" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000", title: "Fachada de Vidro" },
    { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800", title: "Guarda-Corpo Sacada" },
    { url: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=800", title: "Fechamento de Pia" },
    { url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80&w=800", title: "Vitrine Comercial" }
  ]
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const images = DEFAULT_IMAGES;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Inter']">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <main>
        <Hero customImage={images.hero} />
        <Gallery />
        <Services customImages={images.services} />
        <Differentials />
        <Contact />
      </main>

      <Footer />

      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center group">
        <div className="mb-3 bg-white text-[#003366] text-[10px] font-black px-4 py-2 rounded-full shadow-2xl uppercase tracking-[0.2em] border-2 border-green-500 animate-bounce transition-all group-hover:bg-green-500 group-hover:text-white pointer-events-none">
          Chame agora no whatsapp
        </div>
        <a 
          href="https://wa.me/5519981142941" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-5 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center border-4 border-white"
        >
          <MessageCircle className="w-9 h-9 fill-current" />
        </a>
      </div>
    </div>
  );
};

export default App;
