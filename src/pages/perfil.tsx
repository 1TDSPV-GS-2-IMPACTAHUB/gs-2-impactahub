import { useEffect, useState } from "react";
import { API_CADASTRO } from "../api/cadastro";
import { PerfilCard } from "../components/perfil-card.tsx";
import type { Cadastro } from "../types/cadastro";

export function Perfil() {
  const [cadastros, setCadastros] = useState<Cadastro[]>([]);

  // GET - Buscar todos cadastros
  function carregarCadastros() {
    fetch(`${API_CADASTRO}/cadastros`)
      .then((res) => res.json())
      .then((dados) => setCadastros(dados))
      .catch((erro) => console.error("Erro ao carregar cadastros:", erro));
  }

  useEffect(() => {
    carregarCadastros();
  }, []);

  // DELETE - Remover cadastro
  function deletarCadastro(idPerfil: number) {
    fetch(`${API_CADASTRO}/cadastros/${idPerfil}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Cadastro removido com sucesso!");
        carregarCadastros(); // atualizar lista
      })
      .catch((erro) => console.error("Erro ao deletar cadastro:", erro));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-6">
      <header>
        <h2 className="font-bold text-3xl text-emerald-800">Perfis Cadastrados</h2>
      </header>

      <main className="flex flex-col gap-3 items-center justify-center w-full">
        {cadastros.map((cad) => (
          <PerfilCard
            key={cad.idPerfil}
            cadastro={cad}
            onDelete={deletarCadastro}
          />
        ))}
      </main>
    </div>
  );
}
