import { SwiperSlide } from "swiper/react";
import ShinyText from "../ui/shiny-text";
import Swipper from "../ui/swipper";

export default function Steps() {
  const steps = [
    {
      title: "Você explica",
      description: "Conversamos sobre seu negócio, objetivos e clientes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 group-hover:text-primary-color transition group-hover:duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Criamos o layout",
      description: "Transformamos a estratégia em uma direção visual.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 group-hover:text-primary-color transition group-hover:duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Você aprova",
      description: "Ajustamos os detalhes até a página fazer sentido.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 group-hover:text-primary-color transition group-hover:duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Publicamos",
      description: "Colocamos no ar e configuramos o SEO para busca.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 group-hover:text-primary-color transition group-hover:duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex flex-col  w-full gap-4 py-20 md:py-40 px-4 md:px-10 2xl:px-20">
      <div className="flex items-center flex-col gap-4 justify-center">
        <h2 className="text-3xl md:text-4xl  font-medium text-center ">
          <ShinyText
            text="Da ideia ao software pronto"
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

        <p className="max-w-4xl text-center text-xl hidden lg:block text-gray-500">
          Planejamos, desenvolvemos e entregamos soluções digitais sob medida,
          do primeiro conceito ao produto final. .
        </p>
      </div>

      <div className="max-w-7xl lg:mt-10   2xl:mx-auto  rounded-2xl ">
        <Swipper
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
            <span className="text-gray-200 text-3xl font-medium group-hover:text-primary-color transition group-hover:duration-300">
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>
            <div className="space-y-3">
              <h3 className="text-lg font-medium uppercase  group-hover:text-primary-color transition group-hover:duration-300">
                {step.title}
              </h3>
              <p className="text-sm font-light text-gray-600">
                {step.description}
              </p>
            </div>
            {step.icon}
          </div>
        </SwiperSlide>
      ))}
       </Swipper>
      </div>

    </section>
  );
}
