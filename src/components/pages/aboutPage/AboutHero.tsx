import Image from 'next/image'
import React from 'react'
import team from '@/components/assets/Team.png'


const AboutHero = () => {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-5 relative w-full'>
      <div className="m-10">
        <div className="max-w-3xl text-center">
          <h2 className="font-semibold text-lg">Sobre Nós</h2>
          <h1 className="font-black text-3xl mt-4">Bem-vindo ao nosso site de Estatística!</h1>
          <p className="mt-4 text-lg leading-7 break-words whitespace-normal overflow-hidden">
            Somos apaixonados por dados, análises e pela busca por respostas objetivas para perguntas complexas.
            Nosso objetivo é tornar a Estatística acessível, compreensível e aplicável a todos — desde estudantes
            iniciantes até profissionais que utilizam a análise de dados em suas áreas de atuação.
          </p>
        </div>
      </div>

       {/* Bloco cinza: nossa equipe */}
      <div className="bg-gray-600 shadow-md max-w-3xl w-full px-6 py-8 rounded text-white absolute">
        <div className="flex flex-col gap-4 text-start">
          <h3 className="text-lg font-semibold">Nossa Equipe</h3>
          <h2 className="text-2xl sm:text-3xl font-black">Especialista em Estatística</h2>
          <p className="text-base sm:text-lg w-full sm:w-4/5">
            Por trás do nosso trabalho está uma equipe multidisciplinar formada por estatísticos, analistas de dados,
            cientistas, professores e profissionais com ampla experiência em diversos setores que utilizam a Estatística
            como ferramenta essencial.
          </p>
          <p className="text-base sm:text-lg w-full sm:w-4/5">
            Nossos especialistas são apaixonados por transformar dados em soluções. Com formações sólidas em Estatística,
            Matemática, Ciência de Dados e áreas correlatas, eles unem conhecimento técnico e visão prática para entregar
            análises precisas, conteúdo de qualidade e suporte confiável.
          </p>
        </div>
      </div>
      
      <div className="relative w-full max-w-md mx-auto shadow-lg rounded overflow-hidden">
        {/* Imagem */}
        <Image
          src={team}
          alt="Imagem da equipe"
          className="w-full h-auto object-cover"
        />

        {/* Bookmark */}
        <div className="absolute top-0 left-30 z-10 w-[3.9vw] h-[10.4vh] rounded-bl-[10px] bg-[#D9D9D9] shadow-[0_4px_0_rgba(0,0,0,0.25)]" />
        <div className="absolute top-0 left-[3.9vw] z-[5] w-[3.9vw] h-[10.4vh] rounded-tr-[10px] bg-[#C5C5C5] shadow-[0_4px_0_rgba(0,0,0,0.25)]" />
      </div>
    </section>
  )
}

export default AboutHero
