export const metadata = {
  title: "Términos de Servicio | Erick Yorzeth Masis",
  description: "Términos y condiciones aplicables a los servicios de desarrollo web, software y consultoría.",
};

export default function TermsPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Términos de Servicio</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder a este sitio web y utilizar o solicitar cualquiera de nuestros servicios (desarrollo web, desarrollo de software, automatización, o consultoría técnica), usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de los términos, no podrá utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descripción de los Servicios</h2>
            <p>
              Ofrecemos servicios de ingeniería de software para empresas, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Construcción y diseño de aplicaciones web corporativas.</li>
              <li>Sistemas de Soluciones Gastronómicas (Modalidades Venta Total y SaaS).</li>
              <li>Automatización de procesos empresariales y flujos de trabajo.</li>
              <li>Consultoría en Arquitectura de Software y Sistemas de Calidad (QMS).</li>
            </ul>
            <p className="mt-4">
              Las características, precios y entregables específicos de cada proyecto serán detallados en una cotización formal y/o contrato comercial (Statement of Work) antes de iniciar cualquier labor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propiedad Intelectual</h2>
            <p>
              Dependiendo de la modalidad contratada:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Venta Total (Código Cerrado):</strong> Una vez liquidado el pago total del desarrollo, el cliente recibe la propiedad intelectual del código específico generado para su proyecto, sujeto a las librerías de código abierto utilizadas.</li>
              <li><strong>Modalidad SaaS (Renta Mensual):</strong> El código base y la infraestructura tecnológica siguen siendo propiedad de nuestra empresa. Se le otorga una licencia de uso mientras la suscripción mensual se mantenga activa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cotizaciones, Pagos y Setup</h2>
            <p>
              Todos los montos presentados en este sitio web están expresados en Colones Costarricenses (₡) y tienen carácter informativo. Los costos reales pueden variar según la complejidad final del requerimiento. Los servicios bajo esquema mensual (SaaS) requieren un pago de <em>Setup inicial</em> más la mensualidad corriente para proceder con la activación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Garantías y Mantenimiento</h2>
            <p>
              Nos comprometemos a entregar software funcional y testeado según los requerimientos pactados. Los proyectos de <em>Venta Total</em> incluyen un período de garantía técnica por bugs críticos de 30 días posteriores a la entrega. Los proyectos bajo esquema <em>SaaS</em> incluyen mantenimiento correctivo y el soporte estipulado (ej. 2 ajustes al mes) mientras el contrato esté vigente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso el desarrollador o la agencia será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan del uso o la imposibilidad de usar el software entregado, o por lucro cesante, interrupción del negocio o pérdida de información, en la medida permitida por la ley aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Legislación Aplicable y Jurisdicción (Costa Rica e Internacional)</h2>
            <p>
              Estos Términos de Servicio y cualquier contrato separado mediante el cual le proporcionemos servicios se regirán e interpretarán de acuerdo con:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Leyes de la República de Costa Rica:</strong> Incluyendo, pero no limitado a, la <em>Ley de Promoción de la Competencia y Defensa Efectiva del Consumidor (Ley No. 7472)</em> aplicable a la prestación de servicios, así como el Código de Comercio.</li>
              <li><strong>Normativa Internacional:</strong> En caso de clientes internacionales, los acuerdos se regirán bajo los principios de la <em>Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías</em> y otras leyes aplicables al comercio digital internacional, a menos que se especifique una jurisdicción distinta en el contrato comercial (Statement of Work).</li>
            </ul>
            <p className="mt-4">
              Cualquier disputa o reclamación será sometida primero a arbitraje o mediación comercial, y en caso de no resolverse, a los tribunales competentes de San José, Costa Rica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Al continuar accediendo o utilizando nuestro Servicio después de que esas revisiones entren en vigencia, usted acepta estar sujeto a los términos revisados.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
