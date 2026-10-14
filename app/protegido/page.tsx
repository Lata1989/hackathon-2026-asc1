'use client';

export default function PaginaProtegida() {
  return (
    <main className="min-h-screen bg-[#0b0c16] text-slate-100 flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Luz Ambiental Neón de Fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-emerald-500/15 via-cyan-500/20 to-amber-500/15 blur-3xl pointer-events-none -z-10" />

      {/* CABECERA */}
      <header className="w-full text-center py-4">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          ⚡ ACCESO AUTORIZADO • PARADOJA RESUELTA ⚡
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL ABIERTO (SIN CONTENEDOR TARJETA) */}
      <div className="w-full max-w-6xl mx-auto my-auto text-center space-y-10 py-6">
        
        {/* Ícono animado */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-500/10 border-2 border-emerald-400 rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.4)] text-emerald-400 text-4xl font-mono animate-bounce">
          ⚡
        </div>

        {/* Título Principal Gigante */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300 drop-shadow-[0_2px_15px_rgba(16,185,129,0.5)]">
            ¡1.21 GIGAWATTS ALCANZADOS!
          </h1>
          <p className="text-emerald-400 font-mono text-base md:text-lg uppercase tracking-widest">
            Circuito de tiempo sincronizado a 88 MPH
          </p>
        </div>

        {/* Descripción */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
          Has completado la secuencia de descifrado correctamente. El dataset del tiempo está listo para ser descargado.
        </p>

        {/* Barra de Estado Creada en Línea */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-[#121424]/80 border border-emerald-500/30 px-8 py-3 rounded-2xl font-mono text-xs md:text-sm text-slate-400 shadow-xl backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">PAYLOAD STATUS:</span>
            <span className="text-emerald-400 font-bold">READY_FOR_DOWNLOAD</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">FILE NAME:</span>
            <span className="text-amber-300 font-bold">palabras.csv</span>
          </div>
        </div>

        {/* Botón de Descarga Ancho */}
        <div className="pt-4">
          <a
            href="/palabras.csv"
            download="palabras.csv"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black font-mono tracking-wider py-5 px-12 rounded-2xl transition-all shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] active:scale-[0.98] uppercase text-xl cursor-pointer"
          >
            📥 DESCARGAR DATASET CSV
          </a>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="w-full text-center py-4 text-xs font-mono text-slate-600 border-t border-slate-800/50">
        DESTINATION DATE: OCT 21 2026 • HILL VALLEY HACKATHON
      </footer>
    </main>
  );
}