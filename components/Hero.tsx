
import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

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
          alt="Modern House with Glass Windows" 
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-12">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]" />
              ))}
            </div>
            <span className="text-sm font-medium">5,0 no Google (Avaliações Reais)</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Transparência e Qualidade em <span className="text-[#FF8C00]">Cada Detalhe.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
            Especialistas em vidros temperados, espelhos sob medida, fechamento de sacadas e projetos exclusivos em Limeira e região. Segurança e sofisticação para sua obra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#servicos" 
              className="bg-[#FF8C00] hover:bg-[#e67e00] text-white px-8 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-orange-900/20"
            >
              <span>Conhecer Nossos Serviços</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contato" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all"
            >
              Solicitar Orçamento
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#FF8C00]" />
              </div>
              <span className="text-sm font-medium">Vidros Temperados</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#FF8C00]" />
              </div>
              <span className="text-sm font-medium">Box p/ Banheiro</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#FF8C00]" />
              </div>
              <span className="text-sm font-medium">Espelhos Lapidados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
