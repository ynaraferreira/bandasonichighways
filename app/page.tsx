"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeShow, setActiveShow] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState("SEU_ID_DO_VIDEO_1"); // Coloque o ID do Youtube aqui
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const membros = [
    { nome: "Lucas Oliveira", funcao: "Vocalista", img: "/images/band/Lucas1.png" },
    { nome: "Geraldo Manoel", funcao: "Guitarrista", img: "/images/band/Geraldo1.png" },
    { nome: "Ynara Ferreira", funcao: "Guitarrista", img: "/images/band/Ynara1.png" },
    { nome: "Ícaro Sales", funcao: "Baixista", img: "/images/band/Icaro1.png" },
    { nome: "Dimitri Silveira", funcao: "Baterista", img: "/images/band/Dimitri1.png" },
  ];

  const shows = [
    { data: "04 SET", local: "Darkside Studio - Recife/PE", info: "Início às 19h. Ingressos na portaria." },
    { data: "26 SET", local: "Oficina Rock Café (Ruptura Fest)", info: "Início às 19h. Sujeito a lotação." },
    { data: "10 OUT", local: "Moto Club - Ferreiros/PE", info: "Entrada franca para motociclistas." },
  ];

  const playlist = [
    { id: "SEU_ID_DO_VIDEO_1", thumb: "/images/gallery/thumb-1.jpg" },
    { id: "SEU_ID_DO_VIDEO_2", thumb: "/images/gallery/thumb-2.jpg" },
    { id: "SEU_ID_DO_VIDEO_3", thumb: "/images/gallery/thumb-3.jpg" },
  ];

  const galeria = [
    "/images/gallery/sonichighways1.jpg",
    "/images/gallery/sonichighways2.jpg",
    "/images/gallery/sonichighways3.jpg",
    "/images/gallery/sonichighways4.jpg",
    "/images/gallery/sonichighways5.jpg",
    "/images/gallery/sonichighways6.jpg",
  ];

  return (
    <main className="relative w-full bg-bg-primary text-text-primary selection:bg-brand-accent selection:text-white">
      
      <Header />

      {/* HERO SECTION (min-h-[100dvh] resolve o bug do Safari no Mobile) */}
      <section id="inicio" className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 px-5 md:px-10 lg:px-20 overflow-hidden">
        <Image 
          src="/images/hero/SH-capa.png" 
          alt="Banda Sonic Highways" 
          fill 
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-bg-primary/40 z-10"></div>

        <div className="relative z-20 w-full max-w-[1280px] mx-auto pt-3">
          
          <h1 className="font-clash text-6xl sm:text-7xl md:text-[120px] lg:text-[150px] leading-[0.85] mb-4 text-white drop-shadow-2xl uppercase">
            SONIC<br/>HIGHWAYS
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <p className="font-inter text-text-muted text-xs md:text-sm tracking-wider-5 uppercase font-medium">
              Grunge 90s - Recife PE
            </p>
            <div className="h-[1px] w-12 bg-brand-accent"></div>

          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#videos" className="w-full sm:w-auto h-13 px-8 bg-brand-accent text-white text-xs md:text-sm font-bold tracking-wider-5 uppercase hover:bg-brand-hover transition-all duration-300 flex items-center justify-center gap-3">
              <span>▶</span> Assistir Vídeos
            </a>
            <a href="#agenda" className="w-full sm:w-auto h-13 px-8 bg-[#0D0D0D]/60 backdrop-blur-md text-white text-xs md:text-sm font-semibold tracking-wider-5 uppercase border border-border-subtle hover:bg-white hover:text-bg-primary transition-all duration-300 flex items-center justify-center">
              Agenda de Shows
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 py-24 flex flex-col items-center">
        <h2 className="font-clash text-4xl sm:text-5xl md:text-7xl text-center text-white uppercase mb-16 max-w-4xl leading-[1.1]">
          Reverberating the 90s.<br/>Building the next decade.
        </h2>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {membros.map((membro, i) => (
            <div 
              key={i} 
              className={`group relative w-full aspect-[3/4] bg-bg-surface overflow-hidden border border-border-subtle md:hover:border-white transition-all duration-500 flex flex-col justify-end p-4 ${
                i === 4 ? 'col-span-2 sm:col-span-1' : 'col-span-1'
              }`}
            >
              {/* Opacidade corrigida para touch vs hover */}
              <Image 
                src={membro.img} 
                alt={membro.nome} 
                fill 
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover opacity-90 md:opacity-50 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Textos: sempre visíveis no mobile, animados no desktop */}
              <div className="relative z-10 p-2 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-clash text-xl md:text-2xl text-white leading-tight">{membro.nome}</h3>
                <p className="font-inter text-brand-accent font-bold text-[10px] md:text-xs uppercase tracking-wider-5 mt-1">{membro.funcao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO VÍDEOS - Tela cheia preta */}
      <section id="videos" className="w-full bg-[#0D0D0D] py-24 border-t border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-brand-accent font-inter text-sm font-bold tracking-wider-8 uppercase mb-2"></h3>
            <h2 className="text-white font-clash text-5xl md:text-6xl uppercase mb-6">Vídeos</h2>
            <p className="font-inter text-text-muted text-sm leading-relaxed mb-8">
              Confira nossas últimas apresentações e sessões de estúdio.
            </p>
            
            {/* Lista de Thumbnails Dinâmicas */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
              {playlist.map((video) => (
                <button 
                  key={video.id}
                  onClick={() => setActiveVideo(video.id)}
                  className={`relative shrink-0 w-32 aspect-video bg-bg-surface border-2 transition-all overflow-hidden snap-center ${activeVideo === video.id ? 'border-brand-accent' : 'border-border-subtle hover:border-white'}`}
                >
                  <Image src={video.thumb} alt="Thumbnail" fill className="object-cover" />
                  {activeVideo === video.id && <div className="absolute inset-0 bg-brand-accent/20 flex items-center justify-center text-white text-xs">▶</div>}
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

      {/* SEÇÃO AGENDA - Fundo Surface para contraste */}
      <section id="agenda" className="w-full bg-bg-surface py-24 border-t border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-white font-clash text-5xl md:text-6xl uppercase mb-4">Agenda 2026</h2>
            <p className="font-inter text-text-muted text-sm uppercase tracking-wider-5">Próximos Shows Confirmados</p>
          </div>

          <div className="flex flex-col border-t border-border-subtle">
            {shows.map((show, i) => (
              <div key={i} className="flex flex-col border-b border-border-subtle group">
                <div 
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 cursor-pointer hover:bg-[#202020] px-4 transition-colors" 
                  onClick={() => setActiveShow(activeShow === i ? null : i)}
                >
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mb-4 sm:mb-0 w-full items-start sm:items-center">
                    <div className="w-24 font-inter text-brand-accent text-lg font-bold uppercase">{show.data}</div>
                    <div className="flex-1 font-inter text-white text-sm md:text-base uppercase font-medium">{show.local}</div>
                  </div>
                  <button className="shrink-0 border border-border-subtle text-white text-[10px] tracking-wider-5 uppercase px-6 py-3 md:group-hover:bg-white md:group-hover:text-bg-primary transition-all duration-300 w-fit">
                    {activeShow === i ? "Fechar" : "Detalhes"}
                  </button>
                </div>
                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ${activeShow === i ? 'max-h-40 opacity-100 py-4 px-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-text-muted text-sm font-inter border-l-2 border-brand-accent pl-4">
                    {show.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <a href="mailto:contato@sonichighways.com.br" className="text-white font-inter text-xs border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors uppercase tracking-wider-5">
              Leve a banda para o seu evento
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO GALERIA (Fundo Escuro) */}
      <section className="w-full bg-[#0D0D0D] py-24 border-t border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-white font-clash text-5xl md:text-6xl uppercase">Galeria</h2>
            <a href="https://instagram.com/shrecife" target="_blank" className="hidden md:block text-brand-accent font-inter text-xs font-bold uppercase tracking-wider-5 hover:text-white transition-colors">
              Ver mais no Instagram ↗
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
            {galeria.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setLightboxImg(img)}
                className={`bg-bg-surface border border-border-subtle relative hover:border-white transition-all overflow-hidden group cursor-zoom-in ${
                  i === 0 || i === 3 ? 'col-span-2 md:col-span-2 aspect-[16/9]' : 'col-span-1 md:col-span-1 aspect-square'
                }`}
              >
                <Image src={img} alt={`Galeria ${i}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* MODAL LIGHTBOX (Galeria em Tela Cheia) */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          <button 
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-brand-accent transition-colors z-50"
          >
            ✕
          </button>
          <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video">
            <Image src={lightboxImg} alt="Imagem Ampliada" fill className="object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}