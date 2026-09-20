"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeShow, setActiveShow] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState("SEU_ID_DO_VIDEO_1");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [galeriaAberta, setGaleriaAberta] = useState(false);
  const [agora, setAgora] = useState<Date | null>(null);

  /* =========================
     DATA / AGENDA
     ========================= */

  useEffect(() => {
    const atualizarData = () => setAgora(new Date());

    atualizarData();

    const intervalo = window.setInterval(atualizarData, 60000);

    return () => window.clearInterval(intervalo);
  }, []);

  /* =========================
     MODAIS / GALERIA
     ========================= */

  useEffect(() => {
    const algumModalAberto =
      galeriaAberta || lightboxImg !== null;

    if (!algumModalAberto) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxImg) {
          setLightboxImg(null);
        } else if (galeriaAberta) {
          setGaleriaAberta(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galeriaAberta, lightboxImg]);

  /* =========================
     MEMBROS
     ========================= */

  const membros = [
    {
      nome: "Lucas Oliveira",
      funcao: "Vocalista",
      img: "/images/band/Lucas1.png",
    },
    {
      nome: "Geraldo Manoel",
      funcao: "Guitarrista",
      img: "/images/band/Geraldo1.png",
    },
    {
      nome: "Ynara Ferreira",
      funcao: "Guitarrista",
      img: "/images/band/Ynara2.jpeg",
    },
    {
      nome: "Ícaro Sales",
      funcao: "Baixista",
      img: "/images/band/Icaro1.png",
    },
    {
      nome: "Dimitri Silveira",
      funcao: "Baterista",
      img: "/images/band/Dimitri1.png",
    },
  ];

  /* =========================
     SHOWS
     ========================= */

  const shows = [
    {
      data: "04 SET",
      dateTime: "2026-09-04T23:59:59-03:00",
      local: "Darkside Studio - Recife/PE",
      info: "Início às 19h. Ingressos na portaria.",
    },
    {
      data: "26 SET",
      dateTime: "2026-09-26T23:59:59-03:00",
      local: "Oficina Rock Café (Ruptura Fest)",
      info: "Início às 19h. Sujeito a lotação.",
    },
    {
      data: "10 OUT",
      dateTime: "2026-10-10T23:59:59-03:00",
      local: "Moto Club - Ferreiros/PE",
      info: "Entrada franca para motociclistas.",
    },
  ];

  const showsOrdenados = [...shows].sort(
    (a, b) =>
      new Date(a.dateTime).getTime() -
      new Date(b.dateTime).getTime()
  );

  const showsPassados = agora
    ? showsOrdenados
        .filter((show) => new Date(show.dateTime) < agora)
        .slice(-2)
    : [];

  const showsFuturos = agora
    ? showsOrdenados.filter(
        (show) => new Date(show.dateTime) >= agora
      )
    : showsOrdenados;

  const showsExibidos = [
    ...showsPassados,
    ...showsFuturos,
  ];

  /* =========================
     VÍDEOS
     ========================= */

  const playlist = [
    {
      id: "SEU_ID_DO_VIDEO_1",
      thumb: "/images/gallery/thumb-1.jpg",
    },
    {
      id: "SEU_ID_DO_VIDEO_2",
      thumb: "/images/gallery/thumb-2.jpg",
    },
    {
      id: "SEU_ID_DO_VIDEO_3",
      thumb: "/images/gallery/thumb-3.jpg",
    },
  ];

  /* =========================
     GALERIA
     ========================= */

const galeria = [
  "/images/gallery/sh1.jpg",
  "/images/gallery/sh2.png",
  "/images/gallery/sh3.png",
  "/images/gallery/sh4.jpg",
  "/images/gallery/sh5.jpg",
  "/images/gallery/sh6.jpg",
  "/images/gallery/sh7.png",
  "/images/gallery/sh8.png",
  "/images/gallery/sh9.png",
  "/images/gallery/sh10.png",
  "/images/gallery/sh11.png",
  "/images/gallery/sh12.png",
  "/images/gallery/sh13.jpg",
  "/images/gallery/sh14.jpg",
  "/images/gallery/sh15.jpg",
  "/images/gallery/sh16.jpg",
  "/images/gallery/sh17.jpg",
  "/images/gallery/sh18.jpg",
  "/images/gallery/sh19.jpg",
  "/images/gallery/sh20.jpg",
];

const galeriaDestaque = galeria.slice(0, 6);

  return (
    <main className="relative w-full bg-bg-primary text-text-primary selection:bg-brand-accent selection:text-white">

      <Header />

      {/* =========================
          HERO SECTION
          ========================= */}

      <section
        id="inicio"
        className="
          relative
          w-full
          min-h-[100dvh]
          flex
          flex-col
          overflow-hidden
          bg-bg-primary

          md:justify-end
          md:pb-24
          md:px-10
          lg:px-20
        "
      >

        {/* FOTO */}
        <div
          className="
            relative
            w-full
            aspect-[4/5]
            shrink-0

            md:absolute
            md:inset-0
            md:w-full
            md:h-full
            md:aspect-auto
          "
        >
          <picture className="absolute inset-0 w-full h-full">

            <source
              media="(max-width: 767px)"
              srcSet="/images/hero/SH-mobile.png"
            />

            <source
              media="(min-width: 768px)"
              srcSet="/images/hero/SH-desktop.png"
            />

            <img
              src="/images/hero/SH-desktop.png"
              alt="Banda Sonic Highways"
              className="
                w-full
                h-full
                object-cover
                object-center
              "
              fetchPriority="high"
            />

          </picture>

          {/* GRADIENTE */}
          <div
            className="
              absolute
              inset-0
              z-10
              pointer-events-none

              bg-gradient-to-t
              from-bg-primary
              via-bg-primary/50
              to-bg-primary/40
            "
          ></div>

          {/* LOGO MOBILE */}
          <Image
            src="/images/logo/SH-logo-white.png"
            alt=""
            aria-hidden="true"
            width={586}
            height={332}
            priority
            className="
              md:hidden
              absolute
              z-20

              left-5
              bottom-[clamp(0.75rem,4vw,1.5rem)]

              w-[clamp(190px,55vw,230px)]
              h-auto

              pointer-events-none
              drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]
            "
          />

        </div>

        {/* CONTEÚDO */}
        <div
          className="
            relative
            z-20
            w-full
            max-w-[1280px]
            mx-auto

            flex-1
            flex
            flex-col
            justify-center

            px-5
            py-[clamp(1.75rem,5dvh,3.5rem)]

            md:flex-none
            md:px-0
            md:py-0
          "
        >

          {/* LOGO DESKTOP */}
          <Image
            src="/images/logo/SH-logo-white.png"
            alt="Sonic Highways"
            width={586}
            height={332}
            priority
            className="
              hidden
              md:block

              md:w-[430px]
              lg:w-[520px]

              h-auto
              mb-4

              drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]
            "
          />

          {/* SUBTÍTULO */}
          <div className="flex items-center gap-4 mb-8">

            <p className="font-inter text-text-muted text-xs md:text-sm tracking-wider-5 uppercase font-medium">
              Grunge 90s - Recife PE
            </p>

            <div className="h-[1px] w-12 bg-brand-accent"></div>

          </div>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row items-center gap-4">

            <a
              href="#videos"
              className="
                w-full
                sm:w-auto
                h-13
                px-8

                bg-brand-accent
                text-white

                text-xs
                md:text-sm
                font-bold

                tracking-wider-5
                uppercase

                hover:bg-brand-hover

                transition-all
                duration-300

                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span>▶</span>
              Assistir Vídeos
            </a>

            <a
              href="#agenda"
              className="
                w-full
                sm:w-auto
                h-13
                px-8

                bg-[#0D0D0D]/60
                backdrop-blur-md

                text-white
                text-xs
                md:text-sm
                font-semibold

                tracking-wider-5
                uppercase

                border
                border-border-subtle

                hover:bg-white
                hover:text-bg-primary

                transition-all
                duration-300

                flex
                items-center
                justify-center
              "
            >
              Agenda de Shows
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          SEÇÃO SOBRE
          ========================= */}

      <section
        id="sobre"
        className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 py-24 flex flex-col items-center"
      >

        <h2 className="font-clash text-4xl sm:text-5xl md:text-7xl text-center text-white uppercase mb-16 max-w-4xl leading-[1.1]">
          Reverberating the 90s.
          <br />
          Building the next decade.
        </h2>

        <div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 gap-4">

          {membros.map((membro, i) => (
            <div
              key={i}
              className={`
                group
                relative

                col-span-2
                md:col-span-1

                ${
                  i === 4
                    ? "col-start-2 sm:col-start-auto md:col-start-auto"
                    : ""
                }

                w-full
                aspect-[3/4]

                bg-bg-surface
                overflow-hidden

                border
                border-border-subtle

                flex
                flex-col
                justify-end

                p-4

                transform-gpu
                transition-all
                duration-500
                ease-out

                hover:-translate-y-2
                hover:border-white
                hover:shadow-2xl
              `}
            >

              {/* FOTO */}
              <Image
                src={membro.img}
                alt={membro.nome}
                fill
                sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, 20vw"
                className="
                  object-cover
                  opacity-90

                  transform-gpu
                  transition-all
                  duration-700
                  ease-out

                  group-hover:scale-105
                  group-hover:opacity-100
                "
              />

              {/* GRADIENTE */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/90
                  via-black/25
                  to-transparent

                  transition-all
                  duration-500

                  group-hover:from-black/95
                  group-hover:via-black/35
                "
              ></div>

              {/* NOME + INSTRUMENTO */}
              <div
                className="
                  relative
                  z-10
                  p-2

                  transform-gpu
                  transition-transform
                  duration-500
                  ease-out

                  group-hover:-translate-y-1
                "
              >

                <h3 className="font-clash text-xl md:text-2xl text-white leading-tight">
                  {membro.nome}
                </h3>

                <p className="font-inter text-brand-accent font-bold text-[10px] md:text-xs uppercase tracking-wider-5 mt-1">
                  {membro.funcao}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =========================
          SEÇÃO VÍDEOS
          ========================= */}

      <section
        id="videos"
        className="w-full bg-[#0D0D0D] py-24 border-t border-border-subtle"
      >

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-4 flex flex-col justify-center">

            <h3 className="text-brand-accent font-inter text-sm font-bold tracking-wider-8 uppercase mb-2"></h3>

            <h2 className="text-white font-clash text-5xl md:text-6xl uppercase mb-6">
              Vídeos
            </h2>

            <p className="font-inter text-text-muted text-sm leading-relaxed mb-8">
              Confira nossas últimas apresentações e sessões de estúdio.
            </p>

            {/* THUMBNAILS */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">

              {playlist.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setActiveVideo(video.id)}
                  className={`
                    relative
                    shrink-0
                    w-32
                    aspect-video

                    bg-bg-surface

                    border-2

                    transition-all
                    overflow-hidden
                    snap-center

                    ${
                      activeVideo === video.id
                        ? "border-brand-accent"
                        : "border-border-subtle hover:border-white"
                    }
                  `}
                >

                  <Image
                    src={video.thumb}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />

                  {activeVideo === video.id && (
                    <div className="absolute inset-0 bg-brand-accent/20 flex items-center justify-center text-white text-xs">
                      ▶
                    </div>
                  )}

                </button>
              ))}

            </div>

          </div>

          <div className="lg:col-span-8 w-full aspect-video bg-bg-surface border border-border-subtle relative overflow-hidden shadow-2xl">

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=0&rel=0`}
              title="Sonic Highways Video Player"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      {/* =========================
          SEÇÃO AGENDA
          ========================= */}

      <section
        id="agenda"
        className="w-full bg-bg-surface py-24 border-t border-border-subtle"
      >

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 max-w-4xl">

          <div className="text-center mb-16">

            <h2 className="text-white font-clash text-5xl md:text-6xl uppercase mb-4">
              Agenda 2026
            </h2>

            <p className="font-inter text-text-muted text-sm uppercase tracking-wider-5">
              Próximos Shows Confirmados
            </p>

          </div>

          <div className="flex flex-col border-t border-border-subtle">

            {showsExibidos.map((show, i) => {
              const realizado =
                agora !== null &&
                new Date(show.dateTime) < agora;

              return (
                <div
                  key={show.dateTime}
                  className="flex flex-col border-b border-border-subtle group"
                >

                  <div
                    className={`flex flex-col sm:flex-row sm:items-center justify-between py-6 px-4 transition-colors ${
                      realizado
                        ? "cursor-default"
                        : "cursor-pointer hover:bg-[#202020]"
                    }`}
                    onClick={() => {
                      if (!realizado) {
                        setActiveShow(
                          activeShow === i ? null : i
                        );
                      }
                    }}
                  >

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mb-4 sm:mb-0 w-full items-start sm:items-center">

                      <div
                        className={`w-24 font-inter text-brand-accent text-lg font-bold uppercase ${
                          realizado
                            ? "opacity-50 line-through decoration-1"
                            : ""
                        }`}
                      >
                        {show.data}
                      </div>

                      <div
                        className={`flex-1 font-inter text-white text-sm md:text-base uppercase font-medium ${
                          realizado
                            ? "opacity-50 line-through decoration-1"
                            : ""
                        }`}
                      >
                        {show.local}
                      </div>

                    </div>

                    {realizado ? (
                      <button
                        disabled
                        className="shrink-0 border border-border-subtle text-text-muted text-[10px] tracking-wider-5 uppercase px-6 py-3 transition-all duration-300 w-fit opacity-60 cursor-default"
                      >
                        Realizado
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="shrink-0 border border-border-subtle text-white text-[10px] tracking-wider-5 uppercase px-6 py-3 md:group-hover:bg-white md:group-hover:text-bg-primary transition-all duration-300 w-fit"
                      >
                        {activeShow === i
                          ? "Fechar"
                          : "Detalhes"}
                      </button>
                    )}

                  </div>

                  {!realizado && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeShow === i
                          ? "max-h-40 opacity-100 py-4 px-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >

                      <p className="text-text-muted text-sm font-inter border-l-2 border-brand-accent pl-4">
                        {show.info}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

          <div className="mt-12 flex justify-center">

            <a
              href="mailto:bandasonichighways@gmail.com"
              className="text-white font-inter text-xs border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors uppercase tracking-wider-5"
            >
              Leve a banda para o seu evento
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          SEÇÃO GALERIA
          ========================= */}

      <section className="w-full bg-[#0D0D0D] py-24 border-t border-border-subtle">

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">

          {/* CABEÇALHO */}
          <div className="flex justify-between items-end gap-6 mb-10">

            <div>

              <h2 className="text-white font-clash text-5xl md:text-6xl uppercase">
                Galeria
              </h2>

              <p className="font-inter text-text-muted text-xs md:text-sm mt-3">
                Registros da Sonic Highways em shows, ensaios e bastidores.
              </p>

            </div>

            <a
              href="https://instagram.com/shrecife"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block shrink-0 text-brand-accent font-inter text-xs font-bold uppercase tracking-wider-5 hover:text-white transition-colors"
            >
              Ver mais no Instagram ↗
            </a>

          </div>

          {/* 6 FOTOS EM DESTAQUE */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">

            {galeriaDestaque.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setLightboxImg(img)}
                aria-label={`Abrir foto ${i + 1}`}
                className={`
                  bg-bg-surface
                  border
                  border-border-subtle

                  relative

                  hover:border-white
                  transition-all

                  overflow-hidden
                  group

                  cursor-zoom-in

                  ${
                    i === 0 || i === 3
                      ? "col-span-2 md:col-span-2 aspect-[16/9]"
                      : "col-span-1 md:col-span-1 aspect-square"
                  }
                `}
              >

                <Image
                  src={img}
                  alt={`Sonic Highways - Galeria ${i + 1}`}
                  fill
                  sizes="
                    (max-width: 767px) 50vw,
                    (max-width: 1279px) 25vw,
                    320px
                  "
                  className="
                    object-cover

                    transform-gpu
                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"></div>

              </button>
            ))}

          </div>

          {/* AÇÕES */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

            <button
              type="button"
              onClick={() => setGaleriaAberta(true)}
              className="
                w-full
                sm:w-auto

                min-h-11
                px-7

                border
                border-border-subtle

                text-white

                font-inter
                text-[10px]
                md:text-xs
                font-bold

                uppercase
                tracking-wider-5

                hover:bg-white
                hover:text-bg-primary
                hover:border-white

                transition-all
                duration-300
              "
            >
              Ver todas as 20 fotos
            </button>

            {/* INSTAGRAM MOBILE */}
            <a
              href="https://instagram.com/shrecife"
              target="_blank"
              rel="noopener noreferrer"
              className="
                md:hidden

                font-inter
                text-brand-accent
                text-[10px]

                font-bold
                uppercase
                tracking-wider-5

                hover:text-white
                transition-colors
              "
            >
              Ver mais no Instagram ↗
            </a>

          </div>

        </div>

      </section>

      <Footer />

      {/* =========================
          MODAL — GALERIA COMPLETA
          ========================= */}

      {galeriaAberta && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            bg-black/95
            backdrop-blur-md

            overflow-y-auto
            overscroll-contain
          "
          role="dialog"
          aria-modal="true"
          aria-label="Galeria completa da Sonic Highways"
          onClick={() => setGaleriaAberta(false)}
        >

          <div
            className="
              w-full
              max-w-[1280px]
              mx-auto

              px-5
              md:px-10
              lg:px-20

              py-16
              md:py-20
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* CABEÇALHO DO MODAL */}
            <div className="flex items-center justify-between gap-6 mb-8 md:mb-10 border-b border-border-subtle pb-6">

              <div className="min-w-0">

                <h2 className="text-white font-clash text-4xl sm:text-5xl md:text-6xl uppercase">
                  Galeria
                </h2>

                <p className="font-inter text-text-muted text-[10px] md:text-xs uppercase tracking-wider-5 mt-2">
                  20 fotografias
                </p>

              </div>

              <button
                type="button"
                onClick={() => setGaleriaAberta(false)}
                className="
                  w-11
                  h-11
                  shrink-0

                  border
                  border-border-subtle

                  flex
                  items-center
                  justify-center

                  text-white
                  text-xl

                  hover:bg-white
                  hover:text-bg-primary
                  hover:border-white

                  transition-all
                  duration-300
                "
                aria-label="Fechar galeria"
              >
                ✕
              </button>

            </div>

            {/* GRID DAS 20 FOTOS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">

              {galeria.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setLightboxImg(img)}
                  aria-label={`Visualizar foto ${i + 1}`}
                  className="
                    relative
                    w-full
                    aspect-square

                    bg-bg-surface

                    border
                    border-border-subtle

                    overflow-hidden

                    group
                    cursor-zoom-in

                    hover:border-white

                    transition-colors
                    duration-300
                  "
                >

                  <Image
                    src={img}
                    alt={`Sonic Highways - Foto ${i + 1}`}
                    fill
                    sizes="
                      (max-width: 639px) 50vw,
                      (max-width: 1023px) 33vw,
                      25vw
                    "
                    className="
                      object-cover

                      transform-gpu
                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0

                      bg-black/0
                      group-hover:bg-black/20

                      transition-colors
                      duration-500

                      pointer-events-none
                    "
                  ></div>

                  {/* NÚMERO */}
                  <div
                    className="
                      absolute
                      left-3
                      bottom-3

                      bg-black/70
                      backdrop-blur-sm

                      px-2
                      py-1

                      font-inter
                      text-white
                      text-[9px]
                      md:text-[10px]

                      tracking-wider-5
                      uppercase

                      pointer-events-none
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                </button>
              ))}

            </div>

            {/* INSTAGRAM NO FINAL */}
            <div className="flex justify-center mt-10 md:mt-12">

              <a
                href="https://instagram.com/shrecife"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-inter
                  text-brand-accent
                  text-[10px]
                  md:text-xs

                  font-bold
                  uppercase
                  tracking-wider-5

                  hover:text-white
                  transition-colors
                "
              >
                Ver mais no Instagram ↗
              </a>

            </div>

          </div>

        </div>
      )}

      {/* =========================
          LIGHTBOX — FOTO AMPLIADA
          ========================= */}

      {lightboxImg && (
        <div
          className="
            fixed
            inset-0
            z-[110]

            bg-black/95
            backdrop-blur-sm

            flex
            items-center
            justify-center

            p-4
            sm:p-6
            md:p-10

            animate-in
            fade-in
            duration-300
          "
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={() => setLightboxImg(null)}
        >

          {/* FECHAR */}
          <button
            type="button"
            onClick={() => setLightboxImg(null)}
            className="
              absolute
              top-4
              right-4

              md:top-6
              md:right-6

              z-[120]

              w-11
              h-11

              flex
              items-center
              justify-center

              border
              border-white/20

              bg-black/30
              backdrop-blur-sm

              text-white
              text-2xl

              hover:bg-white
              hover:text-black

              transition-all
              duration-300
            "
            aria-label="Fechar foto"
          >
            ✕
          </button>

          {/* IMAGEM */}
          <div
            className="
              relative
              w-full
              max-w-6xl

              h-[75dvh]
              max-h-[900px]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={lightboxImg}
              alt="Imagem ampliada da Sonic Highways"
              fill
              sizes="100vw"
              className="object-contain"
            />

          </div>

        </div>
      )}

    </main>
  );
}