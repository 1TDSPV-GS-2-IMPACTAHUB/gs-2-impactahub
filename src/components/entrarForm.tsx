export function EntrarForms() {
    return (
        <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 mb-5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="senha" className="block mb-2 font-bold text-gray-700">
                Senha:
            </label>
            <input
                type="password"
                id="senha"
                name="senha"
                required
                className="w-full p-3 mb-5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
                Submeter
            </button>
        </form>
    );
}
