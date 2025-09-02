import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import cruzPortrait from "@/assets/cruz-portrait.jpg";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Cruz Galdámez",
      position: "Director General CED",
      image: cruzPortrait,
      quote: "Ser un profesional integral en estrategia digital multidisciplinario que integra creatividad, pensamiento crítico y visión innovadora para diseñar, planificar y ejecutar proyectos combinando habilidades en marketing, producción audiovisual y desarrollo de interfaces digitales."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-accent mb-4 mx-auto md:mx-0" />
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-bold text-primary">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted-foreground font-medium">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation (hidden if only one testimonial) */}
              {testimonials.length > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-smooth ${
                          index === currentTestimonial
                            ? "bg-primary"
                            : "bg-border hover:bg-primary/50"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;