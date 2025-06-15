import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import MateriaCard from './MateriaCard';
import { getAllMaterias } from '../../data/materias';

const MateriasGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const materias = getAllMaterias();

  // Filtrar matérias baseado na busca e filtro
  const filteredMaterias = materias.filter(materia => {
    const matchesSearch = materia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         materia.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    
    const hasStatus = materia.projetos.some(projeto => 
      filterStatus === 'concluido' ? projeto.status === 'Concluído' : projeto.status === 'Em desenvolvimento'
    );
    
    return matchesSearch && hasStatus;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E202C] mb-4">
            Matérias <span className="text-[#60519B]">Cursadas</span>
          </h2>
          <p className="text-lg text-[#31323E] max-w-3xl mx-auto">
            Explore minha jornada acadêmica através das disciplinas que cursei, 
            conhecendo os professores, conteúdos aprendidos e projetos desenvolvidos.
          </p>
        </div>

        {/* Filtros e busca */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Barra de busca */}
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#31323E]" />
            <input
              type="text"
              placeholder="Buscar matérias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#60519B] focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Filtro por status */}
          <div className="relative">
            <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#31323E]" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#60519B] focus:border-transparent transition-all duration-300 appearance-none bg-white"
            >
              <option value="all">Todas as matérias</option>
              <option value="concluido">Com projetos concluídos</option>
              <option value="desenvolvimento">Em desenvolvimento</option>
            </select>
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="mb-6">
          <p className="text-[#31323E] text-sm">
            Mostrando {filteredMaterias.length} de {materias.length} matérias
          </p>
        </div>

        {/* Grid de matérias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterias.map((materia, index) => (
            <div
              key={materia.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MateriaCard materia={materia} />
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredMaterias.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#1E202C] mb-2">
              Nenhuma matéria encontrada
            </h3>
            <p className="text-[#31323E]">
              Tente ajustar os filtros ou termo de busca.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MateriasGrid;

