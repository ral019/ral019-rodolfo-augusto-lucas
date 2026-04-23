
import React from 'react';
import { 
  Hammer, 
  Wrench, 
  Home,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { trackWhatsAppClick } from '../services/analytics';

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
    <section id="servicos" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-[0.4em] mb-3">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-black text-[#003366] mb-6">
            Nossos Serviços
          </h3>
          <p className="text-slate-500 text-base">
            Soluções completas em vidros e esquadrias de alumínio para sua residência ou comércio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#003366]/60 group-hover:bg-[#003366]/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-xl flex items-center justify-center shadow-xl border border-white/30 text-white">
                    {React.cloneElement(category.icon as React.ReactElement<{ className?: string }>, { 
                      className: "w-7 h-7" 
                    })}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-black text-[#003366] mb-4 text-center">{category.title}</h4>
                
                <ul className="space-y-4 mb-6 flex-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#003366] text-xs mb-0.5">{item.name}</strong>
                        <span className="text-slate-500 text-[10px] leading-relaxed block">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/5519981142941?text=Olá Casa dos Vidros, quero saber mais sobre ${category.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`services_category_${category.title}`)}
                  className="flex items-center justify-center gap-3 w-full bg-[#003366] text-white py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#25D366] transition-colors mt-auto"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="w-4 h-4"
                    referrerPolicy="no-referrer"
                  />
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
