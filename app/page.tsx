'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FRASE_ORIGINAL = "CADA DESAFIO OFRECE INFORMACION FUNDAMENTAL PARA REALIZAR GRANDES ESTUDIOS Y CREAR INNOVACION CON ESTRUCTURA Y METODOS";
const PALABRAS_SECRETAS = FRASE_ORIGINAL.split(' ');

const FRASE_CIFRADA = "PRaHOvYHP1iEQJMOSPYSQCeIPRpdt5CQQCSVRhaGt5CSRvYJÑSKHO1GIR1nERPYTO1eEFCeIO1EAhRWETZYKTBaQPhqWFBqWThCHt5CSTPYCFBiVP0aVFJMOR1KSÑhaGt5CSRvYGSSJdP1ixTBCGThCVOvYCFCGITiSHSSh=";

export default function Home() {
  const [inputs, setInputs] = useState<string[]>(Array(PALABRAS_SECRETAS.length).fill(''));
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setError(false);
  };

  const handleValidation = (e: React.FormEvent) => {
    e.preventDefault();

    const esCorrecto = PALABRAS_SECRETAS.every((palabraOriginal, idx) => {
      const palabraUsuario = (inputs[idx] || '').trim().toUpperCase();
      return palabraUsuario === palabraOriginal;
    });

    if (esCorrecto) {
      router.push('/protegido');
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c16] text-slate-100 flex flex-col justify-between p-4 md:p-8 relative overflow-x-hidden font-sans">
      
      {/* Luz Ambiental Neón de Fondo (Efecto DeLorean / Fuego) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-amber-500/10 via-cyan-500/15 to-fuchsia-500/10 blur-3xl pointer-events-none -z-10" />

      {/* CABECERA: Encabezado Hackathon */}
      <header className="w-full text-center py-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          ⚡ HACKATHON 2026 • OUTATIME CODING ⚡
        </div>
        <h1 className="text-4xl md:text-6xl font-black mt-3 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-fuchsia-500 drop-shadow-[0_2px_10px_rgba(6,182,212,0.5)]">
          CIRCUITO DEL TIEMPO
        </h1>
        <p className="text-slate-400 mt-2 text-sm md:text-base font-mono max-w-2xl mx-auto">
          Ingresa <span className="text-amber-400 font-bold">88 MPH</span> de velocidad criptográfica. Descifra la secuencia para desbloquear la descarga del CSV.
        </p>
      </header>

      {/* SECCIÓN PRINCIPAL: Pantalla Ancha Cifrado + Inputs */}
      <div className="w-full max-w-7xl mx-auto my-6 space-y-6">
        
        {/* Banner de la Cadena Cifrada Objetivo (Estilo Display Digital) */}
        <div className="bg-[#121424] border border-cyan-500/40 rounded-2xl p-5 shadow-[0_0_25px_rgba(6,182,212,0.15)] relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              CADENA CIFRADA OBJETIVO (ROT -3 &rarr; BASE64 &rarr; ROT +6)
            </span>
            <span className="text-xs font-mono text-slate-500">Flux Capacitor Status: OK</span>
          </div>
          <div className="font-mono text-sm md:text-base text-amber-300 break-all bg-[#07080f] p-4 rounded-xl border border-amber-500/20 shadow-inner select-all">
            {FRASE_CIFRADA}
          </div>
        </div>

        {/* Formulario con rejilla ancha de inputs */}
        <form onSubmit={handleValidation} className="space-y-6">
          <div className="bg-[#121424]/80 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-mono text-slate-300 uppercase tracking-widest">
                PALABRAS CLAVE DEL TIEMPO ({PALABRAS_SECRETAS.length} PALABRAS)
              </h2>
              <span className="text-xs font-mono text-fuchsia-400">1.21 GIGAWATTS REQUIRED</span>
            </div>

            {/* Grid de Inputs aprovechando toda la pantalla */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {PALABRAS_SECRETAS.map((_, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 mb-1 ml-1">
                    WORD #{String(index + 1).padStart(2, '0')}
                  </span>
                  <input
                    type="text"
                    maxLength={30}
                    placeholder={`P.${index + 1}`}
                    value={inputs[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className="w-full bg-[#07080f] border border-slate-700 focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(6,182,212,0.4)] text-center font-mono uppercase text-sm font-bold text-amber-300 py-2.5 px-2 rounded-lg outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cartel de error estilo alerta neón */}
          {error && (
            <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-xl text-red-400 text-sm font-mono text-center shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-pulse">
              🚨 ERROR DE PARADOJA TEMPORAL: Una o más palabras son incorrectas. ¡Revisa tu código!
            </div>
          )}

          {/* Botón de envío estilo Palanca del DeLorean */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black font-mono tracking-wider py-4 px-8 rounded-xl transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] active:scale-[0.99] uppercase text-lg cursor-pointer"
          >
            ⚡ ACTIVAR CONDENSADOR DE FLUJO Y VALIDAR ⚡
          </button>
        </form>
      </div>

      {/* FOOTER Estilo Retro */}
      <footer className="w-full text-center py-4 text-xs font-mono text-slate-600 border-t border-slate-800/50">
        DESTINATION DATE: OCT 21 2026 • HILL VALLEY HACKATHON
      </footer>
    </main>
  );
}