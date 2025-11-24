export default function Conteudos() {
  const conteudos = [
    {
      titulo: "Automação Predial Inteligente",
      descricao:
        "Como sistemas automatizados otimizam consumo de energia, segurança e manutenção preventiva.",
      link: "#",
    },
    {
      titulo: "Internet das Coisas na Construção",
      descricao:
        "IoT aplicada a canteiros de obras: sensores, monitoramento remoto e produtividade.",
      link: "#",
    },
    {
      titulo: "Drones para Inspeções Estruturais",
      descricao:
        "Como engenheiros estão utilizando drones para inspeção e avaliação de estruturas.",
      link: "#",
    },
    {
      titulo: "Modelagem BIM Avançada",
      descricao:
        "A integração do BIM com plataformas automatizadas e IA para previsões de obra.",
      link: "#",
    },
    {
      titulo: "Robótica na Construção Civil",
      descricao:
        "Equipamentos autônomos para assentamento, corte e transporte de materiais.",
      link: "#",
    },
    {
      titulo: "IA para Planejamento de Obras",
      descricao:
        "Machine Learning auxiliando engenheiros na previsão de custos, riscos e prazos.",
      link: "#",
    },
    {
      titulo: "Sensores Estruturais Inteligentes",
      descricao:
        "Monitoramento contínuo de vibrações, umidade, temperatura e integridade estrutural.",
      link: "#",
    },
    {
      titulo: "Impressão 3D de Concreto",
      descricao:
        "Entenda como obras inteiras estão sendo impressas com precisão milimétrica.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-dark to-brand-light dark:from-gray-900 dark:to-gray-700 p-10 transition-all duration-300">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white dark:text-gray-200">
          Conteúdos Recomendados
        </h1>
        <p className="text-lg text-white/80 dark:text-gray-300 mt-2">
          Para profissionais de Engenharia interessados em Automação e Tecnologia
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {conteudos.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:scale-[1.02] transition-transform"
          >
            <h2 className="text-2xl font-semibold text-brand-dark dark:text-gray-100">
              {card.titulo}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {card.descricao}
            </p>

            <a
              href={card.link}
              className="inline-block mt-4 px-4 py-2 bg-brand-light dark:bg-gray-600 hover:bg-brand-dark dark:hover:bg-gray-500 text-white rounded-lg transition"
            >
              Ver conteúdo
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}
