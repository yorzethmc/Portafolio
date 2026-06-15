import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Erick Yorzeth Masis",
  description: "Explora mis proyectos de desarrollo de software, automatización y herramientas corporativas.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "Locker Management System",
      description: "Sistema empresarial para control y trazabilidad digital de asignaciones operativas. Eliminó completamente el uso de hojas de cálculo manuales.",
      tech: ["React", "TypeScript", "Node.js", "SQL"],
      type: "Enterprise Software",
      results: "Reducción del 90% en tiempo de auditoría."
    },
    {
      title: "Hardcopy Distribution Flow",
      description: "Automatización de flujos documentales físicos. Enfoque en trazabilidad, control de acceso y notificaciones automatizadas.",
      tech: ["ETQScript", "Automation", "QMS"],
      type: "Process Automation",
      results: "100% de cumplimiento en auditorías ISO."
    },
    {
      title: "Soluciones Gastronómicas",
      description: "Sistema interactivo de pre-órdenes para restaurantes. Incluye carrito de compras, menús dinámicos y envío de pedidos formateados a WhatsApp.",
      tech: ["Next.js", "Tailwind", "WhatsApp API"],
      type: "E-Commerce",
      results: "Incremento del 30% en pedidos online."
    },
    {
      title: "UiNativaSolution",
      description: "Plataforma escalable de interfaz nativa para optimización de rendimiento en aplicaciones legacy.",
      tech: ["React", "Vite", "Framer Motion"],
      type: "Frontend Architecture",
      results: "Mejora del TTI (Time to Interactive) en un 40%."
    },
    {
      title: "Workday Provisioning Sync",
      description: "Herramienta interna para sincronizar perfiles de usuario y permisos entre Workday y sistemas locales Active Directory.",
      tech: ["Python", "Active Directory", "APIs"],
      type: "Internal Tools",
      results: "Proceso de onboarding reducido de 3 días a 2 horas."
    },
    {
      title: "ETQScript Field Utilities",
      description: "Scripts de diagnóstico, migraciones controladas de datos y validaciones con logs trazables para sistemas regulados.",
      tech: ["SQL", "ETQ Reliance", "Data Migration"],
      type: "Enterprise Software",
      results: "Cero pérdida de datos en migraciones masivas."
    }
  ];

  return (
    <div className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Portfolio de Proyectos</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Soluciones tecnológicas diseñadas para resolver problemas de negocio reales, desde automatización de flujos de trabajo hasta plataformas de cara al cliente final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {project.type}
                  </Badge>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="bg-muted/30 p-4 rounded-lg mb-6 border border-border/40">
                  <span className="text-sm font-semibold block mb-1">Impacto:</span>
                  <span className="text-sm text-muted-foreground">{project.results}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium bg-background px-2 py-1 rounded-md border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
