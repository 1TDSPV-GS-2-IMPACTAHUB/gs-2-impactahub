import type { Cadastro } from "../types/cadastro";

interface PerfilCardProps {
  cadastro: Cadastro;
  onDelete: (idPerfil: number) => void;
}

export function PerfilCard({ cadastro, onDelete }: PerfilCardProps) {
  return (
    <div className="flex flex-col bg-emerald-200 border border-emerald-400 rounded-xl py-4 px-8 w-3/5 shadow">
      <p className="font-bold text-gray-700">
        Nome: {cadastro.nomeCompleto}
      </p>

      {cadastro.idade && (
        <p className="font-bold text-gray-700">Idade: {cadastro.idade}</p>
      )}

      {cadastro.formacao && (
        <p className="font-bold text-gray-700">Formação: {cadastro.formacao}</p>
      )}

      {cadastro.profissao && (
        <p className="font-bold text-gray-700">Profissão: {cadastro.profissao}</p>
      )}

      {cadastro.areasInteresse && (
        <p className="font-bold text-gray-700">
          Áreas de Interesse: {cadastro.areasInteresse}
        </p>
      )}

      {cadastro.email && (
        <p className="font-bold text-gray-700">Email: {cadastro.email}</p>
      )}

      {cadastro.telefone && (
        <p className="font-bold text-gray-700">Telefone: {cadastro.telefone}</p>
      )}

      {cadastro.expectativaHub && (
        <p className="font-bold text-gray-700">
          Expectativa: {cadastro.expectativaHub}
        </p>
      )}

      <button
        onClick={() => onDelete(cadastro.idPerfil)}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
      >
        Remover
      </button>
    </div>
  );
}
