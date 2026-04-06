
import React, { useState } from 'react';
import { X, Lock, User, ShieldAlert } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'william123') {
      onSuccess();
    } else {
      setError('Credenciais incorretas. Tente novamente.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#001f3f]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#003366] p-3 rounded-2xl text-white">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#003366]">Área Restrita</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Acesso Administrativo</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full text-slate-400 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold flex items-center gap-3 border border-red-100 animate-pulse">
              <ShieldAlert className="w-4 h-4" />
              {error}
            </div>
          )}

          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Usuário</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Seu usuário"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-[#003366] outline-none transition-all font-medium text-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-[#003366] outline-none transition-all font-medium text-slate-700"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/20"
          >
            Acessar Painel
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
