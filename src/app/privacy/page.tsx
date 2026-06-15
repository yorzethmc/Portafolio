export const metadata = {
  title: "Política de Privacidad | Erick Yorzeth Masis",
  description: "Política de privacidad y manejo de datos para los servicios de desarrollo de software y consultoría tecnológica.",
};

export default function PrivacyPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Recopilación de Información</h2>
            <p>
              Recopilamos la información que usted nos proporciona directamente cuando utiliza nuestro formulario de contacto, solicita una cotización o se comunica con nosotros a través de WhatsApp o correo electrónico. Esta información puede incluir su nombre, nombre de su empresa, dirección de correo electrónico, número de teléfono y detalles sobre su proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso de la Información</h2>
            <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Responder a sus consultas y proporcionar presupuestos personalizados.</li>
              <li>Entender los requisitos técnicos de su proyecto de software o automatización.</li>
              <li>Mejorar nuestros servicios y la experiencia en el sitio web.</li>
              <li>Cumplir con obligaciones legales y administrativas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Marco Legal y Cumplimiento Normativo</h2>
            <p>
              El tratamiento de sus datos personales se realiza en estricto apego a las leyes aplicables:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Legislación de Costa Rica:</strong> Cumplimos con la <em>Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley No. 8968)</em> y su reglamento, garantizando sus derechos de acceso, rectificación, cancelación y oposición (ARCO).</li>
              <li><strong>Normativa Internacional (GDPR):</strong> Para nuestros clientes y usuarios en la Unión Europea o internacionales, aplicamos los más altos estándares establecidos por el <em>Reglamento General de Protección de Datos (GDPR)</em>, garantizando el principio de minimización de datos y el derecho al olvido.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Protección de Datos (QMS y Seguridad)</h2>
            <p>
              Debido a nuestra experiencia en entornos corporativos regulados (sistemas de gestión de calidad, ISO, FDA), tratamos sus datos con la máxima confidencialidad. Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción, alineados con los estándares internacionales de ciberseguridad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Confidencialidad y Acuerdos de No Divulgación (NDA)</h2>
            <p>
              Entendemos que la información sobre su modelo de negocio y operaciones internas es crítica. Estamos en la mejor disposición de firmar Acuerdos de No Divulgación (NDA) antes de profundizar en la arquitectura o el código fuente de los proyectos propuestos, garantizando que su propiedad intelectual esté siempre protegida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Enlaces a Terceros</h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios de terceros, como calendarios de reservas (Calendly) o servicios de comunicación (WhatsApp). No somos responsables de las prácticas de privacidad o el contenido de dichos sitios de terceros. Le recomendamos revisar sus respectivas políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contacto</h2>
            <p>
              Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o el manejo de sus datos, no dude en contactarnos a través de nuestro correo electrónico: <a href="mailto:yorzeth.info@gmail.com" className="text-primary hover:underline">yorzeth.info@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
