import { Instagram } from 'lucide-react';
import { BicepsFlexed } from 'lucide-react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E202C] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações pessoais */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Vinicius <span className="text-[#60519B]">Galvão</span>
            </h3>
            <p className="text-[#BFC0D1] text-sm leading-relaxed">
              Estudante dedicado à área de tecnologia e desenvolvimento, 
              sempre em busca de novos conhecimentos e desafios.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/"
                  className="text-[#BFC0D1] hover:text-[#60519B] transition-colors duration-300 text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="/sobre"
                  className="text-[#BFC0D1] hover:text-[#60519B] transition-colors duration-300 text-sm"
                >
                  Sobre Mim
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Conecte-se</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ViniciusC4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#31323E] rounded-lg text-[#BFC0D1] hover:text-white hover:bg-[#60519B] transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vin%C3%ADcius-galv%C3%A3o-546328304/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#31323E] rounded-lg text-[#BFC0D1] hover:text-white hover:bg-[#60519B] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/d4ark_vini/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#31323E] rounded-lg text-[#BFC0D1] hover:text-white hover:bg-[#60519B] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:vinih5119@gmail.com"
                className="p-2 bg-[#31323E] rounded-lg text-[#BFC0D1] hover:text-white hover:bg-[#60519B] transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-[#BFC0D1] text-xs">
              vinih5119@gmail.com
            </p>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-[#31323E] mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#BFC0D1] text-sm">
              © {currentYear} Vinicius Galvão. Todos os direitos reservados.
            </p>
            <p className="text-[#BFC0D1] text-sm flex items-center">
              Feito com <BicepsFlexed size={20} className="mx-1 text-[#60519B]" /> e React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

