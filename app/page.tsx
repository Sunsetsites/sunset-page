"use client";

import { Depoiments } from "@/components/sections/depoiments";
import { Hero } from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Steps from "@/components/sections/steps";
import Threads from "@/components/ui/Threads";
import { ExternalLink, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Hero />
      <div className=" bg-primary-color lg:[clip-path:polygon(0_0,45%_0,60%_80px,100%_80px,100%_100%,0_100%)] text-white py-20 md:py-40 justify-center flex items-center flex-col relative">
        <Services />
      </div>
      <Steps />
      <Depoiments />

      <section className="cta-section px-4 md:px-10 2xl:px-30">
        <div className="container relative overflow-hidden py-28">
          <div className="cta-grid" />
          <div className="relative z-10 md:max-w-3xl">
            {/* <SectionLabel no="09">Próximo passo</SectionLabel> */}
            <h2 className="text-4xl md:text-8xl  md:leading-24 tracking-[-0.08em]">
              Pronto para colocar sua empresa na internet?
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-navy/60">
              Conte um pouco sobre o seu negócio. A gente devolve um caminho
              possível — e uma ideia de como ele pode ficar.
            </p>
            <a
                href={"https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20site."}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-primary-color !text-white px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-cobalt"
              >
                Contatar Equipe <MessageCircle size={17} />
              </a>
            <a className="mt-9 inline-flex items-center gap-3 rounded-full bg-navy !text-white px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-cobalt"></a>
          </div>
        </div>
         <div className=" absolute mt-100 inset-0 ">
        <Threads amplitude={3} distance={1} enableMouseInteraction={false} />
      </div>
    
      </section>
      
    </main>
  );
}
