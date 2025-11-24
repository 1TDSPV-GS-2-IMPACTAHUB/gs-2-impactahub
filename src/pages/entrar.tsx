import { EntrarForms } from "../components/entrarForm";

export function Entrar() {
    return (
        <>
            <header className="w-full bg-blue-600 text-white py-6 text-center shadow-md">
                <h1 className="text-2xl font-bold">
                    Entrar com seu login para seu acesso
                </h1>
            </header>

            <main className="flex justify-center items-center py-10 px-4">
                <EntrarForms />
            </main>
        </>
    );
}
