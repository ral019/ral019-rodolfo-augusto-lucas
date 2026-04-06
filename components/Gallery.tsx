
import React, { useState } from 'react';
import { ArrowRight, Camera, MessageCircle, X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../App';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryProps {
  customItems?: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ customItems }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const displayItems = customItems || [];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, i) => (
            <div 
              key={i} 
              className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl border border-slate-100 bg-slate-900 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Imagem de Fundo */}
              <img 
                src={item.url} 
                alt={`${item.title} instalado em Limeira - Casa dos Vidros`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradiente de fundo para leitura */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-transparent to-black/20"></div>

              {/* Zoom Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Badge Superior */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                  <span className="text-[#003366] text-[9px] font-black uppercase tracking-widest">CASA DOS VIDROS</span>
                </div>
              </div>
              
              {/* Conteúdo Inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-4">
                <h4 className="text-white text-xl font-bold drop-shadow-md">
                  {item.title}
                </h4>
                
                <div className="inline-flex items-center gap-2 bg-[#FF8C00] text-white px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all transform group-hover:translate-x-1">
                  <span>VER DETALHES</span>
                  <ArrowRight className="w-3 h-3 stroke-[4px]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Zoom Effect */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-[#FF8C00] transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-10 h-10" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
                <div className="mt-8 text-center">
                  <h4 className="text-white text-3xl font-bold mb-4">{selectedImage.title}</h4>
                  <a 
                    href={`https://wa.me/5519981142941?text=Olá, vi a foto de ${selectedImage.title} no site e gostaria de um orçamento parecido.`}
                    target="_blank"
                    className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wider transition-all shadow-xl shadow-green-900/40"
                  >
                    <span>Pedir Orçamento Igual</span>
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
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
