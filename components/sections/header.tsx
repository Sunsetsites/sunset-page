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
      <header className="absolute inset-x-0 top-0 z-50 hidden border-b border-black/8 bg-white/85 font-display text-[#171719] shadow-[0_12px_40px_rgba(20,20,20,0.04)] backdrop-blur-xl lg:block">
        <div className="mx-auto flex h-19 w-full items-center justify-between px-5 sm:px-8 lg:px-12">
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

          <nav className="flex items-center gap-7" aria-label="Navegação principal">
            {links.map((link, index) => (
              <a
                key={link.link}
                href={link.link}
                className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#171719]/55 transition-colors hover:text-[#171719]"
              >
                <span className="text-[9px] text-[#ff6b4a]/80">0{index + 1}</span>
                {link.label}
                <span className="h-px w-0 bg-[#ff6b4a] transition-all duration-300 group-hover:w-3" />
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#171719] px-5 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b4a] hover:shadow-[0_10px_24px_rgba(255,107,74,0.2)]"
          >
            Começar meu projeto
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </a>
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
          openMenuButtonColor="#171719"
          changeMenuColorOnOpen
          colors={["#ff6b4a", "#171719"]}
          logoUrl="/logo.png"
          accentColor="#ff6b4a"
        />
      </div>
    </>
  );
}