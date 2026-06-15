import Link from "next/link";
import { Terminal, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background mt-auto">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 transition-opacity hover:opacity-80">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-semibold tracking-tight">EYMC</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Software Engineering, Business Automation Solutions y transformación digital corporativa.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                LinkedIn <ExternalLink className="h-3 w-3" />
              </a>
              <a href="mailto:yorzeth.info@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                GitHub <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services#web" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
              <li><Link href="/services#software" className="hover:text-primary transition-colors">Desarrollo de Software</Link></li>
              <li><Link href="/services#automation" className="hover:text-primary transition-colors">Automatización</Link></li>
              <li><Link href="/services#consulting" className="hover:text-primary transition-colors">Consultoría Técnica</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Proyectos</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Erick Yorzeth Masis Cavero. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-foreground">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-foreground">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
