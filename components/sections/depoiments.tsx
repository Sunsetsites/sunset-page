"use client";

import { SwiperSlide } from "swiper/react";
import ShinyText from "../ui/shiny-text";
import SpotlightCard from "../ui/SpotlightCard";
import Swipper from "../ui/swipper";
import { useEffect, useState } from "react";

export function Depoiments() {
  const [largura, setLargura] = useState(0);
  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const depoiments = [
    {
      name: "Mirian Samara",
      role: "CEO · MS STUDIO",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptates ipsa animi fugit aliquid nihil.",
    },
    {
      name: "Mirian Samara",
      role: "CEO · MS STUDIO",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptates ipsa animi fugit aliquid nihil.",
    },
    {
      name: "Mirian Samara",
      role: "CEO · MS STUDIO",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptates ipsa animi fugit aliquid nihil.",
    },
    {
      name: "Mirian Samara",
      role: "CEO · MS STUDIO",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptates ipsa animi fugit aliquid nihil.",
    },
  ];
  return (
    <div
      className={`relative overflow-hidden bg-primary-color lg:[clip-path:polygon(0_0,45%_0,60%_80px,100%_80px,100%_100%,0_100%)] text-white pt-20 md:pt-40 pb-20  flex  ${largura < 1300 ? "flex-col" : "flex-row"} justify-between mt-20 px-4 md:px-10  2xl:px-30`}
    >
      <div className="relative z-10 flex gap-12  flex-col w-full justify-center md:justify-start  lg:max-w-2xl">
        <h2 className="text-3xl  text-center md:text-start md:text-4xl lg:text-6xl w-full  lg:max-w-2xl lg:leading-18 font-medium">
          <ShinyText
            text="Resultados que vão além do código"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </h2>
        <hr className="border-white/10 hidden md:block"></hr>

        <p className="text-gray-400 max-w-2xl text-center md:text-start  lg:block">
          A experiência de quem confiou em nosso trabalho para transformar
          ideias em soluções digitais.{" "}
          <span className="hidden md:block">
            Histórias reais de clientes que encontraram na tecnologia uma forma
            de evoluir seus processos, fortalecer seus negócios e alcançar novos
            resultados.
          </span>
        </p>
        <div className="absolute bottom-40 left-50 z-10 flex gap-4 before:absolute before:inset-0 before:m-auto before:h-90 before:w-90 before:rounded-full before:bg-white/4 before:blur-3xl before:-z-10 "></div>
      </div>

      <div>
        <Swipper
          className={`relative ${largura < 1300 ? "w-full" : "lg:max-w-lg"} `}
          allowTouchMove={false}
          simulateTouch={false}
          autoplay={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          speed={5000}
          breakpoints={{
            550: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            692: {
              slidesPerView: 2.2,
            },
            // 768: {
            //   slidesPerView: 2.5,
            // },
            1024: {
              slidesPerView: 3,
            },
          }}
          direction={largura < 1300 ? "horizontal" : "vertical"}
        >
          {depoiments.map((depoiment, index) => (
            <SwiperSlide key={index}>
              <SpotlightCard
                className="group rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:border-white/20"
                spotlightColor="rgba(255, 255, 255, 0.12)"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-4xl leading-none text-white/20">“</span>
                  <p className="text-base leading-7 text-gray-300">
                    {depoiment.text}
                  </p>
                  <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                      {depoiment.name.charAt(0)}
                      {depoiment.name.split(" ")[1].charAt(0)}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-white">
                        {depoiment.name}
                      </p>
                      <p className="text-xs text-gray-500">{depoiment.role}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </SwiperSlide>
          ))}
        </Swipper>
      </div>
    </div>
  );
}
