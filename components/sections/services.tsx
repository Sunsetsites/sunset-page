import { title } from "process";
import LogoLoop from "../ui/LogoLoop";
import ShinyText from "../ui/shiny-text";
import SpotlightCard from "../ui/SpotlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services() {
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
      title: "Software sob medida",
      description:
        "Soluções personalizadas para atender às necessidades específicas do seu negócio.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-monitor-cog-icon lucide-monitor-cog"
        >
          <path d="M12 17v4" />
          <path d="m14.305 7.53.923-.382" />
          <path d="m15.228 4.852-.923-.383" />
          <path d="m16.852 3.228-.383-.924" />
          <path d="m16.852 8.772-.383.923" />
          <path d="m19.148 3.228.383-.924" />
          <path d="m19.53 9.696-.382-.924" />
          <path d="m20.772 4.852.924-.383" />
          <path d="m20.772 7.148.924.383" />
          <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
          <path d="M8 21h8" />
          <circle cx="18" cy="6" r="3" />
        </svg>
      ),
    },
    {
      title: "Software sob medida",
      description:
        "Soluções personalizadas para atender às necessidades específicas do seu negócio.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-monitor-cog-icon lucide-monitor-cog"
        >
          <path d="M12 17v4" />
          <path d="m14.305 7.53.923-.382" />
          <path d="m15.228 4.852-.923-.383" />
          <path d="m16.852 3.228-.383-.924" />
          <path d="m16.852 8.772-.383.923" />
          <path d="m19.148 3.228.383-.924" />
          <path d="m19.53 9.696-.382-.924" />
          <path d="m20.772 4.852.924-.383" />
          <path d="m20.772 7.148.924.383" />
          <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
          <path d="M8 21h8" />
          <circle cx="18" cy="6" r="3" />
        </svg>
      ),
    },
    {
      title: "Software sob medida",
      description:
        "Soluções personalizadas para atender às necessidades específicas do seu negócio.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-monitor-cog-icon lucide-monitor-cog"
        >
          <path d="M12 17v4" />
          <path d="m14.305 7.53.923-.382" />
          <path d="m15.228 4.852-.923-.383" />
          <path d="m16.852 3.228-.383-.924" />
          <path d="m16.852 8.772-.383.923" />
          <path d="m19.148 3.228.383-.924" />
          <path d="m19.53 9.696-.382-.924" />
          <path d="m20.772 4.852.924-.383" />
          <path d="m20.772 7.148.924.383" />
          <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
          <path d="M8 21h8" />
          <circle cx="18" cy="6" r="3" />
        </svg>
      ),
    },
  ];
  return (
    <div className="w-full  flex flex-col  justify-center  px-4 md:px-10 2xl:px-20 max-w-[1500px]">
      <div className="flex items-center flex-col gap-4 ">
        <h2 className="text-3xl lg:text-4xl  lg:leading-14  font-medium text-center">
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

        <p className="max-w-2xl text-center text-gray-300 text-xl mt-4 font-light ">
          Desenvolvemos soluções digitais sob medida que unem tecnologia e
          inovação para transformar ideias em resultados reais.
        </p>
      </div>
      <Swiper
        className="mt-20 w-full max-w-[1100px] px-4"
     
        spaceBetween={10}
        slidesPerView={1.1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          550:{
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView:2,
          },
          692:{
            slidesPerView: 2.2,
          },
          // 768: {
          //   slidesPerView: 2.5,
          // },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {serviceCards.map((card, index) => (
          <SwiperSlide key={index} className="h-auto">
            <SpotlightCard
              className="custom-spotlight-card group card-service bg-white/3 "
              spotlightColor="rgba(255, 255, 255, 0.2)"
            >
              <div className="relative flex  flex-col gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition group-hover:bg-primary-color group-hover:duration-300">
                  {card.icon}
                </div>

                <div className="mt-25 flex flex-col justify-center gap-3">
                  <h3 className="text-xl font-bold">{card.title}</h3>

                  <p className="text-sm leading-6 text-gray-400">
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
      </Swiper>
    

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
