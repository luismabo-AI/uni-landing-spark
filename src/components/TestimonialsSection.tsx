import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Cruz Galdámez",
      position: "Director Carrera CED",
      image: "/lovable-uploads/45a567d0-0f79-439b-8279-ce3811b1b2c6.png",
      quote: "Un profesional de CED es un estratega digital multidisciplinario que integra creatividad, pensamiento crítico y visión innovadora para diseñar, planificar y ejecutar proyectos, combinando habilidades en marketing, producción audiovisual y desarrollo de interfaces digitales."
    },
    {
      name: "Allison Perla",
      position: "Graduada CED",
      image: "/lovable-uploads/71ca0277-e110-45c7-bdb3-edfbb429fbb7.png",
      quote: "La definiría como \"multifacética\" porque te expone a diferentes rubros de la industria naranja y digital que te permiten explorar tu perfil para que tu escojas el camino que quieres tomar."
    },
    {
      name: "Ivette Chacón",
      position: "Docente Mónica Herrera",
      image: "/lovable-uploads/f7b89276-7850-4925-8c51-bcb0607dca88.png",
      quote: "Tipo de Diseño emergente que desarrolla experiencias con apoyo digital, enfocado en las necesidades cambiantes de la industria. Una disciplina mezcla de estrategia visual y de persuasión eficaz y eficiente para  entornos interactivos, producción de medios audiovisuales, comunicaciones digitales, predicción basada en datos, tendencias, seguridad, personalización de entornos virtuales o de realidad aumentada."
    },
    {
      name: "Christian Zayas",
      position: "Consultor y Asesor Empresarial",
      image: "/lovable-uploads/a9b35068-543f-4774-884d-5a1daa651ac9.png",
      quote: "Profesional multidisciplinario que es capaz de investigar, diseñar, planificar, ejecutar y medir tácticas digitales dentro del marco de Marketing Digital, producción audiovisual y transformación digital."
    },
    {
      name: "Juanjo Arguello",
      position: "Fundador de Nonica Studio",
      image: "/lovable-uploads/103ed277-f10f-4648-9060-03431d04876a.png",
      quote: "Un profesional de CED es un perfil multidisciplinario con capacidades de pensamiento estratégico aplicado en áreas de emprendimiento, servicios o productos de distintas categorías, diseño y desarrollo de interfaces digitales, mercadeo, publicidad y producción audiovisual. Dependiendo del enfoque del profesional"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Testimonios
          </h2>
          <p className="text-muted-foreground text-lg">
            Esto dicen los profesionales acerca de CED
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
              breakpoints: {
                "(min-width: 768px)": { 
                  dragFree: false,
                },
              },
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="relative"
          >
            <CarouselContent className="-ml-2 lg:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-card-gradient border-border shadow-elegant">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Profile Image */}
                      <div className="flex-shrink-0 mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-primary/20 shadow-glow mx-auto">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 text-center">
                        <Quote className="h-6 w-6 text-accent mb-4 mx-auto" />
                        <blockquote className="text-sm lg:text-base text-foreground leading-relaxed mb-6 flex-1">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-auto">
                          <h4 className="text-lg font-bold text-primary">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground font-medium text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex border-primary/20 hover:bg-primary hover:text-primary-foreground -left-4 md:-left-12" />
            <CarouselNext className="hidden lg:flex border-primary/20 hover:bg-primary hover:text-primary-foreground -right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;