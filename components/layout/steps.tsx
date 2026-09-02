import ShinyText from "../ui/shiny-text";

export default function Steps() {
  return (
    <section className="flex flex-col  w-full gap-4 py-20 md:py-40 px-4 md:px-10 2xl:px-20">
      <div className="flex items-center gap-20 justify-center md:justify-start">
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
        <hr className="hidden md:flex-1 border-black/10"></hr>
      </div>
      <p className=" max-w-4xl text-justify text-xl hidden lg:block">
        Planejamos, desenvolvemos e entregamos soluções digitais sob medida, do
        primeiro conceito ao produto final. .
      </p>

      <div className="lg:mt-30 mt-15 grid md:grid-cols-2 2xl:grid-cols-4   2xl:mx-auto  rounded-2xl ">
        <div className="flex h-full flex-col justify-between gap-10 border-b lg:border-b-0  border-r border-gray-200 p-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-color text-sm font-semibold text-white">
            01
          </span>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Você explica</h3>
            <p className="text-sm font-light text-gray-400">
              Conversamos sobre seu negócio, objetivos e clientes.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-auto h-6 w-6 text-gray-400"
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
        </div>

        <div className="flex h-full flex-col justify-between gap-10 border-b lg:border-b-0 border-r border-gray-200 p-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-color text-sm font-semibold text-white">
            02
          </span>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Criamos o layout</h3>
            <p className="text-sm font-light text-gray-400">
              Transformamos a estratégia em uma direção visual.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-auto h-6 w-6 text-gray-400"
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
        </div>

        <div className="flex h-full flex-col justify-between gap-10 border-b lg:border-b-0 border-r border-gray-100 p-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-color text-sm font-semibold text-white">
            03
          </span>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Você aprova</h3>
            <p className="text-sm font-light text-gray-400">
              Ajustamos os detalhes até a página fazer sentido.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-auto h-6 w-6 text-gray-400"
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
        </div>

        <div className="flex h-full flex-col justify-between gap-10 p-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-b lg:border-b-0 border-gray-100  bg-primary-color text-sm font-semibold text-white">
            04
          </span>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Publicamos</h3>
            <p className="text-sm font-light text-gray-400">
              Colocamos no ar e configuramos o SEO para busca.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-auto h-6 w-6 text-gray-400"
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
        </div>
      </div>
    </section>
  );
}
