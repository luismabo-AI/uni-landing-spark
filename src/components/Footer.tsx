const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold">CED</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} Comunicación y Estrategia Digital
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Formando estrategas digitales del futuro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;