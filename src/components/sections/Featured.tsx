import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Featured() {
  const projects = [
    {
      title: "Locker Management System",
      description: "Sistema empresarial para control y trazabilidad digital de asignaciones operativas.",
      tech: ["React", "TypeScript", "Node.js", "SQL"],
      colSpan: "col-span-1 md:col-span-2",
      type: "Enterprise Software"
    },
    {
      title: "UiNativaSolution",
      description: "Plataforma escalable de interfaz nativa para optimización de rendimiento.",
      tech: ["Next.js", "Tailwind"],
      colSpan: "col-span-1",
      type: "Frontend Architecture"
    },
    {
      title: "Soluciones Gastronómicas",
      description: "Sistema interactivo de pre-órdenes, cálculo de totales y envíos estructurados vía WhatsApp.",
      tech: ["React", "REST APIs"],
      colSpan: "col-span-1",
      type: "E-Commerce"
    },
    {
      title: "Hardcopy Distribution Flow",
      description: "Automatización de flujos documentales. Reducción drástica del trabajo manual y aumento de trazabilidad.",
      tech: ["ETQScript", "Automation"],
      colSpan: "col-span-1 md:col-span-2",
      type: "Process Automation"
    }
  ];

  return (
    <section className="py-24 bg-background" id="featured">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Desde aplicaciones web hasta la automatización de procesos críticos de calidad en el sector de dispositivos médicos.
            </p>
          </div>
          <Link href="/portfolio" className="hidden md:inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
            Ver todo el portafolio <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, idx) => (
            <Card key={idx} className={`${project.colSpan} bg-muted/20 border-border/50 hover:bg-muted/40 transition-colors group relative overflow-hidden flex flex-col justify-between`}>
              {/* Optional: Add a subtle gradient overlay or image background here */}
              <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="bg-background/50 backdrop-blur">
                      {project.type}
                    </Badge>
                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium text-foreground bg-background/80 px-2 py-1 rounded-md border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
            Ver todo el portafolio <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
