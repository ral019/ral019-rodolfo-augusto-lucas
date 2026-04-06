
import React from 'react';
import { 
  Hammer, 
  Wrench, 
  Home,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

interface ServicesProps {
  customImages?: string[];
}

const Services: React.FC<ServicesProps> = ({ customImages }) => {
  const serviceCategories = [
    {
      title: "Instalação e Montagem",
      icon: <Hammer />,
      image: customImages?.[0] || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      altText: "Instalação de esquadrias de alumínio e box de vidro temperado em Limeira",
      items: [
        { name: "Box para Banheiro", desc: "Instalação de box em vidro temperado (padrão, de canto, elegance ou articulado)." },
        { name: "Esquadrias de Alumínio", desc: "Fabricação e instalação de janelas e portas de alumínio sob medida." },
        { name: "Fachadas de Vidro", desc: "Montagem de vitrines de lojas e fachadas residenciais ou comerciais." },
        { name: "Portas e Janelas de Vidro", desc: "Instalação de sistemas de correr, abrir ou pivotantes em vidro temperado." },
        { name: "Espelhos sob Medida", desc: "Instalação de espelhos para banheiros, salas, academias e closets (com acabamento bisotê ou lapidado)." },
        { name: "Guarda-Corpo e Corrimão", desc: "Instalação de proteções em vidro e alumínio para escadas e sacadas." },
        { name: "Fechamento de Sacadas", desc: "Envidraçamento de sacadas e varandas para apartamentos e residências." }
      ]
    },
    {
      title: "Manutenção e Reparos",
      icon: <Wrench />,
      image: customImages?.[1] || "https://i.postimg.cc/QM0zqSCB/Whats-App-Image-2026-04-06-at-17-16-28.jpg",
      altText: "Manutenção de portas de vidro e esquadrias em Limeira",
      items: [
        { name: "Manutenção de Portas de Vidro", desc: "Ajuste de molas de piso, troca de roldanas e alinhamento de portas que estão raspando." },
        { name: "Troca de Vidros Quebrados", desc: "Substituição rápida de vidros em janelas, portas ou coberturas." },
        { name: "Vedação e Estanqueidade", desc: "Reparo em infiltrações de janelas e vedações de silicone ressecadas." },
        { name: "Substituição de Acessórios", desc: "Troca de fechaduras, trincos, puxadores e dobradiças de alumínio ou inox." }
      ]
    },
    {
      title: "Soluções Especializadas",
      icon: <Home />,
      image: customImages?.[2] || "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
      altText: "Coberturas de vidro e soluções especializadas em Limeira",
      items: [
        { name: "Coberturas de Vidro", desc: "Instalação de telhados de vidro laminado para áreas gourmet ou jardins de inverno." },
        { name: "Divisórias de Ambiente", desc: "Divisórias em vidro para escritórios ou lavanderias." },
        { name: "Pequenos Reparos Residenciais", desc: "Atendimento especializado para manutenção geral em vidros e esquadrias." }
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-[0.4em] mb-4">O que fazemos</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#003366] mb-8">
            Nossos Serviços
          </h3>
          <p className="text-slate-500 text-lg">
            Soluções completas em vidros e esquadrias de alumínio para sua residência ou comércio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#003366]/60 group-hover:bg-[#003366]/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border border-white/30 text-white">
                    {React.cloneElement(category.icon as React.ReactElement<{ className?: string }>, { 
                      className: "w-8 h-8" 
                    })}
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-black text-[#003366] mb-6 text-center">{category.title}</h4>
                
                <ul className="space-y-5 mb-8 flex-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF8C00] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#003366] text-base mb-1">{item.name}</strong>
                        <span className="text-slate-500 text-sm leading-relaxed block">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/5519981142941?text=Olá Casa dos Vidros, quero saber mais sobre ${category.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#003366] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#FF8C00] transition-colors mt-auto"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Solicitar Orçamento</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
