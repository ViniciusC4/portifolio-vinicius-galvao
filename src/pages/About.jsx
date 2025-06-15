import React from "react";

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Seção superior com foto e título */}
        <div className="bg-gradient-to-r from-[#60519B] to-[#3A2D6D] p-10 text-center">
          <div className="flex flex-col items-center">
            {/* Container da foto ainda maior para desktop */}
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
              <img
                src="perfil.jfif"
                alt="Minha foto"
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Sobre Mim</h1>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-10 space-y-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#60519B]">
              Olá! Eu sou{" "}
              <strong className="text-2xl md:text-3xl">Vinícius Henrique Peres Galvão</strong>
            </p>
            <p className="text-lg md:text-xl text-gray-600 mt-3">
              Profissional esforçado na área de{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Seção de texto principal */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Desde cedo me interessei por <strong>tecnologia</strong>, algo comum entre as
                crianças da minha geração. Com o tempo, descobri que a <strong>programação</strong>{" "}
                me fazia feliz e poderia ser uma <strong>carreira</strong>. Atualmente, curso{" "}
                <strong>Análise e Desenvolvimento de Sistemas</strong>, onde aprendo a criar
                soluções tecnológicas com impacto positivo. Junto com meus amigos, conseguimos
                alcançar uma grande conquista: estudamos na <strong>Fatec de Jales</strong>, uma das
                melhores faculdades da região. Tenho grande interesse pelo curso e quero me{" "}
                <strong>especializar</strong> em uma área que me traga ainda mais{" "}
                <strong>realização profissional</strong>.
              </p>

              <div className="bg-[#F5F5FF] p-6 rounded-lg border-l-4 border-[#60519B]">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#60519B] mb-4">
                  Meu Objetivo
                </h2>
                <p className="text-gray-700 md:text-lg">
                  Meu principal objetivo é conquistar <strong>liberdade financeira</strong> por meio
                  da tecnologia, aproveitando as oportunidades que a área oferece para proporcionar{" "}
                  <strong>uma vida melhor para minha família</strong>. Quero construir uma carreira
                  sólida que me permita <strong>crescer profissionalmente</strong> e alcançar mais
                  estabilidade e qualidade de vida.
                </p>
              </div>
            </div>

            {/* Seção de habilidades e interesses */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1E202C] mb-4 flex items-center">
                  <span className="w-3 h-3 bg-[#60519B] rounded-full mr-2"></span>
                  Habilidades
                </h3>
                <ul className="space-y-3 text-gray-600 md:text-lg">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#60519B] rounded-full mr-2"></span>
                    Lógica de programação
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#60519B] rounded-full mr-2"></span>
                    Trabalho em equipe
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#60519B] rounded-full mr-2"></span>
                    Desenvolvimento de sistemas
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1E202C] mb-4 flex items-center">
                  <span className="w-3 h-3 bg-[#60519B] rounded-full mr-2"></span>
                  Interesses
                </h3>
                <ul className="space-y-3 text-gray-600 md:text-lg">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#60519B] rounded-full mr-2"></span>
                    Front-end
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#60519B] rounded-full mr-2"></span>
                    Inteligência artificial
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#60519B] rounded-full mr-2"></span>
                    Banco de dados
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg md:text-xl font-medium text-[#60519B]">
              Sinta-se à vontade para explorar meu portfólio e entrar em contato!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
