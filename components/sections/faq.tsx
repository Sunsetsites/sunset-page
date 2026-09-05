"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import DecryptedText from "../ui/descript-text";

const questions = [
  {
    question: "Quanto tempo demora para criar um site?",
    answer:
      "Em média, um projeto leva de duas a seis semanas, dependendo do número de páginas, funcionalidades e velocidade das aprovações.",
  },
  {
    question: "Preciso ter domínio e hospedagem?",
    answer:
      "Não precisa. Podemos orientar você na escolha e deixar domínio, hospedagem e publicação configurados do jeito certo.",
  },
  {
    question: "Vocês fazem a hospedagem?",
    answer:
      "Sim. Trabalhamos com uma estrutura adequada ao projeto e acompanhamos a publicação para que tudo fique rápido e estável.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Cada tela é pensada para funcionar bem em celulares, tablets e computadores, com navegação simples e responsiva.",
  },
  {
    question: "O site aparece no Google?",
    answer:
      "Entregamos uma base técnica preparada para SEO, com estrutura semântica, performance e configurações essenciais para a indexação.",
  },
  {
    question: "Posso colocar meu WhatsApp?",
    answer:
      "Sim. Podemos integrar WhatsApp, formulários, redes sociais e outros canais importantes para o seu negócio.",
  },
  {
    question: "Posso pedir alterações?",
    answer:
      "Claro. O projeto passa por etapas de revisão para ajustarmos os detalhes até a solução fazer sentido para sua marca.",
  },
  
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className=" px-5 py-24 sm:px-8 md:px-10 md:py-32 2xl:px-20"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[minmax(280px,0.8fr)_minmax(520px,1.2fr)] lg:gap-24">
        <div className="lg:pt-2">
          <div className="mb-7 flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-color">
            <DecryptedText
              text="{ Dúvidas frequentes }"
              speed={100}
              maxIterations={10}
              characters="dúvFreqentes"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              sequential={true}
              animateOn="hover"
            />
          </div>
          <h2 className="max-w-md text-3xl md:text-4xl leading-10 font-medium text-gray-900 sm:text-4xl md:leading-12">
            Clareza faz parte
            <br />
            da <span className="text-primary-color">entrega.</span>
          </h2>
          <p className="mt-8 max-w-xs text-sm leading-6 text-[#64748b]">
            Se a sua pergunta não estiver aqui, mande uma mensagem. A conversa
            começa sem compromisso.
          </p>
        </div>

        <div className="border-t border-[#17223b]/15">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-[#17223b]/15">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-6 text-left text-sm font-semibold transition-colors hover:text-primary-color md:text-base"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className={`shrink-0 text-primary-color transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="min-h-0 overflow-hidden max-w-2xl text-sm leading-6 text-[#64748b]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}