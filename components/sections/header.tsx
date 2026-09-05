"use client";

import { Menu, UserRound, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Soluções", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "IA neural", href: "#ia" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-black/10 bg-white text-[#171719] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-full  items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#grid"
          className="flex items-center gap-3 text-sm font-semibold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          
          <span className="text-base tracking-[-0.03em]">sunset</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#171719]/60 transition-colors hover:text-[#ff6b4a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden h-11 items-center gap-2 rounded-full border border-black/20 px-6 text-[11px] font-bold uppercase tracking-tight transition-colors hover:border-[#ff6b4a] hover:bg-[#ff6b4a] hover:text-white sm:flex"
        >
          Contratar equipe
          <UserRound size={15} strokeWidth={1.6} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-black/20 text-[#171719] lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-black/10 bg-white px-5 py-5 lg:hidden" aria-label="Navegação mobile">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#171719]/70 hover:text-[#ff6b4a]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#171719]"
              onClick={() => setMenuOpen(false)}
            >
              Contratar equipe
              <UserRound size={15} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}