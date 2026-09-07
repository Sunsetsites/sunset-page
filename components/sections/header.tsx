"use client";

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
      logoUrl="/sunset-logo.svg"
      accentColor="#ff6b4a"
    />
  );
}