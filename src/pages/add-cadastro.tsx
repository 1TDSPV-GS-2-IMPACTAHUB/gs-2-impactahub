import { useForm } from "react-hook-form";
import type { Cadastro } from "../types/cadastro";

export function AddCadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Cadastro>();

    async function onSubmit(data: Cadastro) {
        console.log("Enviando cadastro:", data);

        try {
            const response = await fetch("https://impacta-hub-java.onrender.com/cadastros", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const erro = await response.json();
                console.error("Erro:", erro);
                alert("Erro ao cadastrar: " + (erro.mensagem ?? "Erro desconhecido"));
                return;
            }

            const result = await response.json();
            console.log("Cadastro criado:", result);
            alert("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Falha ao enviar cadastro.");
        }
    }

    return (
        <div className="flex flex-col items-center w-full p-4">
            <header>
                <h2 className="text-2xl font-bold mb-4">Cadastro do Impacta Hub</h2>
            </header>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-5xl flex bg-green-200 flex-col border border-green-400 rounded p-4 gap-4"
            >
                <label>Nome Completo</label>
                <input
                    {...register("nomeCompleto", { required: "Campo obrigatório" })}
                    type="text"
                    placeholder="Seu nome completo"
                    className="border border-green-600 bg-white rounded p-2"
                />
                {errors.nomeCompleto && (
                    <p className="text-red-600">{errors.nomeCompleto.message}</p>
                )}

                <label>Idade</label>
                <input
                    {...register("idade")}
                    type="number"
                    placeholder="Idade"
                    className="border border-green-600 bg-white rounded p-2"
                />

                <label>Formação</label>
                <input
                    {...register("formacao")}
                    type="text"
                    placeholder="Ex: Ensino médio, superior..."
                    className="border border-green-600 bg-white rounded p-2"
                />

                <label>Profissão</label>
                <input
                    {...register("profissao")}
                    type="text"
                    placeholder="Sua profissão"
                    className="border border-green-600 bg-white rounded p-2"
                />

                <label>Áreas de Interesse</label>
                <input
                    {...register("areasInteresse")}
                    type="text"
                    placeholder="Ex: Backend, UX/UI, Cloud..."
                    className="border border-green-600 bg-white rounded p-2"
                />

                <label>CEP</label>
                <input
                    {...register("cep")}
                    type="text"
                    placeholder="CEP"
                    className="border border-green-600 bg-white rounded p-2"
                />

                <label>Email</label>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Seu email"
                    className="border border-green-600 bg-white rounded p-2"
                />

                <label>Telefone</label>
                <input
                    {...register("telefone")}
                    type="text"
                    placeholder="(xx) xxxxx-xxxx"
                    className="border border-green-600 bg-white rounded p-2"
                />

                <label>Expectativa sobre o Hub</label>
                <textarea
                    {...register("expectativaHub")}
                    placeholder="Qual a sua expectativa?"
                    className="border border-green-600 bg-white rounded p-2"
                />

                <button
                    className="border border-green-800 bg-green-700 text-white font-bold rounded p-2 hover:bg-green-800 hover:cursor-pointer"
                    type="submit"
                >
                    Criar Cadastro
                </button>
            </form>
        </div>
    );
}
