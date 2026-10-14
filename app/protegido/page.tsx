export default function PaginaProtegida() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold text-green-600 mb-4">¡Acceso Concedido!</h1>
      <p className="mb-6 text-center">
        Has superado el desafío criptográfico exitosamente. Ya puedes descargar el archivo de datos:
      </p>
      
      <a
        href="/palabras.csv"
        download="palabras.csv"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
      >
        📥 Descargar Archivo CSV
      </a>
    </main>
  );
}