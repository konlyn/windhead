import Image from 'next/image'
import React from 'react'
import team from '@/components/assets/Team.png'


const AboutHero = () => {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-5 relative w-full'>
      <div className="mt-10">
        <div className="flex flex-col gap-3 max-w-3xl text-center">
          <h2 className="font-semibold text-lg">Sobre Nós</h2>
          <h1 className="font-black text-3xl">Bem-vindo ao nosso site de Estatística!</h1>
          <p className="text-lg leading-7 break-words whitespace-normal overflow-hidden sm:w-[630px] block max-w-[630px]">
            Somos apaixonados por dados, análises e pela busca por respostas objetivas para perguntas complexas.
            Nosso objetivo é tornar a Estatística acessível, compreensível e aplicável a todos — desde estudantes
            iniciantes até profissionais que utilizam a análise de dados em suas áreas de atuação.
          </p>
        </div>
      </div>

      {/* Bloco cinza: nossa equipe */}
        <div className="bg-[#818181] mt-36 relative flex justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full max-w-[1227px] px-6 py-8 rounded text-white">
          <div className="w-6 h-6 bg-gray-100 opacity-40 shadow-[0px_6px_2px_rgba(0,0,0,0.25)] rounded-full absolute top-2 left-2"></div>
          <div className="w-6 h-6 bg-gray-100 opacity-40 shadow-[0px_6px_2px_rgba(0,0,0,0.25)] rounded-full absolute top-2 right-2"></div>
          <div className="w-6 h-6 bg-gray-100 opacity-40 shadow-[0px_6px_2px_rgba(0,0,0,0.25)] rounded-full absolute bottom-2 left-2"></div>
          <div className="w-6 h-6 bg-gray-100 opacity-40 shadow-[0px_6px_2px_rgba(0,0,0,0.25)] rounded-full absolute bottom-2 right-2"></div>
          <div className="flex flex-col gap-6 text-start">
            <h3 className="text-lg font-semibold">Nossa Equipe</h3>
            <h2 className="text-2xl sm:text-3xl font-black">Especialista em Estatística</h2>
            <p className="text-base sm:text-lg w-full sm:max-w-[477px] block">
              Por trás do nosso trabalho está uma equipe multidisciplinar formada por estatísticos, analistas de dados,
              cientistas, professores e profissionais com ampla experiência em diversos setores que utilizam a Estatística
              como ferramenta essencial.
            </p>
            <p className="text-base sm:text-lg w-full sm:max-w-[477px] block">
              Nossos especialistas são apaixonados por transformar dados em soluções. Com formações sólidas em Estatística,
              Matemática, Ciência de Dados e áreas correlatas, eles unem conhecimento técnico e visão prática para entregar
              análises precisas, conteúdo de qualidade e suporte confiável.
            </p>
          </div>

            <div className="hidden md:block max-w-[433px] h-auto shadow-md ml-0 md:ml-20 sm:mt-2 shrink-0 self-start">
              {/* Imagem */}
              <Image
                src={team}
                alt="Imagem da equipe"
                className="w-full h-auto object-cover"
              />
            </div>
        </div>
    </section>
  )
}

export default AboutHero
