
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle,
  Loader2
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContentManager from './components/ContentManager';
import LoginModal from './components/LoginModal';

export interface GalleryItem {
  url: string;
  title: string;
}

export interface CustomImages {
  hero: string;
  services: string[];
  gallery: GalleryItem[];
}

const DB_NAME = 'CasaDosVidros_Final_DB';
const STORE_NAME = 'siteData';
const DATA_KEY = 'v1_content';

// Configuração inicial com base nas fotos enviadas
const DEFAULT_IMAGES: CustomImages = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
  services: [
    "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800", // Box
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800", // Espelhos
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", // Guarda-Corpo
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=800", // Sacadas
    "https://images.unsplash.com/photo-1620626011761-9963d7b69763?auto=format&fit=crop&q=80&w=800", // Pias
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"  // Vitrines
  ],
  gallery: [
    { url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", title: "Guarda-Corpo Sacada" },
    { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800", title: "Box de Vidro Prime" },
    { url: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800", title: "Guarda-Corpo Escada" },
    { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800", title: "Espelho Lapidado" },
    { url: "https://images.unsplash.com/photo-1620626011761-9963d7b69763?auto=format&fit=crop&q=80&w=800", title: "Fechamento de Pia (Black)" },
    { url: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=800", title: "Envidraçamento de Sacada" },
    { url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800", title: "Armários sob Pia" },
    { url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", title: "Vitrines Comerciais" },
    { url: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800", title: "Portas de Vidro de Correr" },
    { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800", title: "Guarda-Corpo de Vidro Verde" }
  ]
};

// Gerenciador de Banco de Dados IndexedDB
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<CustomImages>(DEFAULT_IMAGES);

  // Carregamento inicial do Banco de Dados
  useEffect(() => {
    const initApp = async () => {
      try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.get(DATA_KEY);
        
        request.onsuccess = () => {
          if (request.result) {
            console.log("Dados carregados do banco local.");
            setImages(request.result);
          } else {
            console.log("Nenhum dado salvo, usando padrões.");
          }
          setIsLoading(false);
        };
        request.onerror = () => {
          console.error("Erro ao ler banco");
          setIsLoading(false);
        };
      } catch (e) {
        console.error("Erro crítico no IndexedDB", e);
        setIsLoading(false);
      }
    };
    initApp();
  }, []);

  const updateImages = async (newImages: CustomImages): Promise<boolean> => {
    try {
      const db = await openDB();
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      
      return new Promise((resolve) => {
        const request = store.put(newImages, DATA_KEY);
        request.onsuccess = () => {
          // Atualiza o estado global APÓS confirmar gravação no disco
          setImages({ ...newImages });
          console.log("Dados salvos definitivamente no banco.");
          resolve(true);
        };
        request.onerror = () => {
          console.error("Falha ao gravar no banco");
          resolve(false);
        };
      });
    } catch (e) {
      console.error("Erro ao salvar dados", e);
      return false;
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    setIsManagerOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#001f3f] flex flex-col items-center justify-center text-white">
        <Loader2 className="w-16 h-16 animate-spin text-[#FF8C00] mb-6" />
        <h1 className="text-2xl font-black uppercase tracking-[0.3em] animate-pulse">Sincronizando Banco de Dados...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Inter']">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <main>
        <Hero customImage={images.hero} />
        <Services customImages={images.services} />
        <Differentials />
        <Gallery customItems={images.gallery} />
        <Contact />
      </main>

      <Footer onOpenLogin={() => setIsLoginOpen(true)} />

      {isLoginOpen && (
        <LoginModal 
          onClose={() => setIsLoginOpen(false)} 
          onSuccess={handleLoginSuccess} 
        />
      )}

      {isLoggedIn && isManagerOpen && (
        <ContentManager 
          images={images} 
          onUpdate={updateImages} 
          onClose={() => setIsManagerOpen(false)} 
        />
      )}

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
