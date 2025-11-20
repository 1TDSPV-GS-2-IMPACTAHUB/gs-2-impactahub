import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* NAVBAR RETA */}
      <header className="w-full bg-gradient-to-r from-[#0a635d] to-[#0f2f35] shadow">
        <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-10 py-5 text-white">

          {/* LOGO */}
          <div className="text-lg font-semibold tracking-wide"><img src={logo} alt="" /></div>

          {/* LINKS */}
          <ul className="flex gap-10 text-[16px]">
            <li className="hover:text-[#c8ffef] transition"><Link to="/">Página Inicial</Link></li>
            <li className="hover:text-[#c8ffef] transition"><Link to="/cadastro">Cadastro</Link></li>
            <li className="hover:text-[#c8ffef] transition"><Link to="/perfil">Perfil</Link></li>
            <li className="hover:text-[#c8ffef] transition"><Link to="/conteudo">Conteúdo</Link></li>
          </ul>

          {/* AÇÕES */}
          <div className="flex gap-4 items-center">
            <Link to="/entrar" className="bg-[#8fd4c7] text-[#0f2f35] px-5 py-2 font-medium rounded-full hover:bg-[#76c0b3] transition">Entrar</Link>
            <Link to="/iniciar" className="bg-white text-[#0f2f35] px-5 py-2 font-medium rounded-full shadow hover:bg-gray-200 transition">Iniciar</Link>
            <button className="flex items-center gap-2 text-white hover:text-[#c8ffef] transition">🌙 Escuro</button>
          </div>
        </nav>

        {/* LINHA CINZA */}
        <div className="w-full h-[1px] bg-gray-200"></div>
      </header>

      {/* CONTEÚDO */}
      <main className="flex-1 max-w-[1200px] mx-auto p-6">
        <Outlet />
      </main>

      {/* FOOTER RETO */}
      <footer className="w-full bg-gradient-to-r from-[#0a635d] to-[#0f2f35] text-white py-10 mt-20">
        <div className="flex flex-col items-center gap-5">
          <ul className="flex gap-20 text-[18px]">
            <li className="hover:text-[#c8ffef] transition"><Link to="/faq">FAQ</Link></li>
            <li className="hover:text-[#c8ffef] transition"><Link to="/integrantes">Integrantes</Link></li>
          </ul>

          <p className="text-sm text-gray-300">© 2025 Projeto HC — Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
