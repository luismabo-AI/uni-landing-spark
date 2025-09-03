import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Estudiantes universitarios trabajando en proyectos digitales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            "ESTRATEGA CREATIVO
            <br />
            <span className="text-accent">MULTIDISCIPLINARIO</span>"
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Descubre el mundo de la Comunicación y Estrategia Digital
          </p>

          <Button
            onClick={() => scrollToSection("que-es-ced")}
            size="lg"
          >
            Conoce más sobre CED
          </Button>
          {/* Scroll indicator */}
          <div className="flex justify-center text-center mt-10">
            <ChevronDown className="h-8 w-8 text-primary-foreground/60 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;