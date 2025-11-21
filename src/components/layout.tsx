import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTheme } from "../context/theme-context";

export function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-[#2b2b2b] text-white" : "bg-white text-black"
      }`}
    >
      {/* NAVBAR */}
      <header
        className={`w-full shadow transition-colors duration-300 ${
          theme === "dark"
            ? "bg-[#1f1f1f] text-white"
            : "bg-gradient-to-r from-[#0a635d] to-[#0f2f35] text-white"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-10 py-5">
          {/* LOGO */}
          <div className="text-lg font-semibold tracking-wide">
            <img src={logo} alt="logo" />
          </div>

          {/* LINKS */}
          <ul className="flex gap-10 text-[16px] text-white">
            <li className="hover:text-[#c8ffef] transition">
              <Link to="/">Página Inicial</Link>
            </li>
            <li className="hover:text-[#c8ffef] transition">
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li className="hover:text-[#c8ffef] transition">
              <Link to="/perfil">Perfil</Link>
            </li>
            <li className="hover:text-[#c8ffef] transition">
              <Link to="/conteudo">Conteúdo</Link>
            </li>
          </ul>

          {/* AÇÕES */}
          <div className="flex gap-4 items-center">
            <Link
              to="/entrar"
              className={`px-5 py-2 font-medium rounded-full transition ${
                theme === "dark"
                  ? "bg-[#383838] text-white hover:bg-[#4a4a4a]"
                  : "bg-[#8fd4c7] text-[#0f2f35] hover:bg-[#76c0b3]"
              }`}
            >
              Entrar
            </Link>

            <Link
              to="/iniciar"
              className={`px-5 py-2 font-medium rounded-full shadow transition ${
                theme === "dark"
                  ? "bg-[#383838] text-white hover:bg-[#4a4a4a]"
                  : "bg-white text-[#0f2f35] hover:bg-gray-200"
              }`}
            >
              Iniciar
            </Link>

            {/* BOTÃO TEMA */}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-md font-medium transition-all border ${
                theme === "dark"
                  ? "border-gray-500 hover:bg-[#333]"
                  : "border-white hover:bg-[#0e4f54] text-white"
              }`}
            >
              {theme === "light" ? "Modo Escuro" : "Modo Claro"}
            </button>
          </div>
        </nav>

        {/* LINHA */}
        <div
          className={`w-full h-[1px] ${
            theme === "dark" ? "bg-[#444]" : "bg-gray-200"
          }`}
        ></div>
      </header>

      {/* CONTEÚDO */}
      <main
        className={`flex-1 max-w-[1200px] mx-auto p-6 transition-colors duration-300 ${
          theme === "dark" ? "bg-[#2b2b2b] text-white" : "bg-white text-black"
        }`}
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer
        className={`w-full text-white py-10 mt-20 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-[#1f1f1f]"
            : "bg-gradient-to-r from-[#0a635d] to-[#0f2f35]"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          <ul className="flex gap-20 text-[18px]">
            <li className="hover:text-[#c8ffef] transition">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="hover:text-[#c8ffef] transition">
              <Link to="/integrantes">Integrantes</Link>
            </li>
          </ul>

          <p className="text-sm text-gray-300">
            © 2025 Impacta hub — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
