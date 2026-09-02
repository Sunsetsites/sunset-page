import DecryptedText from "@/components/ui/descript-text";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";

export function Hero(){
     const [count, setCount] = useState(0);

  const tecnologias = [
    { nome: "React", icone: "react/61DAFB" },
    { nome: "Next.js", icone: "nextdotjs/000000" },
    { nome: "Laravel", icone: "laravel/FF2D20" },
    { nome: "Node.js", icone: "nodedotjs/339933" },
    { nome: "TypeScript", icone: "typescript/3178C6" },
    { nome: "Tailwind", icone: "tailwindcss/06B6D4" },
    { nome: "MySQL", icone: "mysql/4479A1" },
    { nome: "Docker", icone: "docker/2496ED" },
    {nome:" php", icone:"php/777BB4"},
    { nome: "Git", icone: "git/F05032" },
  ];

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(prev=>(prev+1)%tecnologias.length)
    }, 2000)
    return () => clearInterval(interval)
  },[])


  const gridRef = useRef<HTMLElement>(null);

  function handleGridMouseMove(event: MouseEvent<HTMLElement>) {
    const grid = gridRef.current;
    if (!grid) return;

    const bounds = grid.getBoundingClientRect();
    grid.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    grid.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  }
    return(
         <section
        className="flex items-center justify-center h-screen"
        id="grid"
        ref={gridRef}
        onMouseMove={handleGridMouseMove}
      >
        <div className="hero-glow" aria-hidden="true" />

        <div className="relative z-[1] flex flex-col items-center justify-center gap-10">
          <p className="uppercase tracking-widest 2 ml-2 text-center text-sm ">
            <DecryptedText
              text="DIGITAL INNOVATION"
              speed={100}
              maxIterations={10}
              characters="IDGITALINNOVATION"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              sequential={true}
              animateOn="view"
            />
          </p>
          <h1 className="text-6xl uppercase max-w-6xl leading-20 text-center ">
            Soluções digitais para negócios modernos.
          </h1>
          <p className="text-base max-w-3xl text-center  text-gray-700">
            Criamos softwares, aplicativos e experiências digitais sob medida
            para empresas que buscam inovação, eficiência e crescimento em um
            mundo cada vez mais conectado. .
          </p>
          <div className="flex items-center justify-center gap-10 mt-4  text-sm">
            <button className="p-3 px-4 bg-primary-color text-white rounded-md font-medium cursor-pointer hover:shadow-2xl  transition-all duration-300">
              Comece seu projeto
            </button>
            <button className="font-medium cursor-pointer border border-gray-400 hover:bg-primary-color hover:text-white transition-all duration-200 ease-in p-3 px-4 rounded-md hover:shadow-2xl ">
              Soluções sob medida
            </button>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm">
          
          <img
            src={`https://cdn.simpleicons.org/${tecnologias[count].icone}`}
            alt={`Ícone do ${tecnologias[count].nome}`}
            className="h-7 w-7"
          />
          <span>
            {tecnologias[count].nome}
          </span>
           <p className="text-gray-700">tecnologia utilizada em nossos projetos</p>
        </div>

        <div className="absolute bottom-6 right-6 z-[1] hidden items-center gap-3 text-[10px] tracking-[0.25em] text-gray-500 md:flex">
          <span>Scroll to explore</span>
          <span className="h-8 w-px bg-gray-400" />
        </div>
      </section>
    )
}
