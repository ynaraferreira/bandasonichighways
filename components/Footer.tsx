import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-surface pt-20 pb-10 border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        <div className="md:col-span-1 flex flex-col gap-4">
          <Link href="/" className="text-text-primary font-bold tracking-wider-5 text-2xl">
            SONIC<span className="text-text-muted">HIGHWAYS</span>
          </Link>
          <p className="font-inter text-text-muted text-xs leading-relaxed max-w-[250px]">
            Reverberating the 90s. Building the next decade. Authentic Grunge experience.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-inter text-white font-semibold text-xs uppercase tracking-wider-5">
            Contato
          </p>
          <a href="mailto:contato@sonichighways.com.br" className="font-inter text-text-muted hover:text-white transition-colors text-sm">
            contato@sonichighways.com.br
          </a>
          <a href="tel:+5581900000000" className="font-inter text-text-muted hover:text-white transition-colors text-sm">
            +55 81 90000-0000
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-inter text-white font-semibold text-xs uppercase tracking-wider-5">
            Links
          </p>
          <Link href="/imprensa" className="text-text-muted hover:text-brand-accent transition-colors text-sm w-fit">
            Material para Divulgação
          </Link>
          <a href="https://instagram.com/shrecife" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-accent transition-colors text-sm w-fit">
            Instagram
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand-accent transition-colors text-sm w-fit">
            YouTube
          </a>
        </div>


      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 mt-16 pt-8 border-t border-border-subtle/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-inter text-text-muted text-xs uppercase tracking-wider-5 text-center sm:text-left">
          © {new Date().getFullYear()} Sonic Highways. Todos os direitos reservados.
        </p>
        <p className="font-inter text-text-muted text-xs">
          Recife, PE - Brasil
        </p>
      </div>
    </footer>
  );
}