import { Link } from 'react-router-dom';
import { ArrowRight, Github, User, BookOpen } from 'lucide-react';
import * as Icons from 'lucide-react';

const MateriaCard = ({ materia }) => {
  // Dinamicamente pegar o ícone baseado no nome
  const IconComponent = Icons[materia.icone] || BookOpen;

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Gradiente de fundo que aparece no hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: materia.cor }}
      ></div>
      
      {/* Conteúdo do card */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Header do card */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${materia.cor}20` }}
          >
            <IconComponent 
              size={24} 
              style={{ color: materia.cor }}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </div>
          <div className="flex space-x-1">
            {materia.projetos.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#60519B] transition-colors duration-300"
              ></div>
            ))}
          </div>
        </div>

        {/* Título e descrição */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-[#1E202C] mb-3 group-hover:text-[#60519B] transition-colors duration-300">
            {materia.titulo}
          </h3>
          <p className="text-[#31323E] text-sm leading-relaxed mb-4 line-clamp-3">
            {materia.descricao}
          </p>
        </div>

        {/* Informações do professor */}
        <div className="flex items-center mb-4 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
          <User size={16} className="text-[#60519B] mr-2" />
          <div>
            <p className="text-sm font-medium text-[#1E202C]">{materia.professor.nome}</p>
            <p className="text-xs text-[#31323E]">{materia.professor.experiencia}</p>
          </div>
        </div>

        {/* Projetos count */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#31323E]">
              {materia.projetos.length} projeto{materia.projetos.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            {materia.projetos.map((projeto, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full ${
                  projeto.status === 'Concluído' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {projeto.status}
              </span>
            ))}
          </div>
        </div>

        {/* Botão de ação */}
        <Link
          to={`/materia/${materia.slug}`}
          className="group/btn flex items-center justify-center space-x-2 w-full py-3 px-4 bg-[#1E202C] text-white rounded-lg hover:bg-[#60519B] transition-all duration-300 transform hover:scale-105"
        >
          <span className="font-medium">Ver Detalhes</span>
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover/btn:translate-x-1" 
          />
        </Link>

        {/* Efeito de brilho no hover */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:left-[100%] transition-all duration-1000 transform skew-x-12"></div>
        </div>
      </div>
    </div>
  );
};

export default MateriaCard;

