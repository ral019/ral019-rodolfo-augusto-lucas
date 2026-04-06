
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
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-[0.3em] mb-4">Fotos Reais de Nossos Serviços</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003366] leading-tight">Projetos Realizados</h3>
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
        
        <div className="mt-20 p-12 rounded-[3rem] bg-slate-900 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[#003366] opacity-10 pointer-events-none"></div>
          <h4 className="text-white text-2xl md:text-3xl font-bold mb-6 relative z-10">Tem um projeto sob medida?</h4>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
            Nós transformamos sua ideia em realidade com vidros de alta resistência e acabamento impecável. 
            Mande uma foto do seu espaço no WhatsApp e receba uma consultoria gratuita.
          </p>
          <a 
            href="https://wa.me/5519981142941" 
            className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shadow-green-900/40"
          >
            <span>Enviar meu Projeto</span>
            <MessageCircle className="w-6 h-6 fill-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
