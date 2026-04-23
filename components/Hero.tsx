
import React from 'react';
import { ArrowRight, Star, CheckCircle2, MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../services/analytics';

interface HeroProps {
  customImage?: string;
}

const Hero: React.FC<HeroProps> = ({ customImage }) => {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={customImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"} 
          alt="Vidraçaria e Fábrica de Esquadrias de Alumínio em Limeira - Casa dos Vidros" 
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-[#003366]/75 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 flex flex-col items-start text-left">
        <div className="max-w-3xl text-white">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.1] tracking-tight">
            Transforme Seu Ambiente com <span className="text-[#FF8C00]">Vidros e Esquadrias</span> de Alto Padrão em Limeira
          </h1>

          <div className="flex items-center justify-start space-x-2 mb-6 animate-fade-in">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#FF8C00] text-[#FF8C00]" />
              ))}
            </div>
            <span className="text-xs md:text-sm font-medium">⭐ 5.0 no Google | Clientes satisfeitos</span>
          </div>
          
          <h2 className="text-base md:text-lg text-slate-200 mb-8 max-w-2xl leading-relaxed font-light">
            Projetos sob medida com acabamento impecável, segurança e garantia. Atendimento rápido em Limeira e região.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center mb-6">
            <a 
              href="https://wa.me/5519981142941" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_section')}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold text-center transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-green-900/30 text-sm md:text-base"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-6 h-6"
                referrerPolicy="no-referrer"
              />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
            <a 
              href="#servicos" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-bold text-center transition-all flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <span>Ver Nossos Serviços</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-xs md:text-sm text-slate-300 italic flex items-center justify-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
            Orçamento rápido e sem compromisso pelo WhatsApp
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
