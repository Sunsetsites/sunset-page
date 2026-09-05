import { SwiperSlide } from "swiper/react";
import { Check, MessageCircle, PanelsTopLeft, Rocket } from "lucide-react";
import ShinyText from "../ui/shiny-text";
import Swipper from "../ui/swipper";
import DecryptedText from "../ui/descript-text";

export default function Steps() {
  const steps = [
    {
      title: "Você explica",
      description: "Conversamos sobre seu negócio, objetivos e clientes.",
      icon: MessageCircle,
    },
    {
      title: "Criamos o layout",
      description: "Transformamos a estratégia em uma direção visual.",
      icon: PanelsTopLeft,
    },
    {
      title: "Você aprova",
      description: "Ajustamos os detalhes até a página fazer sentido.",
      icon: Check,
    },
    {
      title: "Publicamos",
      description: "Colocamos no ar e configuramos o SEO para busca.",
      icon: Rocket,
    },
  ];

  return (
    <section className="flex flex-col  w-full gap-4 py-20 md:py-40 px-4 md:px-10 2xl:px-20 max-w-[1700px] mx-auto">
      <div className="flex items-center flex-col  justify-center md:justify-start md:items-start  ">
       
       

        <p className="uppercase tracking-widest  ml-2 text-xs mb-6  text-center  w-full md:text-start">
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
        <div className="flex  items-center w-full gap-6 justify-center md:justify-start">
          <h2 className="text-2xl md:max-w-full md:text-4xl font-medium text-center ">
            <ShinyText
              text="Como seu projeto acontece"
              speed={6}
              delay={0}
              color="#000000"
              shineColor="#b5b5b5"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h2>
          <hr className="flex-1 border-gray-200 hidden md:block" />
        </div>

        <p className="max-w-xl text-center md:text-start text-sm mt-4 md:text-base   text-gray-500 ">
          Planejamos, desenvolvemos e entregamos soluções digitais sob medida,
          do primeiro conceito ao produto final. .
        </p>
      </div>

      <div className="max-w-7xl lg:mt-10   2xl:mx-auto  rounded-2xl ">
        <Swipper
          direction="horizontal"
          pagination
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
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="flex h-full flex-col justify-between gap-10 border-t border-b lg:border-b-0  border-r border-gray-200 p-10 group">
                <div className="flex items-start justify-between border-b border-gray-200/80 pb-4">
                  <div className="flex items-baseline gap-2 font-mono">
                    <span className="text-5xl font-medium leading-none tracking-[-0.12em] text-gray-300 transition group-hover:text-primary-color">
                      N{index + 1}
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest text-gray-400">
                      / 04
                    </span>
                  </div>
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400 transition group-hover:text-primary-color">
                    SYS.N{index + 1}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-md font-medium uppercase  group-hover:text-primary-color transition group-hover:duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm font-light text-gray-600">
                    {step.description}
                  </p>
                </div>
                <step.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-gray-400 transition group-hover:text-primary-color"
                  aria-hidden="true"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swipper>
      </div>
    </section>
  );
}
