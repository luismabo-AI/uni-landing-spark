import { Card, CardContent } from "./ui/card";
import { Lightbulb, Target, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Creatividad Digital",
      description: "Integra creatividad y pensamiento crítico para diseñar soluciones innovadoras"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Estrategia Enfocada",
      description: "Planifica y ejecuta proyectos con visión estratégica y objetivos claros"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Comunicación Integral",
      description: "Combina habilidades comunicativas con conocimiento digital multidisciplinario"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovación Digital",
      description: "Desarrolla interfaces digitales y estrategias de comunicación de vanguardia"
    }
  ];

  return (
    <section id="que-es-ced" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ¿Qué es CED?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <strong className="text-primary">Lic. en Comunicación y Estrategia Digital (CED)</strong>
          </p>
          <div className="mt-8 text-left max-w-2xl mx-auto space-y-4">
            <p className="text-foreground leading-relaxed">
              Un profesional de CED es un estratega digital multidisciplinario que integra creatividad, 
              pensamiento crítico y visión innovadora para diseñar, planificar y ejecutar proyectos, 
              combinando habilidades comunicativas con conocimiento en el desarrollo de interfaces digitales.
            </p>
            <p className="text-foreground leading-relaxed">
              Desde especializarse en una disciplina hasta liderar equipos estratégicamente o emprender 
              de forma independiente, siempre respondiendo a las necesidades del mercado y del usuario 
              en entornos digitales.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;