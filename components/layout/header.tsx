export function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center justify-between bg-white px-6 py-6 md:px-40 border-b border-gray-100   ">
      <a href="#grid" className="text-lg font-semibold tracking-[0.2em]">
        SUNSET
      </a>

      <nav
        className="hidden items-center gap-8 text-sm md:flex"
        aria-label="Navegação principal"
      >
        <a
          href="#servicos"
          className="hover:text-primary-color text-gray-700 hover:font-medium"
        >
          Serviços
        </a>
        <a
          href="#sobre"
          className="hover:text-primary-color text-gray-700 hover:font-medium"
        >
          Sobre nós
        </a>
        <a
          href="#tecnologias"
          className="hover:text-primary-color text-gray-700 hover:font-medium"
        >
          Tecnologias
        </a>
      </nav>

      <a
        href="#contato"
        className="rounded-md border border-black px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-color hover:text-white"
      >
        Fale conosco
      </a>
    </header>
  );
}
