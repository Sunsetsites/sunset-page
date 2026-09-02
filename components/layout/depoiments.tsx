import ShinyText from "../ui/shiny-text";
import SpotlightCard from "../ui/SpotlightCard";
import Threads from "../ui/Threads";

export function Depoiments() {
  return (
    <div className="relative overflow-hidden bg-black [clip-path:polygon(0_0,45%_0,60%_80px,100%_80px,100%_100%,0_100%)] text-white pt-40 pb-20  flex flex-col lg:flex-row justify-between mt-20 px-4 md:px-10 lg:px-30 relative">
      <div className="relative z-10 flex gap-12  flex-col w-full  lg:max-w-2xl">
        <h2 className="text-4xl lg:text-6xl w-full  lg:max-w-2xl lg:leading-18 font-medium">
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
        <hr className="border-white/10"></hr>

        <p className="text-gray-400 max-w-2xl hidden lg:block">
          A experiência de quem confiou em nosso trabalho para transformar
          ideias em soluções digitais. Histórias reais de clientes que
          encontraram na tecnologia uma forma de evoluir seus processos,
          fortalecer seus negócios e alcançar novos resultados.
        </p>
      </div>

      <div className="relative z-10 ml-auto flex w-full lg:max-w-lg flex-col gap-6">
        <SpotlightCard
          className="group rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:border-white/20"
          spotlightColor="rgba(255, 255, 255, 0.12)"
        >
          <div className="flex flex-col gap-3">
            <span className="text-4xl leading-none text-white/20">“</span>

            <p className="text-base leading-7 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              voluptates ipsa animi fugit aliquid nihil.
            </p>

            <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                MS
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-white">Mirian Samara</p>

                <p className="text-xs text-gray-500">CEO · MS STUDIO</p>
              </div>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="group rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:border-white/20"
          spotlightColor="rgba(255, 255, 255, 0.12)"
        >
          <div className="flex flex-col gap-3">
            <span className="text-4xl leading-none text-white/20">“</span>

            <p className="text-base leading-7 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              voluptates ipsa animi fugit aliquid nihil.
            </p>

            <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                MS
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-white">Mirian Samara</p>

                <p className="text-xs text-gray-500">CEO · MS STUDIO</p>
              </div>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="group rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:border-white/20"
          spotlightColor="rgba(255, 255, 255, 0.12)"
        >
          <div className="flex flex-col gap-3">
            <span className="text-4xl leading-none text-white/20">“</span>

            <p className="text-base leading-7 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              voluptates ipsa animi fugit aliquid nihil.
            </p>

            <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                MS
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-white">Mirian Samara</p>

                <p className="text-xs text-gray-500">CEO · MS STUDIO</p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
     
    </div>
  );
}
