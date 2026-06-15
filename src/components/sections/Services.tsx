import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Code2, Workflow, Lightbulb } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios corporativos, landing pages y catálogos digitales orientados a conversión.",
      icon: Monitor,
      features: ["Performance Optimizado", "SEO Técnico", "Diseño Responsivo"]
    },
    {
      title: "Desarrollo de Software",
      description: "Aplicaciones web complejas, sistemas internos y diseño de APIs robustas.",
      icon: Code2,
      features: ["Arquitectura Escalable", "Stack Moderno", "Sistemas Seguros"]
    },
    {
      title: "Automatización",
      description: "Optimización de procesos empresariales y flujos de trabajo repetitivos.",
      icon: Workflow,
      features: ["Workflows Inteligentes", "Integraciones B2B", "Reducción de Costos"]
    },
    {
      title: "Consultoría Técnica",
      description: "Asesoramiento experto en arquitectura de sistemas y transformación digital.",
      icon: Lightbulb,
      features: ["Sistemas de Calidad", "Auditoría de Procesos", "Estrategia Tecnológica"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Servicios Tecnológicos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones integrales diseñadas para impulsar la eficiencia operativa y el crecimiento comercial de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-card border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
