
import React from 'react';
import { 
  Maximize2, 
  DoorClosed, 
  Grid, 
  Layout, 
  Shield, 
  Focus,
  MessageCircle
} from 'lucide-react';

interface ServicesProps {
  customImages?: string[];
}

const Services: React.FC<ServicesProps> = ({ customImages }) => {
  const services = [
    {
      title: "Box de Vidro",
      description: "Modelos temperados de canto, frontais ou articulados com kits premium. Elegância e durabilidade.",
      icon: <DoorClosed />,
      image: customImages?.[0] || "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Espelhos",
      description: "Espelhos sob medida para banheiros, salas e closets. Acabamento lapidado ou bisotado.",
      icon: <Maximize2 />,
      image: customImages?.[1] || "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Guarda-Corpo",
      description: "Segurança total para escadas e sacadas com vidros temperados e laminados normatizados.",
      icon: <Shield />,
      image: customImages?.[2] || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sacadas e Varandas",
      description: "Fechamento completo com sistema retrátil. Proteção contra vento e chuva com vista total.",
      icon: <Layout />,
      image: customImages?.[3] || "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fechamentos de Pia",
      description: "Soluções em vidro para gabinetes de cozinha e banheiro. Higiene e modernidade.",
      icon: <Grid />,
      image: customImages?.[4] || "https://images.unsplash.com/photo-1620626011761-9963d7b69763?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Vitrines Comerciais",
      description: "Frentes de loja e fachadas em vidro temperado de alta segurança para seu comércio.",
      icon: <Focus />,
      image: customImages?.[5] || "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-[0.4em] mb-4">O que fazemos</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#003366] mb-8">
            Especialistas em Soluções de Vidro
          </h3>
          <p className="text-slate-500 text-lg">
            Desde pequenos espelhos até grandes fachadas comerciais, entregamos com a qualidade que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-2 py-1 rounded-md">
                   <span className="text-[#003366] text-[8px] font-black uppercase tracking-widest">Casa dos Vidros</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl -mt-16 relative z-10 mb-8 border border-slate-50">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { 
                    className: "w-8 h-8 text-[#FF8C00]" 
                  })}
                </div>
                <h4 className="text-2xl font-black text-[#003366] mb-4">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <a 
                  href={`https://wa.me/5519981142941?text=Olá Casa dos Vidros, quero um orçamento para ${service.title}.`}
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full bg-[#003366] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#FF8C00] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento</span>
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
