import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Imprensa() {
  const downloadItems = [
    { title: "Release Oficial 2026", meta: "PDF / 1.2 MB", file: "/press/Release.pdf" },
    { title: "Logomarca Oficial (Vetores)", meta: "AI, SVG, PNG / 4.5 MB", file: "/press/Logos.zip" },
    { title: "Fotos Oficiais (High-Res)", meta: "ZIP / 45.0 MB", file: "/press/Fotos.zip" },
    { title: "Mapa de Palco & Rider Técnico", meta: "PDF / 2.8 MB", file: "/press/Rider.pdf" },
    { title: "Press Kit Completo", meta: "ZIP / 53.5 MB", file: "/press/PressKit_Completo.zip" },
  ];

  return (
    <main className="relative min-h-screen w-full bg-bg-primary selection:bg-brand-accent selection:text-white flex flex-col justify-between">
      
      {/* O Header já detecta sozinho que não está na Home e fica com fundo escuro */}
      <Header />

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 pt-36 pb-24 flex-1">
        
        <div className="mb-16 md:mb-20">
          <h1 className="font-clash text-5xl md:text-[80px] lg:text-[100px] text-white uppercase leading-none tracking-tight mb-6">
            MATERIAL<br />PARA DIVULGAÇÃO
          </h1>
          <p className="font-inter text-text-muted text-xs md:text-sm uppercase tracking-wider-5 max-w-lg border-l-2 border-brand-accent pl-4">
            Encontre aqui os materiais oficiais da Sonic Highways para divulgação, produção de eventos, contratantes e parceiros. </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-border-subtle pt-16">
          
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="font-inter font-bold text-white text-sm uppercase tracking-wider-5 mb-5">
                Contato de Assessoria
              </h3>
              <div className="flex flex-col gap-1 text-sm font-inter">
                <p className="text-text-muted uppercase text-[10px] mb-1">E-mail Corporativo:</p>
                <a href="mailto:contato@sonichighways.com.br" className="text-white hover:text-brand-accent transition-colors">
                  contato@sonichighways.com.br
                </a>
                
                <p className="text-text-muted uppercase text-[10px] mt-5 mb-1">Booking / Shows:</p>
                <a href="tel:+5581900000000" className="text-white hover:text-brand-accent transition-colors">
                  +55 81 90000-0000
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-inter font-bold text-white text-sm uppercase tracking-wider-5 mb-4">
                Regras de Uso da Marca
              </h3>
              <p className="font-inter text-text-muted text-xs leading-relaxed text-justify">
                As fotografias, o logotipo e os demais materiais disponíveis nesta área podem ser utilizados para fins de imprensa e divulgação da banda.

Para preservar a identidade visual da Sonic Highways, pedimos que as imagens não sejam alteradas, distorcidas ou recebam filtros que comprometam sua composição original.

Para outros formatos de uso ou adaptações, entre em contato com nossa assessoria.</p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col w-full">
            <h3 className="font-inter font-bold text-white text-sm uppercase tracking-wider-5 mb-6">
              Arquivos para Download
            </h3>
            
            <div className="flex flex-col border-t border-border-subtle">
              {downloadItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.file} // O link real do arquivo
                  download // O atributo mágico que força o download
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-border-subtle hover:bg-bg-surface/80 transition-all duration-300 px-4 -mx-4 cursor-pointer"
                >
                  <div className="flex items-center gap-5 mb-4 sm:mb-0">
                    <div className="w-10 h-10 bg-[#0D0D0D] border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-brand-accent group-hover:bg-brand-accent transition-colors duration-300">
                      <span className="text-white text-lg font-bold group-hover:text-white">↓</span>
                    </div>
                    <span className="font-inter text-white font-medium text-sm md:text-base">
                      {item.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-8 pl-15 sm:pl-0">
                    <span className="font-inter text-text-muted text-[10px] md:text-xs uppercase tracking-wider-5">
                      {item.meta}
                    </span>
                    <span className="font-inter text-white font-bold text-xs uppercase tracking-wider-5 border-b border-transparent group-hover:border-white transition-colors">
                      Baixar Arquivo
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}