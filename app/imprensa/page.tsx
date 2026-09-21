"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Foto = {
  title: string;
  file: string;
  downloadName: string;
  meta: string;
};

export default function Imprensa() {
  const [fotoAtiva, setFotoAtiva] = useState<Foto | null>(null);

  const fotosOficiais: Foto[] = [
    {
      title: "Foto 01",
      file: "/press/Fotos/Foto01.png",
      downloadName: "Sonic-Highways-Foto01.png",
      meta: "1122 × 1402 px · Vertical · PNG",
    },
    {
      title: "Foto 02",
      file: "/press/Fotos/Foto02.png",
      downloadName: "Sonic-Highways-Foto02.png",
      meta: "1536 × 1024 px · Horizontal · PNG",
    },
    {
      title: "Foto 03",
      file: "/press/Fotos/Foto03.jpg",
      downloadName: "Sonic-Highways-Foto03.jpg",
      meta: "1361 × 2048 px · Vertical · JPG",
    },
    {
      title: "Foto 04",
      file: "/press/Fotos/Foto04.jpg",
      downloadName: "Sonic-Highways-Foto04.jpg",
      meta: "1509 × 2048 px · Vertical · JPG",
    },
  ];

  useEffect(() => {
    if (!fotoAtiva) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const fecharComEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFotoAtiva(null);
      }
    };

    window.addEventListener("keydown", fecharComEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", fecharComEsc);
    };
  }, [fotoAtiva]);

  return (
    <main className="relative min-h-screen w-full bg-bg-primary selection:bg-brand-accent selection:text-white flex flex-col justify-between">
      
      <Header />

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 pt-36 pb-24 flex-1">

        {/* CABEÇALHO */}
        <div className="mb-16 md:mb-20">
          <h1 className="font-clash text-5xl md:text-[80px] lg:text-[100px] text-white uppercase leading-none tracking-tight mb-6">
            MATERIAL
            <br />
            PARA DIVULGAÇÃO
          </h1>

          <p className="font-inter text-text-muted text-xs md:text-sm uppercase tracking-wider-5 max-w-lg border-l-2 border-brand-accent pl-4">
            Encontre aqui os materiais oficiais da Sonic Highways para
            divulgação, produção de eventos, contratantes e parceiros.
          </p>
        </div>

        {/* INFORMAÇÕES */}
        <section className="border-t border-border-subtle pt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* CONTATO */}
            <div>
              <h3 className="font-inter font-bold text-white text-sm uppercase tracking-wider-5 mb-5">
                Contato de Assessoria
              </h3>

              <div className="flex flex-col gap-1 text-sm font-inter">

                <p className="text-text-muted uppercase text-[10px] mb-1">
                  E-mail Corporativo:
                </p>

                <a
                  href="mailto:bandasonichighways@gmail.com"
                  className="text-white hover:text-brand-accent transition-colors"
                >
                  bandasonichighways@gmail.com
                </a>

                <p className="text-text-muted uppercase text-[10px] mt-5 mb-1">
                  Booking / Shows:
                </p>

                <a
                  href="tel:+5581900000000"
                  className="text-white hover:text-brand-accent transition-colors"
                >
                  +55 81 99685-7734
                </a>

              </div>
            </div>

            {/* REGRAS */}
            <div>
              <h3 className="font-inter font-bold text-white text-sm uppercase tracking-wider-5 mb-5">
                Regras de Uso da Marca
              </h3>

              <p className="font-inter text-text-muted text-xs leading-relaxed text-justify">
                As fotografias, o logotipo e os demais materiais disponíveis
                nesta área podem ser utilizados para fins de imprensa e
                divulgação da banda.
                <br />
                <br />
                Para preservar a identidade visual da Sonic Highways, pedimos
                que as imagens não sejam alteradas, distorcidas ou recebam
                filtros que comprometam sua composição original.
                <br />
                <br />
                Para outros formatos de uso ou adaptações, entre em contato
                com nossa assessoria.
              </p>
            </div>

          </div>
        </section>

        {/* ARQUIVOS */}
        <section className="mt-20 md:mt-24 border-t border-border-subtle pt-16">

          <div className="mb-8 md:mb-10">

            <h2 className="font-inter font-bold text-white text-sm uppercase tracking-wider-5 mb-4">
              Arquivos para Download
            </h2>

            <p className="font-inter text-text-muted text-xs md:text-sm leading-relaxed max-w-2xl">
              Visualize as fotografias oficiais antes de baixar. Os arquivos
              individuais são disponibilizados em sua resolução original.
            </p>

          </div>

          <div className="flex flex-col border-t border-border-subtle">

            {/* LOGOMARCAS */}
            <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-6 border-b border-border-subtle hover:bg-bg-surface/80 transition-all duration-300 px-4 -mx-4">

              <div className="flex items-start gap-5 min-w-0">

                <div className="w-10 h-10 bg-[#0D0D0D] border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors duration-300">
                  <span className="text-white text-lg font-bold">
                    ↓
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="font-inter text-white font-medium text-sm md:text-base">
                    Logomarcas Oficiais
                  </h3>

                  <p className="font-inter text-text-muted text-[11px] leading-relaxed mt-1">
                    Versões branca e preta da identidade visual da Sonic Highways.
                  </p>

                  <p className="font-inter text-text-muted text-[10px] uppercase tracking-wider-5 mt-2">
                    ZIP · LOGOS BRANCA + PRETA
                  </p>
                </div>

              </div>

              <a
                href="/press/Logos.zip"
                download="Sonic-Highways-Logos.zip"
                className="w-full sm:w-auto min-h-11 px-5 flex items-center justify-center border border-border-subtle text-white font-inter text-[10px] md:text-xs font-bold uppercase tracking-wider-5 hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shrink-0"
              >
                ↓ Baixar ZIP
              </a>

            </div>

            {/* FOTOS ZIP */}
            <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-6 border-b border-border-subtle hover:bg-bg-surface/80 transition-all duration-300 px-4 -mx-4">

              <div className="flex items-start gap-5 min-w-0">

                <div className="w-10 h-10 bg-[#0D0D0D] border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors duration-300">
                  <span className="text-white text-lg font-bold">
                    ↓
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="font-inter text-white font-medium text-sm md:text-base">
                    Fotos Oficiais - Pacote Completo
                  </h3>

                  <p className="font-inter text-text-muted text-[11px] leading-relaxed mt-1">
                    Pacote com quatro fotografias oficiais em alta resolução.
                  </p>

                  <p className="font-inter text-text-muted text-[10px] uppercase tracking-wider-5 mt-2">
                    ZIP · 4 FOTOS HIGH-RES
                  </p>
                </div>

              </div>

              <a
                href="/press/Fotos.zip"
                download="Sonic-Highways-Fotos-Oficiais.zip"
                className="w-full sm:w-auto min-h-11 px-5 flex items-center justify-center border border-border-subtle text-white font-inter text-[10px] md:text-xs font-bold uppercase tracking-wider-5 hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shrink-0"
              >
                ↓ Baixar ZIP
              </a>

            </div>

            {/* FOTOS INDIVIDUAIS */}
            {fotosOficiais.map((foto, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row md:items-center md:justify-between gap-5 py-6 border-b border-border-subtle hover:bg-bg-surface/80 transition-all duration-300 px-4 -mx-4"
              >

                <div className="flex items-start gap-5 min-w-0">

                  <div className="w-10 h-10 bg-[#0D0D0D] border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-white transition-colors duration-300">
                    <span className="text-white text-sm">
                      ⤢
                    </span>
                  </div>

                  <div className="min-w-0">

                    <h3 className="font-inter text-white font-medium text-sm md:text-base">
                      {foto.title}
                    </h3>

                    <p className="font-inter text-text-muted text-[10px] md:text-xs uppercase tracking-wider-5 mt-2">
                      {foto.meta}
                    </p>

                  </div>

                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:shrink-0">

                  {/* VISUALIZAR */}
                  <button
                    type="button"
                    onClick={() => setFotoAtiva(foto)}
                    className="w-full sm:w-auto min-h-11 px-5 border border-border-subtle font-inter text-white text-[10px] md:text-xs font-bold uppercase tracking-wider-5 hover:bg-white hover:text-bg-primary hover:border-white transition-all duration-300"
                  >
                    Visualizar
                  </button>

                  {/* BAIXAR */}
                  <a
                    href={foto.file}
                    download={foto.downloadName}
                    className="w-full sm:w-auto min-h-11 px-5 flex items-center justify-center bg-brand-accent text-white font-inter text-[10px] md:text-xs font-bold uppercase tracking-wider-5 hover:bg-brand-hover transition-all duration-300"
                  >
                    ↓ Baixar
                  </a>

                </div>

              </div>
            ))}

          </div>
        </section>

      </div>

      <Footer />

      {/* MODAL DE VISUALIZAÇÃO */}
      {fotoAtiva && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização de ${fotoAtiva.title}`}
          onClick={() => setFotoAtiva(null)}
        >

          {/* BOTÃO FECHAR */}
          <button
            type="button"
            onClick={() => setFotoAtiva(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] w-11 h-11 flex items-center justify-center border border-white/20 text-white text-2xl hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Fechar visualização"
          >
            ✕
          </button>

          {/* CONTEÚDO */}
          <div
            className="w-full max-w-6xl flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >

            {/* IMAGEM */}
            <div className="relative w-full h-[58dvh] sm:h-[65dvh] md:h-[72dvh]">

              <Image
                src={fotoAtiva.file}
                alt={`Sonic Highways — ${fotoAtiva.title}`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />

            </div>

            {/* RODAPÉ DO MODAL */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t border-white/15 pt-5 mt-4">

              <div>
                <h3 className="font-inter text-white text-base md:text-lg font-semibold">
                  {fotoAtiva.title}
                </h3>

                <p className="font-inter text-text-muted text-[10px] md:text-xs uppercase tracking-wider-5 mt-1">
                  {fotoAtiva.meta}
                </p>
              </div>

              <a
                href={fotoAtiva.file}
                download={fotoAtiva.downloadName}
                className="w-full md:w-auto min-h-11 px-6 flex items-center justify-center bg-brand-accent text-white font-inter text-[10px] md:text-xs font-bold uppercase tracking-wider-5 hover:bg-brand-hover transition-all duration-300"
              >
                ↓ Baixar em alta resolução
              </a>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}