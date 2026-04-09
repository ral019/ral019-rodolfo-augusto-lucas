
import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/place/Casa+dos+vidros+Vidra%C3%A7aria+Limeira/@-22.5685766,-47.4537811,17z/data=!3m1!4b1!4m6!3m5!1s0x94c88107450ce4a7:0xeb4a67caa8c6d05a!8m2!3d-22.5685767!4d-47.4489155!16s%2Fg%2F11jt5bzpg1";

  return (
    <section id="contato" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="animate-fade-in">
            <h2 className="text-sm font-bold text-[#FF8C00] uppercase tracking-widest mb-2">Onde Estamos</h2>
            <h3 className="text-3xl font-extrabold text-[#003366] mb-4 leading-tight">
              Peça seu orçamento <br /> agora mesmo
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Atendimento ágil via WhatsApp e ligações. Realizamos visitas técnicas para medições e reuniões diretamente na sua obra ou residência em Limeira e região.
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group p-4 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="bg-slate-50 p-3 rounded-xl text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-base mb-0.5 flex items-center gap-2">
                    Endereço Completo
                    <ExternalLink className="w-3 h-3 text-slate-300" />
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    R. Antônio Carlos Pompeu, 113<br />
                    Nossa Senhora das Dores, Limeira - SP
                  </p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white shadow-sm">
                <div className="bg-slate-50 p-3 rounded-xl text-[#FF8C00] shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-base mb-0.5">Fale Direto</h4>
                  <p className="text-slate-600 font-bold text-lg">(19) 98114-2941</p>
                  <p className="text-slate-400 text-xs">WhatsApp e Ligações</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white shadow-sm">
                <div className="bg-slate-50 p-3 rounded-xl text-[#FF8C00] shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-base mb-0.5">Nossos Horários</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
                    <div>
                      <p className="text-slate-400 uppercase text-[9px] font-bold">Segunda a Sexta</p>
                      <p className="font-extrabold text-[#003366]">08:00 às 18:00</p>
                    </div>
                    <div>
                      <p className="text-slate-400 uppercase text-[9px] font-bold">Sábado</p>
                      <p className="font-extrabold text-[#003366]">08:00 às 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5519981142941"
              target="_blank"
              className="w-full inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-green-200 text-lg uppercase tracking-wider transform hover:scale-[1.01] active:scale-95"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-6 h-6"
                referrerPolicy="no-referrer"
              />
              <span>Solicitar Orçamento Grátis</span>
            </a>
          </div>

          <div className="bg-white p-3 rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden min-h-[400px] h-full">
            {/* Map iframe centered on the specific location provided */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.824246132766!2d-47.451490423706!3d-22.56857667949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c88107450ce4a7%3A0xeb4a67caa8c6d05a!2sCasa%20dos%20vidros%20Vidra%C3%A7aria%20Limeira!5e0!3m2!1spt-BR!2sbr!4v1714850000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full min-h-[400px] border-0 rounded-[1.5rem]"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
