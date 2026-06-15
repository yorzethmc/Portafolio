import { Monitor, Code2, Workflow, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Servicios | Erick Yorzeth Masis",
  description: "Servicios de desarrollo web, software a medida, automatización y consultoría técnica.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "web",
      title: "Desarrollo Web & Landing Pages",
      description: "Construyo sitios web ultra-rápidos, seguros y optimizados para SEO que actúan como su mejor herramienta de ventas 24/7.",
      icon: Monitor,
      useCases: ["Sitios Corporativos", "Landing Pages de Venta", "Catálogos Digitales", "Portales Informativos"],
      benefits: ["Aumento de conversiones", "Carga en milisegundos", "Diseño responsivo premium"]
    },
    {
      id: "software",
      title: "Desarrollo de Software a Medida",
      description: "Arquitectura y desarrollo de aplicaciones web complejas, plataformas SaaS y herramientas internas que resuelven problemas específicos de su operación.",
      icon: Code2,
      useCases: ["Sistemas de Gestión (ERP/CRM)", "Portales de Cliente", "APIs y Microservicios", "Sistemas de Reservas"],
      benefits: ["Escalabilidad garantizada", "Seguridad empresarial", "Mantenibilidad a largo plazo"]
    },
    {
      id: "automation",
      title: "Automatización de Procesos Empresariales",
      description: "Conecto sus herramientas existentes y automatizo el trabajo manual repetitivo para que su equipo pueda enfocarse en tareas de alto valor.",
      icon: Workflow,
      useCases: ["Sincronización de Datos", "Flujos de Aprobación", "Notificaciones Automatizadas", "Onboarding de Clientes"],
      benefits: ["Reducción de costos", "Cero errores humanos", "Aceleración operativa"]
    },
    {
      id: "consulting",
      title: "Consultoría Técnica & QMS",
      description: "Asesoramiento experto basado en años de experiencia en empresas multinacionales reguladas (ISO, FDA).",
      icon: Lightbulb,
      useCases: ["Auditoría Técnica", "Diseño de Arquitectura", "Sistemas de Calidad (ETQ)", "Migración de Datos"],
      benefits: ["Reducción de riesgos", "Cumplimiento normativo", "Toma de decisiones informada"]
    }
  ];

  return (
    <div className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Servicios de Ingeniería</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Soluciones tecnológicas robustas, desde la conceptualización hasta la implementación y mantenimiento en producción.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, idx) => (
            <div key={service.id} id={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-foreground">Casos de Uso</h3>
                    <ul className="space-y-3">
                      {service.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-1.5 mr-3 shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-foreground">Beneficios Clave</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={`bg-muted/30 rounded-3xl p-8 border border-border/50 h-full min-h-[300px] flex items-center justify-center ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                <div className="text-center opacity-50">
                  {/* Decorative graphic or placeholder for future imagery */}
                  <service.icon className="h-32 w-32 mx-auto mb-4 text-muted-foreground" strokeWidth={1} />
                  <p className="font-mono text-sm uppercase tracking-widest">{service.id} module</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-primary/5 rounded-3xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Trabajemos juntos para construir la solución tecnológica que llevará la operación de su empresa al siguiente nivel.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "font-medium")}>
            Discutir su proyecto <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
