import { Code2, Monitor, ShoppingCart, Smartphone } from "lucide-react";
import LogoLoop from "../ui/LogoLoop";
import ShinyText from "../ui/shiny-text";
import SpotlightCard from "../ui/SpotlightCard";
import Swipper from "../ui/swipper";
import { SwiperSlide } from "swiper/react";
import DecryptedText from "../ui/descript-text";
import { Lottie } from "../lottie";
import { useRef } from "react";

export default function Services() {
  const touch = useRef<HTMLDivElement>(null);

  const tecnologias = [
    {
      src: "https://cdn.simpleicons.org/react/ffffff",
      alt: "React",
      name: "React",
      title: "React",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      alt: "Next.js",
      name: "Next.js",
      title: "Next.js",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/laravel/ffffff",
      alt: "Laravel",
      name: "Laravel",
      title: "Laravel",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/nodedotjs/ffffff",
      alt: "Node.js",
      name: "Node.js",
      title: "Node.js",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/typescript/ffffff",
      alt: "TypeScript",
      name: "TypeScript",
      title: "TypeScript",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/tailwindcss/ffffff",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
      title: "Tailwind CSS",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/mysql/ffffff",
      alt: "MySQL",
      name: "MySQL",
      title: "MySQL",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/docker/ffffff",
      alt: "Docker",
      name: "Docker",
      title: "Docker",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/php/ffffff",
      alt: "PHP",
      name: "PHP",
      title: "PHP",
      width: 26,
      height: 26,
    },
    {
      src: "https://cdn.simpleicons.org/git/ffffff",
      alt: "Git",
      name: "Git",
      title: "Git",
      width: 26,
      height: 26,
    },
  ];

  const serviceCards = [
    {
      title: "Landing pages",
      description:
        "Páginas de alta conversão para apresentar sua marca, oferta e gerar novas oportunidades.",
      icon: <Monitor size={24} strokeWidth={1.8} />,
    },
    {
      title: "Sites mobile-first",
      description:
        "Experiências rápidas e responsivas, pensadas primeiro para a rotina de quem acessa pelo celular.",
      icon: <Smartphone size={24} strokeWidth={1.8} />,
    },
    {
      title: "E-commerce",
      description:
        "Lojas virtuais completas para vender melhor, com catálogo, checkout e uma jornada simples.",
      icon: <ShoppingCart size={24} strokeWidth={1.8} />,
    },
    {
      title: "Software sob medida",
      description:
        "Soluções digitais personalizadas para organizar processos e fazer seu negócio crescer.",
      icon: <Code2 size={24} strokeWidth={1.8} />,
    },
  ];

  const handleTouch = (event: React.PointerEvent) => {
    if (event.pointerType === "touch") {
    
      if (touch.current) {
        touch.current.style.opacity = "0";
      }
    }
  };
  return (
    <div className="relative w-full flex flex-col px-4 md:px-10 2xl:px-20 max-w-[1700px]">
      <div className="flex  flex-col gap-4 ">
        <p className="uppercase tracking-widest 2 ml-2 text-xs text-center md:text-start">
          <DecryptedText
            text="{ Soluções digitais }"
            speed={100}
            maxIterations={10}
            characters="dSiuõçogsital"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            sequential={true}
            animateOn="hover"
          />
        </p>
        <div className="flex justify-center md:justify-start items-center gap-10">
          <h2 className="shrink-0 text-center text-3xl font-medium md:text-start lg:text-4xl lg:leading-14">
            <ShinyText
              text="Tecnologias e Soluções"
              speed={2}
              delay={0}
              color="#ffffff"
              shineColor="#b5b5b5"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h2>

          <hr className="flex-1 border-white/10 hidden md:block" />
        </div>

        <p className="max-w-xl  text-center md:text-start text-gray-300 text-sm md:text-base  font-light ">
          Desenvolvemos soluções digitais sob medida que unem tecnologia e
          inovação para transformar ideias em resultados reais.
        </p>
      </div>
      <div
        ref={touch}
        className="pointer-events-none absolute -right-10 bottom-2 z-10 block w-40 -translate-y-1/2 sm:right-4 md:right-10 lg:w-52 2xl:right-20 xl:hidden"
      >
        <Lottie />
      </div>
      <div onPointerDown={handleTouch}>
        <Swipper
          loop={false}
          direction="horizontal"
          breakpoints={{
            550: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            692: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {serviceCards.map((card, index) => (
            <SwiperSlide key={index} className={`h-auto slide-${index}`}>
              <SpotlightCard
                className="group card-service !h-[390px] md:!h-[480px] bg-white/3 "
                spotlightColor="rgba(255, 255, 255, 0.2)"
              >
                <div className=" flex  flex-col gap-5 justify-between h-full">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition group-hover:bg-primary-color group-hover:duration-300">
                    {card.icon}
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <h3 className="text-lg font-medium uppercase">
                      {card.title}
                    </h3>
                    <p className="2xl:h-6 md:h-14 h-10 text-xs leading-5 text-gray-400">
                      {card.description}
                    </p>
                    <a
                      href="#contato"
                      className="mt-10 flex flex-1 items-center justify-center gap-2 rounded-full bg-white p-3 px-10 text-center text-sm font-medium text-black"
                    >
                      <span>Contatar equipe</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </SwiperSlide>
          ))}
        </Swipper>
      </div>

      <div className="mt-20 w-full  2xl:px-10">
        <LogoLoop
          logos={tecnologias}
          speed={80}
          direction="left"
          logoHeight={36}
          gap={18}
          pauseOnHover={false}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#141414"
          ariaLabel="Tecnologias que usamos"
          renderItem={(item, key) => {
            const tech = item as {
              src?: string;
              alt?: string;
              name?: string;
              title?: string;
              width?: number;
              height?: number;
            };

            return (
              <div
                key={key}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]"
              >
                <img
                  src={tech.src}
                  alt={tech.alt ?? tech.name ?? tech.title ?? "Tecnologia"}
                  title={tech.title ?? tech.name ?? tech.alt ?? "Tecnologia"}
                  width={tech.width ?? 26}
                  height={tech.height ?? 26}
                  className="h-6 w-6 object-contain"
                  loading="lazy"
                />
                <span>
                  {tech.name ?? tech.alt ?? tech.title ?? "Tecnologia"}
                </span>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
