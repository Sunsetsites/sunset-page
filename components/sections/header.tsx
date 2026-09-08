"use client";

import { ArrowUpRight } from "lucide-react";
import StaggeredMenu from "@/components/StaggeredMenu";

const links = [
  { label: "Início", ariaLabel: "Ir para o início", link: "#grid" },
  { label: "Serviços", ariaLabel: "Conhecer soluções", link: "#servicos" },
  { label: "Etapas", ariaLabel: "Conhecer nosso processo", link: "#processo" },
  { label: "Dúvidas", ariaLabel: "Ver dúvidas frequentes", link: "#faq" },
  { label: "Contato", ariaLabel: "Começar um projeto", link: "#contato" },
];

export function Header() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50  hidden border-b border-black/8  text-[#171719]  backdrop-blur-xl lg:block">
        <div className="mx-auto max-w-[1600px] flex h-20 w-full items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
          <a href="#grid" className="group flex items-center gap-3 text-sm font-semibold tracking-tight">
            <img
              src="/logo.png"
              alt=""
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-12"
              width={32}
              height={32}
            />
            <span className="text-sm capitalize tracking-widest">
              sunset<span className="text-[#ff6b4a]">.</span>
            </span>
          </a>

          <nav className="flex items-center gap-6 font-sans" aria-label="Navegação principal">
            {links.map((link, index) => (
              <a
                key={link.link}
                href={link.link}
                className="group flex items-center gap-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.12em] text-[#171719]/55 transition-colors hover:text-[#171719]"
              >
                <span className="text-[9px] text-[#ff6b4a]/80">0{index + 1}</span>
                {link.label}
                <span className="h-px w-0 bg-[#ff6b4a] transition-all duration-300 group-hover:w-3" />
              </a>
            ))}
          </nav>

          <button className="text-sm  bg-primary-color  text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 flex items-center gap-2 justify-center cursor-pointer hover:shadow-2xl">
            Comece seu projeto
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="lg:hidden">
        <StaggeredMenu
          position="right"
          items={links}
          socialItems={[
            { label: "Instagram", link: "https://instagram.com" },
            { label: "LinkedIn", link: "https://linkedin.com" },
          ]}
          displaySocials
          displayItemNumbering
          isFixed={true}
          menuButtonColor="#171719"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen
          colors={["#ff6b4a", "#171719"]}
          logoUrl="/logo.png"
          accentColor="#ff6b4a"
        />
      </div>
    </>
  );
}