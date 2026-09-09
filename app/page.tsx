"use client";

import { Depoiments } from "@/components/sections/depoiments";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Steps from "@/components/sections/steps";
import Threads from "@/components/ui/Threads";
import { MessageCircle } from "lucide-react";
import Faq from "@/components/sections/faq";
import { projectWhatsAppLink } from "@/lib/contact";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Hero />

      <Services />

      <div id="processo">
        <Steps />
      </div>
      <Depoiments />
      <Faq />

      <section
        id="contato"
        className="cta-section px-4  md:px-10 2xl:px-30 text-center flex justify-center items-center  "
      >
        <div className="relative overflow-hidden py-28 w-full flex justify-center items-center ">
          <div className="cta-grid" />
          <div className="relative z-10 md:max-w-xl flex justify-center items-center flex-col gap-6">
            {/* <SectionLabel no="09">Próximo passo</SectionLabel> */}
            <h2 className="text-3xl md:text-4xl  md:leading-12 ">
              Pronto para levar seu negócio mais longe?
            </h2>
            <p className="mt-2 max-w-xl text-sm md:text-lg text-center  text-gray-700">
              Conte um pouco sobre o seu negócio. A gente desenvolve um caminho
              possível — e uma ideia de como ele pode ficar.
            </p>
            <a
              href={projectWhatsAppLink}
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-primary-color text-white px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-cobalt"
            >
              Começar meu projeto <MessageCircle size={17} />
            </a>
          </div>
        </div>
        {/* <div className=" absolute mt-100 inset-0 w-full">
          <Threads amplitude={3} distance={2} enableMouseInteraction={false} />
        </div> */}
      </section>
    </main>
  );
}
