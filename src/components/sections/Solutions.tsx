import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Utensils, Stethoscope, Scale, Store } from "lucide-react";
import Link from "next/link";

export function Solutions() {
  const industries = [
    {
      id: "restaurantes",
      title: "Restaurantes y Gastronomía",
      description: "Menús digitales inteligentes, catálogos híbridos interactivos y sistemas de pedidos automatizados por WhatsApp para maximizar las ventas del local y delivery.",
      icon: Utensils,
      tags: ["Menús QR", "Pedidos WhatsApp", "Catálogos Híbridos"]
    },
    {
      id: "clinicas",
      title: "Clínicas y Salud",
      description: "Sistemas seguros de reservas, captura de datos de pacientes mediante formularios encriptados y gestión optimizada de citas online.",
      icon: Stethoscope,
      tags: ["Reservas", "Formularios", "Gestión Pacientes"]
    },
    {
      id: "abogados",
      title: "Firmas Legales",
      description: "Sitios corporativos de alto nivel enfocados en captación de clientes, estableciendo autoridad y confianza profesional en el mercado legal.",
      icon: Scale,
      tags: ["Captación", "Sitios Corporativos", "Autoridad"]
    },
    {
      id: "pymes",
      title: "PyMES y Retail",
      description: "Catálogos digitales, presencia omnicanal y automatización de procesos internos para negocios en etapa de escalamiento y modernización.",
      icon: Store,
      tags: ["Catálogos", "Automatización", "Presencia Digital"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30 border-y border-border/40" id="solutions">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Soluciones Específicas <br /> por Industria</h2>
            <p className="text-muted-foreground text-lg">
              Entendemos que cada sector tiene necesidades únicas. Diseñamos plataformas tecnológicas adaptadas a la lógica de su negocio.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
              Discutir su caso de uso <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Card key={industry.id} className="bg-background/50 backdrop-blur border-border/50 overflow-hidden group">
              <CardContent className="p-0">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{industry.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-muted">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
