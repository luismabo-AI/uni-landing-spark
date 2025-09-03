import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-elegant">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-16 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-2xl">CED</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-muted-foreground hover:text-primary transition-smooth font-medium"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("que-es-ced")}
            className="text-muted-foreground hover:text-primary transition-smooth font-medium"
          >
            ¿Qué es CED?
          </button>
          <button
            onClick={() => scrollToSection("testimonios")}
            className="text-muted-foreground hover:text-primary transition-smooth font-medium"
          >
            Testimonios
          </button>
          <button
            onClick={() => scrollToSection("mundo-laboral")}
            className="text-muted-foreground hover:text-primary transition-smooth font-medium"
          >
            Mundo Laboral
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-card">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("que-es-ced")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              ¿Qué es CED?
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("mundo-laboral")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
            >
              Mundo Laboral
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;