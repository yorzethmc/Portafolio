import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
        <div className="mb-8 relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-primary/20">
          <Image src="/profile.jpg" alt="Erick Yorzeth Masis" fill className="object-cover" />
        </div>
        
        <div className="inline-flex items-center rounded-full border border-border/40 bg-muted/20 px-3 py-1 text-sm font-medium backdrop-blur-md mb-8">
          <Terminal className="mr-2 h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Software Engineer & Automation Specialist</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Software Engineering & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Business Automation Solutions
          </span>
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto mb-10">
          Desarrollo de software empresarial, aplicaciones web, automatización de procesos y soluciones digitales para empresas que buscan eficiencia, escalabilidad y crecimiento.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/portfolio" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto font-medium")}>
            Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto font-medium")}>
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </section>
  );
}
