import { IniciarForm } from "../components/iniciarForm";

export function Iniciar() {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      <header className="w-full bg-green-600 text-white py-6 text-center shadow-md">
        <h1 className="text-2xl font-bold">
          Cadastro Online
        </h1>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-xl w-full">
          <h2 className="text-xl font-semibold mb-2">
            Preencha os campos para efetuar o seu cadastro
          </h2>
          <p className="mb-6 text-gray-600">
            Todos os campos são obrigatórios.
          </p>

          {/* Formulário */}
          <IniciarForm />
        </div>
      </main>
    </div>
  );
}
