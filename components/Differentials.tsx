
import React from 'react';
/* Added CheckCircle2 to imports */
import { Truck, ShieldCheck, Zap, Award, CheckCircle2 } from 'lucide-react';

const Differentials: React.FC = () => {
  const items = [
    {
      title: "Entrega no Prazo",
      desc: "Respeitamos o cronograma da sua opera com pontualidade rigorosa.",
      icon: <Truck className="w-10 h-10 text-white" />,
      color: "bg-[#003366]"
    },
    {
      title: "Materiais Premium",
      desc: "Apenas vidros e ferragens de alta performance e durabilidade.",
      icon: <Award className="w-10 h-10 text-white" />,
      color: "bg-[#FF8C00]"
    },
    {
      title: "Atendimento Ágil",
      desc: "Orçamentos rápidos e consultoria técnica especializada.",
      icon: <Zap className="w-10 h-10 text-white" />,
      color: "bg-slate-800"
    },
    {
      title: "Garantia Total",
      desc: "Segurança e tranquilidade com garantia de instalação e produto.",
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      color: "bg-emerald-600"
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#003366]/10 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-widest mb-4">Por que nos escolher?</h2>
            <h3 className="text-4xl font-extrabold mb-8 leading-tight">
              Compromisso com a <br /> excelência em cada serviço
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              Na Casa dos Vidros Limeira, unimos técnica profissional com atendimento humanizado. Cada projeto é tratado como único, buscando superar expectativas em acabamento e segurança.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-[#FF8C00] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-300">Equipe treinada seguindo normas técnicas de segurança (ABNT).</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-[#FF8C00] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-300">Mais de 4 avaliações 5 estrelas no Google My Business.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
