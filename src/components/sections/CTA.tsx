import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with a soft glow */}
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          ¿Necesita una solución tecnológica para su negocio?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Ya sea modernizar la presencia digital de su empresa, crear un sistema a la medida o automatizar sus operaciones internas. Hablemos de su proyecto.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto font-medium")}>
            Solicitar Cotización <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a href="https://calendly.com" target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto font-medium bg-background/50 backdrop-blur")}>
            <Calendar className="mr-2 h-4 w-4" /> Agendar Reunión
          </a>
        </div>
      </div>
    </section>
  );
}
