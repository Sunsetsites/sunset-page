import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { projectWhatsAppLink } from "@/lib/contact";

export function Hero() {
  const gridRef = useRef<HTMLElement>(null);

  function handleGridMouseMove(event: MouseEvent<HTMLElement>) {
    const grid = gridRef.current;
    if (!grid) return;

    const bounds = grid.getBoundingClientRect();
    grid.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    grid.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  }
  return (
    <section
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-2 pb-16 pt-28 sm:px-8 md:pb-20 md:pt-32"
      id="grid"
      ref={gridRef}
      onMouseMove={handleGridMouseMove}
    >
      <div  aria-hidden="true" />

      <div className="relative flex w-full max-w-4xl flex-col  gap-6 md:gap-12 text-center  justify-center items-center">
        <p className="text-[10px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-widest">
          <span className="text-[#ff6b4a]">{"{"}</span>{" DIGITAL INNOVATION "}<span className="text-[#ff6b4a]">{"}"}</span>
        </p>
        <h1 className="md:max-w-4xl   uppercase leading-10 text-3xl  md:text-5xl md:leading-16">
          Seu negócio merece uma presença digital à altura.
        </h1>

  
        <p className="text-center max-w-2xl px-2 text-sm leading-6 text-gray-700 sm:px-6 sm:text-base sm:leading-7">
         Sistemas sob medida para empresas que precisam vender melhor,automatizar processos ou lançar uma nova operação digital
        </p>
        <div className="flex-col mt-2 flex w-full items-center justify-center text-sm sm:mt-4 gap-4 md:flex-row md:gap-10">
          <a href={projectWhatsAppLink} className="inline-flex min-h-12 w-full max-w-xs cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-color px-5 py-3 font-medium text-white transition-all duration-300 hover:shadow-2xl sm:w-auto ">
            Comece seu projeto
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <button className="inline-flex  cursor-pointer items-center gap-2  p-3 px-4 font-medium text-gray-400 transition-all duration-200 ease-in  hover:text-primary-color">
            Soluções sob medida
          
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm">
          
          <img
            src={`https://cdn.simpleicons.org/${tecnologias[count].icone}`}
            alt={`Ícone do ${tecnologias[count].nome}`}
            className="h-7 w-7"
          />
          <span>
            {tecnologias[count].nome}
          </span>
           <p className="text-gray-700">tecnologia utilizada em nossos projetos</p>
        </div> */}

      <div className="absolute bottom-6 right-6 z-1 hidden items-center gap-3 text-[10px] tracking-[0.25em] text-gray-500 md:flex">
        <span>Scroll to explore</span>
        <span className="h-8 w-px bg-gray-400" />
      </div>

     

    </section>
  );
}
