export function IniciarForm() {
  return (
    <form className="bg-white p-8 rounded-xl shadow-lg">
      <label htmlFor="nome" className="block mb-2 font-bold text-gray-700">
        Nome completo:
      </label>
      <input
        type="text"
        id="nome"
        name="nome"
        required
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="cpf" className="block mb-2 font-bold text-gray-700">
        CPF:
      </label>
      <input
        type="text"
        id="cpf"
        name="cpf"
        required
        pattern="\d{11}"
        placeholder="Somente números"
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="data-nascimento" className="block mb-2 font-bold text-gray-700">
        Data de nascimento:
      </label>
      <input
        type="date"
        id="data-nascimento"
        name="data-nascimento"
        required
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="telefone" className="block mb-2 font-bold text-gray-700">
        Celular:
      </label>
      <input
        type="tel"
        id="telefone"
        name="telefone"
        required
        placeholder="(xx) xxxxx-xxxx"
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="senha" className="block mb-2 font-bold text-gray-700">
        Senha:
      </label>
      <input
        type="password"
        id="senha"
        name="senha"
        required
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="confirmar-senha" className="block mb-2 font-bold text-gray-700">
        Confirmar senha:
      </label>
      <input
        type="password"
        id="confirmar-senha"
        name="confirmar-senha"
        required
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
      >
        Cadastrar
      </button>
    </form>
  );
}
