export function Credibility() {
  const metrics = [
    { value: "4+", label: "Años de Experiencia Empresarial" },
    { value: "15+", label: "Sistemas en Producción" },
    { value: "50+", label: "Flujos Automatizados" },
    { value: "100%", label: "Enfoque en Calidad" },
  ];

  return (
    <section className="py-12 border-y border-border/40 bg-muted/10">
      <div className="container max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Experiencia comprobada en entornos corporativos utilizando
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
          {/* Faking logos with text for now, could be replaced with actual SVG logos */}
          <div className="flex items-center text-xl font-bold font-mono">Confluent Medical</div>
          <div className="flex items-center text-xl font-bold font-mono">ETQ Reliance NXG</div>
          <div className="flex items-center text-xl font-bold font-mono">SQL Server</div>
          <div className="flex items-center text-xl font-bold font-mono">Microsoft Azure</div>
          <div className="flex items-center text-xl font-bold font-mono">React / .NET</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center max-w-4xl mx-auto">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">{metric.value}</span>
              <span className="text-sm text-muted-foreground">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
