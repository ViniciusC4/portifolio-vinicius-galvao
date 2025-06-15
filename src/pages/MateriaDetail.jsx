import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Github, ExternalLink, User, Calendar, BookOpen, Code, ChevronDown, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { getMateriaBySlug } from '../data/materias';

const MateriaDetail = () => {
  const { slug } = useParams();
  const materia = getMateriaBySlug(slug);
  const [expandedTopics, setExpandedTopics] = useState(new Set());

  const toggleTopic = (index) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedTopics(newExpanded);
  };

  if (!materia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1E202C] mb-4">Matéria não encontrada</h1>
          <p className="text-[#31323E] mb-8">A matéria que você está procurando não existe.</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-[#60519B] text-white px-6 py-3 rounded-lg hover:bg-[#60519B]/90 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[materia.icone] || BookOpen;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BFC0D1]/20 via-white to-[#BFC0D1]/20">
      {/* Hero da matéria */}
      <section className="relative bg-gradient-to-r from-[#1E202C] to-[#31323E] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-[#BFC0D1] hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar às Matérias</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo principal */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: `${materia.cor}30` }}
                >
                  <IconComponent size={32} style={{ color: materia.cor }} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {materia.titulo}
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-[#BFC0D1] leading-relaxed mb-8">
                {materia.descricao}
              </p>

              {/* Estatísticas */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code size={20} className="text-[#60519B]" />
                    <span className="font-semibold">Projetos</span>
                  </div>
                  <p className="text-2xl font-bold">{materia.projetos.length}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen size={20} className="text-[#60519B]" />
                    <span className="font-semibold">Tópicos</span>
                  </div>
                  <p className="text-2xl font-bold">{materia.conteudoAprendido.length}</p>
                </div>
              </div>
            </div>

            {/* Informações do professor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#60519B] rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{materia.professor.nome}</h3>
                  <p className="text-[#BFC0D1]">{materia.professor.experiencia}</p>
                </div>
              </div>
              <p className="text-[#BFC0D1] leading-relaxed">
                {materia.professor.descricao}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo aprendido */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E202C] mb-8 text-center">
            Conteúdo <span className="text-[#60519B]">Aprendido</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {materia.conteudoAprendido.map((item, index) => {
              const isExpanded = expandedTopics.has(index);
              const topico = typeof item === 'string' ? item : item.topico;
              const detalhes = typeof item === 'string' ? null : item.detalhes;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                  style={{ borderLeftColor: materia.cor }}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => detalhes && toggleTopic(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                          style={{ backgroundColor: materia.cor }}
                        >
                          {index + 1}
                        </div>
                        <p className="text-[#1E202C] font-medium">{topico}</p>
                      </div>
                      {detalhes && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">
                            {isExpanded ? 'Ocultar detalhes' : 'Ver detalhes'}
                          </span>
                          {isExpanded ? (
                            <ChevronDown size={20} className="text-gray-500" />
                          ) : (
                            <ChevronRight size={20} className="text-gray-500" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {detalhes && isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-[#31323E] leading-relaxed">
                          {detalhes}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E202C] mb-8 text-center">
            Projetos <span className="text-[#60519B]">Desenvolvidos</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {materia.projetos.map((projeto, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header do projeto */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#1E202C] mb-2">
                      {projeto.nome}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        projeto.status === 'Concluído'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {projeto.status}
                    </span>
                  </div>
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${materia.cor}20` }}
                  >
                    <Code size={24} style={{ color: materia.cor }} />
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-[#31323E] mb-6 leading-relaxed">
                  {projeto.descricao}
                </p>

                {/* Tecnologias */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#1E202C] mb-3">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#31323E] text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link do GitHub */}
                {projeto.githubUrl && (
                  <a
                    href={projeto.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#1E202C] text-white px-6 py-3 rounded-lg hover:bg-[#31323E] transition-colors"
                  >
                    <Github size={20} />
                    <span>Ver no GitHub</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navegação entre matérias */}
      <section className="py-12 bg-[#1E202C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Explore outras matérias
          </h3>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-[#60519B] text-white px-8 py-4 rounded-lg hover:bg-[#60519B]/90 transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen size={20} />
            <span>Ver Todas as Matérias</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MateriaDetail;

