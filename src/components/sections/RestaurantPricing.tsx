import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RestaurantPricing() {
  const plans = [
    {
      level: "Nivel 1",
      name: "Menú Digital Esencial",
      description: "Página HTML estática rápida, lectura por QR, ideal para reemplazar el menú físico. Incluye botón flotante de WhatsApp.",
      priceTotal: "₡45,000",
      priceMonthly: "₡10,000",
      setup: "₡25,000",
      features: [
        "Menú digital QR",
        "Botón flotante de WhatsApp",
        "Alta velocidad de carga",
        "Diseño responsivo"
      ]
    },
    {
      level: "Nivel 2",
      name: "Conectividad Local",
      description: "Herramienta para atraer tráfico físico. Incluye todo lo del Nivel 1, más botones dinámicos de geolocalización y contacto.",
      priceTotal: "₡70,000",
      priceMonthly: "₡15,000",
      setup: "₡35,000",
      features: [
        "Todo lo del Nivel 1",
        "Botones dinámicos Waze/Maps",
        "Contacto directo 1-clic",
        "Optimización para tráfico físico"
      ],
      popular: true
    },
    {
      level: "Nivel 3",
      name: "Sistema Híbrido (Pre-Orden)",
      description: "Solución operativa dual. Menú para mesas + Interfaz de carrito interactivo para express. Web envía orden lista a WhatsApp.",
      priceTotal: "₡240,000",
      priceMonthly: "₡30,000",
      setup: "₡120,000",
      features: [
        "Todo lo del Nivel 2",
        "Carrito interactivo",
        "Cálculo automático de totales",
        "Formateo de orden a WhatsApp",
        "Menú dual (Mesas y Express)"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/10 border-y border-border/40" id="restaurant-solutions">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Soluciones Tecnológicas para Restaurantes</h2>
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Todos los planes incluyen asesoría y configuración gratuita de mensajes de bienvenida en WhatsApp Business.
          </div>
          
          {/* Modalidades de Pago */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-16">
            <Card className="bg-background/60 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary text-sm">1</span>
                  Venta Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El cliente realiza un <strong>único pago</strong> y pasa a ser dueño del código. El cliente paga su propio hosting y dominio (se brinda asistencia técnica para configurarlo).
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/60 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary text-sm">2</span>
                  Renta Mensual (SaaS)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El sistema se aloja en nuestros servidores. Se paga una instalación (Setup) y una mensualidad. <strong>Incluye dominio .com</strong> por el primer año. Incluye soporte de 2 ajustes de texto o precios al mes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card key={idx} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg shadow-primary/10 scale-105 z-10 bg-card' : 'border-border/50 bg-background/50'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">
                    Más Recomendado
                  </Badge>
                </div>
              )}
              <CardHeader className="pt-8 text-center pb-4 border-b border-border/40">
                <Badge variant="outline" className="w-fit mx-auto mb-4 bg-muted">{plan.level}</Badge>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground h-20">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow pt-6">
                
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Venta Total</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.priceTotal}</span>
                      <span className="text-sm text-muted-foreground">único pago</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border/40 pt-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Renta Mensual</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-bold text-primary">{plan.priceMonthly}</span>
                      <span className="text-sm text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-xs text-muted-foreground">+ {plan.setup} de Setup inicial</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`https://wa.me/50687292124?text=Hola, me interesa el plan ${plan.level} (${plan.name}) para restaurantes.`}
                  target="_blank"
                  className={cn(buttonVariants({ variant: plan.popular ? 'default' : 'outline', size: 'lg' }), "w-full mt-auto")}
                >
                  Cotizar Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
