"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[80px] z-50 flex items-center justify-center bg-[#0D0D0D] transition-all duration-500 ${
          scrolled || !isHomePage
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle shadow-2xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1280px] px-5 md:px-10 lg:px-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-50 flex items-center"
            aria-label="Sonic Highways - Início"
          >
            <Image
              src="/images/logo/SH-logo-white.png"
              alt="Sonic Highways"
              width={586}
              height={332}
              priority
              className="w-auto h-[38px] md:h-[42px] object-contain"
            />
          </Link>

          {/* MENU DESKTOP */}
          {isHomePage ? (
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider-8 uppercase">
              <Link
                href="#inicio"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Início
              </Link>

              <Link
                href="#sobre"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Sobre
              </Link>

              <Link
                href="#videos"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Vídeos
              </Link>

              <Link
                href="#agenda"
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Agenda
              </Link>
            </nav>
          ) : (
            <Link
              href="/"
              className="hidden md:flex items-center gap-2 text-text-muted font-inter text-xs tracking-wider-5 uppercase hover:text-white transition-colors duration-300"
            >
              <span aria-hidden="true">←</span>
              Voltar ao início
            </Link>
          )}

          {/* BOTÃO MATERIAL PARA DIVULGAÇÃO */}
          <Link
            href="/imprensa"
            className="hidden md:inline-flex items-center justify-center h-11 px-6 border border-border-subtle text-xs tracking-wider-5 uppercase hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-300 font-semibold"
          >
            Material para Divulgação
          </Link>

          {/* BOTÃO MENU MOBILE */}
          <button
            className="md:hidden relative z-50 p-2 text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">

              <span
                className={`w-full h-[2px] bg-white transition-all duration-300 origin-left ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-x-[2px] -translate-y-[1px]"
                    : ""
                }`}
              ></span>

              <span
                className={`w-full h-[2px] bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : ""
                }`}
              ></span>

              <span
                className={`w-full h-[2px] bg-white transition-all duration-300 origin-left ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-x-[2px] translate-y-[1px]"
                    : ""
                }`}
              ></span>

            </div>
          </button>

        </div>
      </header>

      {/* OVERLAY MENU MOBILE */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-xl flex flex-col justify-between p-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >

        <nav className="flex flex-col gap-6 text-left mt-24">

          {/* NA IMPRENSA: VOLTAR PARA HOME */}
          {!isHomePage && (
            <Link
              href="/"
              onClick={closeMenu}
              className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
            >
              ← VOLTAR AO INÍCIO
            </Link>
          )}

          {/* MENU NORMAL DA HOME */}
          {isHomePage && (
            <>
              <Link
                href="/#inicio"
                onClick={closeMenu}
                className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
              >
                INÍCIO
              </Link>

              <Link
                href="/#sobre"
                onClick={closeMenu}
                className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
              >
                SOBRE
              </Link>

              <Link
                href="/#videos"
                onClick={closeMenu}
                className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
              >
                VÍDEOS
              </Link>

              <Link
                href="/#agenda"
                onClick={closeMenu}
                className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
              >
                AGENDA
              </Link>
            </>
          )}

          {/* NA PÁGINA DE IMPRENSA:
              mantém acesso às seções principais da Home */}
          {!isHomePage && (
            <>
              <Link
                href="/#sobre"
                onClick={closeMenu}
                className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
              >
                SOBRE
              </Link>

              <Link
                href="/#videos"
                onClick={closeMenu}
                className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
              >
                VÍDEOS
              </Link>

              <Link
                href="/#agenda"
                onClick={closeMenu}
                className="font-clash text-4xl text-white hover:text-brand-accent transition-colors"
              >
                AGENDA
              </Link>
            </>
          )}

          {/* MATERIAL PARA DIVULGAÇÃO */}
          <div className="pt-6 border-t border-border-subtle/50 mt-4">
            <Link
              href="/imprensa"
              onClick={closeMenu}
              className="inline-block w-full text-center py-4 bg-brand-accent text-white font-inter text-xs font-bold uppercase tracking-wider-5"
            >
              Material para Divulgação
            </Link>
          </div>

        </nav>

        {/* RODAPÉ MENU MOBILE */}
        <div className="pt-6 border-t border-border-subtle/50 flex items-center justify-between text-[10px] text-text-muted font-inter uppercase tracking-wider-5">

          <span>
            Sonic Highways © 2026
          </span>

          <a
            href="https://instagram.com/shrecife"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-accent"
          >
            Instagram
          </a>

        </div>

      </div>
    </>
  );
}