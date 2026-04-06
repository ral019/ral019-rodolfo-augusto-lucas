
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Upload, 
  RotateCcw, 
  Image as ImageIcon, 
  Layout, 
  Grid, 
  FileText,
  Save,
  Trash2,
  PlusCircle,
  CheckCircle,
  Loader2,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { CustomImages, GalleryItem } from '../App';

interface ContentManagerProps {
  images: CustomImages;
  onUpdate: (images: CustomImages) => Promise<boolean>;
  onClose: () => void;
}

const ContentManager: React.FC<ContentManagerProps> = ({ images, onUpdate, onClose }) => {
  const [activeTab, setActiveTab] = useState<'hero' | 'services' | 'gallery'>('hero');
  const [localImages, setLocalImages] = useState<CustomImages>(() => JSON.parse(JSON.stringify(images)));
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLocalImages(JSON.parse(JSON.stringify(images)));
  }, [images]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, section: 'hero' | 'services' | 'gallery', index?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Aumentei o limite para 3MB por foto, já que o IndexedDB suporta mais
    if (file.size > 3 * 1024 * 1024) {
      alert("Foto muito pesada. Use imagens de até 3MB para melhor performance.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      const newImages = { ...localImages };

      if (section === 'hero') {
        newImages.hero = base64;
      } else if (section === 'services' && index !== undefined) {
        newImages.services[index] = base64;
      } else if (section === 'gallery' && index !== undefined) {
        newImages.gallery[index] = { ...newImages.gallery[index], url: base64 };
      }
      
      setLocalImages(newImages);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleTitleChange = (index: number, newTitle: string) => {
    const newImages = { ...localImages };
    newImages.gallery[index] = { ...newImages.gallery[index], title: newTitle };
    setLocalImages(newImages);
  };

  const addGalleryItem = () => {
    const newItem: GalleryItem = {
      url: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=800",
      title: "Novo Projeto Casa dos Vidros"
    };
    setLocalImages({
      ...localImages,
      gallery: [newItem, ...localImages.gallery]
    });
  };

  const removeGalleryItem = (index: number) => {
    if (confirm("Deseja remover esta foto?")) {
      const newGallery = localImages.gallery.filter((_, i) => i !== index);
      setLocalImages({ ...localImages, gallery: newGallery });
    }
  };

  const saveAll = async () => {
    setIsSaving(true);
    setError(null);
    
    // Pequeno delay para garantir que o usuário veja que o processo está ocorrendo
    await new Promise(r => setTimeout(r, 800));
    
    const success = await onUpdate(localImages);
    
    setIsSaving(false);
    if (success) {
      setShowSuccess(true);
    } else {
      setError("Não foi possível gravar no banco de dados do navegador. Tente limpar o cache.");
    }
  };

  const resetToDefaults = () => {
    if (confirm("Isso apagará todas as suas fotos e voltará ao padrão do site. Confirmar?")) {
      const request = indexedDB.deleteDatabase('CasaDosVidrosDB');
      request.onsuccess = () => window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white h-[90vh] rounded-[3rem] shadow-2xl flex overflow-hidden relative border border-white/20">
        
        {/* Banner de Sucesso */}
        {showSuccess && (
          <div className="absolute inset-0 z-[120] bg-emerald-600/98 backdrop-blur-md flex flex-col items-center justify-center text-white p-10 text-center animate-in fade-in zoom-in duration-500">
            <div className="bg-white text-emerald-600 p-8 rounded-full mb-8 shadow-2xl animate-bounce">
              <CheckCircle className="w-24 h-24" />
            </div>
            <h2 className="text-6xl font-black mb-6 tracking-tighter">SALVAMENTO DEFINITIVO!</h2>
            <p className="text-2xl opacity-90 mb-12 max-w-xl font-medium">As fotos foram gravadas no banco de dados do seu navegador e não sumirão mais ao atualizar.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => setShowSuccess(false)}
                className="bg-white/20 hover:bg-white/30 px-10 py-5 rounded-[2rem] font-bold transition-all border border-white/30"
              >
                Continuar Editando
              </button>
              <button 
                onClick={onClose}
                className="bg-white text-emerald-600 px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center gap-4"
              >
                <Eye className="w-6 h-6" /> Ver Resultado Final
              </button>
            </div>
          </div>
        )}

        {/* Lateral Nav */}
        <div className="w-72 bg-slate-50 border-r border-slate-100 flex flex-col p-8">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#003366] flex items-center gap-3">
              <Layout className="w-6 h-6 text-[#FF8C00]" />
              Painel Admin
            </h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">Armazenamento Local</p>
          </div>

          <nav className="flex-1 space-y-3">
            <button 
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${activeTab === 'hero' ? 'bg-[#003366] text-white shadow-xl shadow-blue-900/20' : 'text-slate-500 hover:bg-white'}`}
            >
              <ImageIcon className="w-5 h-5" /> Foto de Capa
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${activeTab === 'services' ? 'bg-[#003366] text-white shadow-xl shadow-blue-900/20' : 'text-slate-500 hover:bg-white'}`}
            >
              <Grid className="w-5 h-5" /> Serviços
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${activeTab === 'gallery' ? 'bg-[#003366] text-white shadow-xl shadow-blue-900/20' : 'text-slate-500 hover:bg-white'}`}
            >
              <FileText className="w-5 h-5" /> Galeria Real
            </button>
          </nav>

          <div className="pt-8 border-t border-slate-100">
            <button 
              onClick={resetToDefaults}
              className="w-full flex items-center gap-3 px-5 py-3 text-red-400 text-[10px] font-black uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Apagar Tudo
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-white">
            <div>
              <h3 className="text-3xl font-black text-[#003366]">
                {activeTab === 'hero' && "Editar Capa Principal"}
                {activeTab === 'services' && "Fotos dos Serviços"}
                {activeTab === 'gallery' && "Gerenciar Fotos Reais"}
              </h3>
              <p className="text-sm text-slate-500 mt-1">Alterações salvas no banco de dados local.</p>
            </div>
            <div className="flex items-center gap-4">
              {activeTab === 'gallery' && (
                <button 
                  onClick={addGalleryItem}
                  className="bg-[#003366] text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800"
                >
                  <PlusCircle className="w-4 h-4" /> Nova Foto
                </button>
              )}
              <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-2xl text-slate-400 border border-slate-100">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {error && (
            <div className="mx-10 mt-6 bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold">
              <AlertTriangle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-10 bg-slate-50/50">
            {activeTab === 'hero' && (
              <div className="max-w-3xl mx-auto">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                  <div className="relative aspect-[16/7] rounded-3xl overflow-hidden mb-8 group border-4 border-white shadow-2xl">
                    <img src={localImages.hero} className="w-full h-full object-cover" alt="Preview Capa" />
                    <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white cursor-pointer transition-opacity">
                      <Upload className="w-12 h-12 mb-3" />
                      <span className="font-black text-xs uppercase">Trocar Foto</span>
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'hero')} />
                    </label>
                  </div>
                  <p className="text-xs text-center text-slate-400 font-bold uppercase tracking-widest">Recomendado: Imagens horizontais (Paisagem)</p>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {["Box", "Espelhos", "Guarda-Corpo", "Sacadas", "Pias", "Vitrines"].map((name, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                    <div className="w-full aspect-square rounded-3xl overflow-hidden relative group mb-4 shadow-lg">
                      <img src={localImages.services[i]} className="w-full h-full object-cover" alt={name} />
                      <label className="absolute inset-0 bg-[#FF8C00]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white cursor-pointer transition-opacity">
                        <Upload className="w-8 h-8" />
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'services', i)} />
                      </label>
                    </div>
                    <h4 className="font-black text-center text-[#003366]">{name}</h4>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
                {localImages.gallery.map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-6 relative group/item">
                    <button 
                      onClick={() => removeGalleryItem(i)}
                      className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full shadow-lg opacity-0 group-hover/item:opacity-100 z-10 transition-all hover:scale-110"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="relative h-60 rounded-3xl overflow-hidden group/img border-4 border-slate-50">
                      <img src={item.url} className="w-full h-full object-cover" alt={item.title} />
                      <label className="absolute inset-0 bg-[#003366]/80 opacity-0 group-hover/img:opacity-100 flex flex-col items-center justify-center text-white cursor-pointer transition-opacity">
                        <Upload className="w-10 h-10 mb-2" />
                        <span className="font-black text-[10px] uppercase">Mudar Foto</span>
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'gallery', i)} />
                      </label>
                    </div>
                    <input 
                      type="text" 
                      value={item.title}
                      onChange={(e) => handleTitleChange(i, e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold text-[#003366] shadow-inner outline-none focus:ring-2 focus:ring-[#FF8C00]/50 transition-all"
                      placeholder="Legenda da foto"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="p-10 border-t border-slate-100 flex items-center justify-end gap-6 bg-white">
            <button 
              onClick={onClose}
              disabled={isSaving}
              className="px-8 py-5 rounded-2xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors disabled:opacity-50"
            >
              Fechar
            </button>
            <button 
              onClick={saveAll}
              disabled={isSaving}
              className="bg-[#FF8C00] text-white px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] flex items-center gap-4 hover:bg-orange-600 shadow-2xl transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0 transition-all"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  GRAVANDO NO BANCO...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Salvar Alterações Definitivas
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManager;
