import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaTumblr} from 'react-icons/fa'
import buildId from '@/systems/buildId'

const Footer = () => {
  return (
    <footer className="py-10 font-['Inria_Serif'] text-white footer-background">
        <div className="flex flex-wrap justify-between gap-10 mb-8 px-8 mx-10">
            {/* Coluna: Serviços */}
            <div className="flex-1 min-w-[150px]">
                <h4 className="mb-1 font-bold text-lg">Serviços</h4>
                <ul className="flex flex-col list-none opacity-80 space-y-2">
                    <li><a href="#" className="hover:underline">Consultoria em Dados</a></li>
                    <li><a href="#" className="hover:underline">Análises Estatísticas</a></li>
                    <li><a href="#" className="hover:underline">Visualização de Dados</a></li>
                    <li><a href="#" className="hover:underline">Modelos Preditivos</a></li>
                </ul>
            </div>

            {/* Clientes e Projetos */}
            <div className="flex-1 min-w-[150px]">
                <h4 className="mb-1 font-bold text-lg">Clientes e Projetos</h4>
                <ul className="flex flex-col list-none opacity-80 space-y-2">
                    <li><a href="#" className="hover:underline">Nossos Cases</a></li>
                    <li><a href="#" className="hover:underline">Depoimentos</a></li>
                    <li><a href="#" className="hover:underline">Solicitar Proposta</a></li>
                </ul>
            </div>

            {/* Sobre Nós */}
            <div className="flex-1 min-w-[150px]">
                <h4 className="mb-1 font-bold text-lg">Sobre Nós</h4>
                <ul className="flex flex-col list-none opacity-80 space-y-2">
                    <li><a href="#" className="hover:underline">Quem Somos</a></li>
                    <li><a href="#" className="hover:underline">Nossa Equipe</a></li>
                    <li><a href="#" className="hover:underline">Trabalhe Conosco</a></li>
                    <li><a href="#" className="hover:underline">Blog e Artigos</a></li>
                    <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
                </ul>
            </div>

            {/* Contato */}
            <div className="flex-1 min-w-[150px]">
                <h4 className="mb-1 font-bold text-lg">Contato</h4>
                <ul className="flex flex-col list-none opacity-80 space-y-2">
                    <li><a href="#" className="hover:underline">Fale Conosco</a></li>
                    <li><a href="#" className="hover:underline">Suporte Técnico</a></li>
                    <li><a href="#" className="hover:underline">Perguntas Frequentes</a></li>
                    <li><a href="#" className="hover:underline">Agende uma Reunião</a></li>
                </ul>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-20 text-2xl">
                <FaFacebookF className="cursor-pointer hover:text-cyan-300 transition-colors" />
                <FaTwitter className="cursor-pointer hover:text-cyan-300 transition-colors" />
                <FaInstagram className="cursor-pointer hover:text-cyan-300 transition-colors" />
                <FaTumblr className="cursor-pointer hover:text-cyan-300 transition-colors" />
            </div>
        </div>

        <div className="border-t border-white/20 pt-5 px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ml-17 mr-17 mx-10">
            <div className="flex items-center gap-2 text-sm bg-neutral-700 px-3 py-1">
                <img src="https://flagcdn.com/w40/br.png" alt="Brasil" width="15" height="10" />
                <span>Brasil</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
                <p className="text-white/80">&copy; 2025 StaticsPlus</p>
                <a href="#" className="hover:underline font-bold">Terms and Conditions</a>
                <a href="#" className="hover:underline font-bold">Privacy Policy</a>
            </div>

            <div className="text-sm">
                <p>Build ID: {buildId}</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
