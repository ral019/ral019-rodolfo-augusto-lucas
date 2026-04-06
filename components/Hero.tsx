
import React from 'react';
import { ArrowRight, Star, CheckCircle2, MessageCircle } from 'lucide-react';

interface HeroProps {
  customImage?: string;
}

const Hero: React.FC<HeroProps> = ({ customImage }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={customImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"} 
          alt="Vidraçaria e Fábrica de Esquadrias de Alumínio em Limeira - Casa dos Vidros" 
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-12">
        <div className="max-w-3xl text-white">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">
            Transforme Seu Ambiente com <span className="text-[#FF8C00]">Vidros e Esquadrias</span> de Alto Padrão em Limeira
          </h1>

          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]" />
              ))}
            </div>
            <span className="text-sm md:text-base font-medium">⭐ 5.0 no Google | Clientes satisfeitos</span>
          </div>
          
          <h2 className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
            Projetos sob medida com acabamento impecável, segurança e garantia. Atendimento rápido em Limeira e região.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="https://wa.me/5519981142941" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-green-900/30"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
            <a 
              href="#servicos" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center space-x-2"
            >
              <span>Ver Nossos Serviços</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-slate-300 italic mb-12 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
            Orçamento rápido e sem compromisso pelo WhatsApp
          </p>

          <div className="mt-8 border-t border-white/10 pt-8">
            <p className="text-sm font-bold text-[#FF8C00] uppercase tracking-wider mb-6">Nossos Principais Serviços</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Fechamento de Sacadas Sob Medida",
                "Box de Vidro Temperado para Banheiro",
                "Esquadrias de Alumínio (Portas e Janelas)",
                "Espelhos Lapidados e Sob Medida",
                "Manutenção e Troca de Vidros"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8C00]" />
                  </div>
                  <span className="text-sm font-medium text-slate-100">{service}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
