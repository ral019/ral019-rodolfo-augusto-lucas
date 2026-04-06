
import React from 'react';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000d1a] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://i.postimg.cc/SxD6jPJp/Adobe-Express-file.png" 
                alt="Casa dos Vidros Logo" 
                className="h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-white text-xl font-black tracking-tight leading-none uppercase">CASA DOS VIDROS</span>
                <span className="text-[#FF8C00] text-[9px] font-bold tracking-[0.2em] uppercase mt-1">Vidraçaria e Esquadrias<br/>em Alumínio Limeira</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Desde Box de vidro temperado até fachadas comerciais complexas. Atendemos Limeira e região com o compromisso de entregar perfeição.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/casadosvidroslimeira/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#FF8C00] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-[#FF8C00]">Navegação</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Por que nós?</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galeria de Obras</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-[#FF8C00]">Contato Direto</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-white/40 shrink-0" />
                <span>R. Antônio Carlos Pompeu, 113<br/>Limeira - SP</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-white/40 shrink-0" />
                <span>(19) 98114-2941</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-white/40 shrink-0" />
                <div>
                  <p>Seg - Sex: 08:00 às 18:00</p>
                  <p>Sáb: 08:00 às 12:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-[#FF8C00]">Solicite Orçamento</h4>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Clique no botão abaixo para ser atendido agora mesmo via WhatsApp.
            </p>
            <a 
              href="https://wa.me/5519981142941"
              className="inline-flex w-full items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all text-sm uppercase tracking-wider shadow-lg shadow-green-900/40"
            >
              <Phone className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] md:text-xs">
          <p>© 2025 Casa dos Vidros Vidraçaria Limeira. CNPJ: 59.744.237/0001-20</p>
          <div className="mt-4 md:mt-0 opacity-50">
            Desenvolvido com foco em alta performance.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
