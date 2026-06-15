"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "web",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Erick, me interesa cotizar un proyecto.%0A%0A*Nombre:* ${formData.name}%0A*Empresa:* ${formData.company || "N/A"}%0A*Email:* ${formData.email}%0A*Tipo:* ${formData.type}%0A*Mensaje:* ${formData.message}`;
    window.open(`https://wa.me/50687292124?text=${text}`, "_blank");
  };

  return (
    <div className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Iniciemos una <br className="hidden md:block" />Conversación</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Desarrollo de software empresarial, automatización de procesos y soluciones digitales. Completá el formulario o contáctame directamente por mis canales oficiales.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Correo Electrónico</h3>
                  <a href="mailto:yorzeth.info@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">yorzeth.info@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">WhatsApp Corporativo</h3>
                  <a href="https://wa.me/50687292124" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+506 8729-2124</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Ubicación</h3>
                  <span className="text-muted-foreground">Sabanilla, Alajuela, Costa Rica</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Solicitar Cotización</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nombre Completo</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Empresa</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" placeholder="Ej. Acme Corp" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Correo Electrónico</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" placeholder="juan@empresa.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">Tipo de Proyecto</label>
                <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                  <option value="web">Desarrollo Web / Landing Page</option>
                  <option value="software">Desarrollo de Software a Medida</option>
                  <option value="automation">Automatización de Procesos</option>
                  <option value="qms">Consultoría Técnica / QMS</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Descripción del Proyecto</label>
                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" placeholder="Cuénteme brevemente sobre sus necesidades y objetivos..."></textarea>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
