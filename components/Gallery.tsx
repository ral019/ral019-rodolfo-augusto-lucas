
import React, { useEffect } from 'react';
import { Camera, MessageCircle } from 'lucide-react';

const Gallery: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="galeria" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-[0.3em] mb-3">Fotos Reais de Nossos Serviços</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#003366] leading-tight">Projetos Realizados</h3>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <Camera className="w-6 h-6" />
            <span>@casadosvidroslimeira</span>
          </div>
        </div>

        {/* Elfsight Instagram Widget */}
        <div className="w-full flex justify-center">
          <div className="elfsight-app-f2db9c7a-651b-4265-937c-16ca34945c91 w-full" data-elfsight-app-lazy></div>
        </div>
        
        <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[#003366] opacity-10 pointer-events-none"></div>
          <h4 className="text-white text-xl md:text-2xl font-bold mb-4 relative z-10">Tem um projeto sob medida?</h4>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10 text-sm">
            Nós transformamos sua ideia em realidade com vidros de alta resistência e acabamento impecável. 
            Mande uma foto do seu espaço no WhatsApp e receba uma consultoria gratuita.
          </p>
          <a 
            href="https://wa.me/5519981142941" 
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-green-900/40"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp" 
              className="w-6 h-6"
              referrerPolicy="no-referrer"
            />
            <span>Enviar meu Projeto</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
