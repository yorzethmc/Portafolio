import { CheckCircle2 } from "lucide-react";

export function WhyMe() {
  const points = [
    {
      title: "Pensamiento Sistémico",
      description: "Analizo la imagen completa de tu negocio, asegurando que el software resuelva problemas reales de la operación y escale correctamente."
    },
    {
      title: "Experiencia Empresarial (Corporate)",
      description: "Mi experiencia proviene del desarrollo e implementación en entornos corporativos altamente regulados, no solo de proyectos freelance pequeños."
    },
    {
      title: "Software Mantenible",
      description: "El código que escribo está diseñado para ser limpio, escalable y fácil de mantener a largo plazo por cualquier otro desarrollador."
    },
    {
      title: "Enfoque en Calidad (QMS)",
      description: "Manejo un estricto control de cambios y validación antes de producción. La trazabilidad es el centro de mis desarrollos."
    }
  ];

  return (
    <section className="py-24 border-y border-border/40 bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why Work With Me</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contratar a un desarrollador es fácil, pero encontrar a un ingeniero que entienda sus procesos de negocio es el verdadero reto.
            </p>
            <p className="text-muted-foreground">
              Aporto una combinación única de ingeniería de software, arquitectura UX, y experiencia real implementando sistemas para empresas multinacionales. Mi objetivo es traducir sus problemas operativos en soluciones de software elegantes y seguras.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
