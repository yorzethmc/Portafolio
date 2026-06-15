export function TechStack() {
  const stacks = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"]
    },
    {
      category: "Backend & Cloud",
      technologies: ["Node.js", "SQL Server", "Microsoft Azure", ".NET (Basics)", "REST APIs", "GraphQL"]
    },
    {
      category: "Enterprise & Automation",
      technologies: ["ETQ Reliance", "ETQScript", "Python scripting", "Workday Integration", "Active Directory Tools"]
    },
    {
      category: "Architecture & QA",
      technologies: ["System Design", "Quality Management Systems (QMS)", "Git", "CI/CD", "Technical Documentation"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Tech Stack & Experiencia</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Herramientas y plataformas modernas que utilizo para construir soluciones robustas y escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stacks.map((stack, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-xl font-semibold mb-6 border-b border-border/40 pb-2 inline-block">
                {stack.category}
              </h3>
              <ul className="space-y-3">
                {stack.technologies.map((tech, i) => (
                  <li key={i} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
