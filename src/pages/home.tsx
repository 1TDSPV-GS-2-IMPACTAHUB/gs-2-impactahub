import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Inicial() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-teal-800 to-teal-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 mt-20 gap-10">
        <div className="flex flex-col max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Atualize sua Carreira com Tecnologia
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Conectamos profissionais formados em diversas áreas ao universo da
            tecnologia. Receba recomendações de cursos, notícias e caminhos
            profissionalizantes personalizados.
          </p>

          <Link
            to="/cadastro"
            className="bg-white text-teal-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition w-fit"
          >
            Começar Agora
          </Link>
        </div>

        <img
          src={logo}
          alt="Tecnologia"
          className="w-20 "
        />
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 lg:px-24 mt-24 mb-24">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur">
          <h3 className="text-2xl font-bold mb-2">Cursos Personalizados</h3>
          <p className="opacity-90">
            Receba trilhas de aprendizagem baseadas na sua formação e áreas de
            interesse.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur">
          <h3 className="text-2xl font-bold mb-2">Atualizações Constantes</h3>
          <p className="opacity-90">
            Notícias e tendências do mercado tech selecionadas especialmente para
            você.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur">
          <h3 className="text-2xl font-bold mb-2">Transição Guiada</h3>
          <p className="opacity-90">
            Entenda como migrar da sua área atual para a tecnologia com clareza e
            segurança.
          </p>
        </div>
      </section>
    </div>
  );
}