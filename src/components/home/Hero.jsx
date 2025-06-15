import { ArrowDown, BookOpen, Code, Lightbulb } from 'lucide-react';

const Hero = () => {
  const scrollToMaterias = () => {
    const materiasSection = document.getElementById('materias');
    if (materiasSection) {
      materiasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E202C] via-[#31323E] to-[#60519B]">
        {/* Elementos decorativos animados */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#60519B] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#BFC0D1] rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#60519B] rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-[#BFC0D1] rounded-full opacity-40 animate-pulse"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animação de entrada */}
        <div className="animate-fade-in-up">
          {/* Saudação */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#60519B] bg-opacity-20 text-[#BFC0D1] rounded-full text-sm font-medium backdrop-blur-sm border border-[#60519B] border-opacity-30">
              👋 Bem-vindo ao meu portfólio
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Vinicius{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60519B] to-[#BFC0D1]">
              Galvão
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-[#BFC0D1] mb-8 leading-relaxed">
            Estudante de <span className="text-[#60519B] font-semibold">Análise e Desenvolvimento de Sistemas</span>.
            <br className="hidden md:block" />
            Transformando aprendizado em <span className="text-[#60519B] font-semibold">projetos reais</span>.
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="text-[#60519B] mr-2" size={24} />
                <span className="text-2xl font-bold text-[#484D50]">11</span>
              </div>
              <p className="text-[#484D50] text-sm">Matérias Cursadas</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="flex items-center justify-center mb-2">
                <Code className="text-[#60519B] mr-2" size={24} />
                <span className="text-2xl font-bold text-[#484D50]">15</span>
              </div>
              <p className="text-[#484D50] text-sm">Projetos/Atividades Desenvolvidos</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="flex items-center justify-center mb-2">
                <Lightbulb className="text-[#60519B] mr-2" size={24} />
                <span className="text-2xl font-bold text-[#484D50]">∞</span>
              </div>
              <p className="text-[#484D50] text-sm">Vontade de Aprender</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="space-y-4">
            <button
              onClick={scrollToMaterias}
              className="group inline-flex items-center space-x-2 bg-[#60519B] hover:bg-[#60519B]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span>Explorar Matérias</span>
              <ArrowDown size={20} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

