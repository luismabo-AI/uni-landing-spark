import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Cruz Galdámez",
      position: "Director Carrera CED",
      image: "/lovable-uploads/45a567d0-0f79-439b-8279-ce3811b1b2c6.png",
      quote: "Un profesional integral de CED está en constante evolución digital. Multidisciplinario porque integra creatividad, pensamiento crítico y visión innovadora para diseñar, planificar y ejecutar proyectos. Combina habilidades en marketing, producción audiovisual y desarrollo de interfaces digitales."
    },
    {
      name: "Allison Perla",
      position: "Graduada CED",
      image: "/lovable-uploads/71ca0277-e110-45c7-bdb3-edfbb429fbb7.png",
      quote: "La carrera me convirtió en multifacética porque te capacita a diferentes grados de la industria creativa y del perfil para que te enfoques en el comercio que quieras hacer."
    },
    {
      name: "Ivette Chacón",
      position: "Docente Mónica Herrera",
      image: "/lovable-uploads/f7b89276-7850-4925-8c51-bcb0607dca88.png",
      quote: "Tipo de experto en compañía que desarrolla experiencia con apoyo digital aplicado en marketing, entretenimiento digital y estructura. Una disciplina mezcla de tecnología visual y marketing, aspectos industriales, producción de medios audiovisuales."
    },
    {
      name: "Christian Zayas",
      position: "Consultor y asesor empresarial",
      image: "/lovable-uploads/a9b35068-543f-4774-884d-5a1daa651ac9.png",
      quote: "Profesional multidisciplinario capaz de investigar, diseñar, bien planificar productivo y crear interfaces digitales en marcos de marketing digital, producción audiovisual y comercial local experto."
    },
    {
      name: "Juanjo Argüello",
      position: "Fundador de NoñCa Studio",
      image: "/lovable-uploads/103ed277-f10f-4648-9060-03431d04876a.png",
      quote: "Un profesional de CED es un perfil multidisciplinario con características de pensamiento de diseño estratégico para emprendimiento, servicio y productos de resultados mejores, que desarrolla branding, medios, publicidad y producción audiovisual."
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
            className="relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
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
                        <blockquote className="text-sm md:text-base text-foreground leading-relaxed mb-6 flex-1">
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
            <CarouselPrevious className="hidden sm:flex border-primary/20 hover:bg-primary hover:text-primary-foreground -left-4 md:-left-12" />
            <CarouselNext className="hidden sm:flex border-primary/20 hover:bg-primary hover:text-primary-foreground -right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;