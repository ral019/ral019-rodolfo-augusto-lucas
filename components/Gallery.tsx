
import React from 'react';
import { ArrowRight, Camera, MessageCircle } from 'lucide-react';
import { GalleryItem } from '../App';

interface GalleryProps {
  customItems?: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ customItems }) => {
  // Se não houver itens no banco, exibe nada ou padrão (mas o App.tsx já garante o padrão)
  const displayItems = customItems || [];

  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-[0.3em] mb-4">Fotos Reais de Nossos Serviços</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003366] leading-tight">Projetos Executados pela Casa dos Vidros</h3>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <Camera className="w-6 h-6" />
            <span>Limeira e Região</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl border border-slate-100 bg-slate-900">
              {/* Imagem de Fundo */}
              <img 
                src={item.url} 
                alt={`${item.title} instalado em Limeira - Casa dos Vidros`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradiente de fundo para leitura */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-transparent to-black/20"></div>

              {/* Badge Superior */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                  <span className="text-[#003366] text-[9px] font-black uppercase tracking-widest">CASA DOS VIDROS</span>
                </div>
              </div>

              {/* Marca d'água Central */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
                <span className="text-white text-3xl font-black italic tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                  Casa dos vidros
                </span>
              </div>
              
              {/* Conteúdo Inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-4">
                <h4 className="text-white text-xl font-bold drop-shadow-md">
                  {item.title}
                </h4>
                
                <a 
                  href={`https://wa.me/5519981142941?text=Olá, vi a foto de ${item.title} no site e gostaria de um orçamento parecido.`}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#FF8C00] text-white px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider hover:bg-white hover:text-[#FF8C00] transition-all transform group-hover:translate-x-1"
                >
                  <span>PEDIR IGUAL</span>
                  <ArrowRight className="w-3 h-3 stroke-[4px]" />
                </a>
              </div>
            </div>
          ))}
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
