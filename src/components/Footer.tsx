const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-4xl font-bold">CED</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} Comunicación y Estrategia Digital
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Diseñado por Luis, Daniela y Emilio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;