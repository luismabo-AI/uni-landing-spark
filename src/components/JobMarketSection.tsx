import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Monitor, Palette, TrendingUp, Camera, Users, MessageSquare, BarChart3, Globe } from "lucide-react";

const JobMarketSection = () => {
  const jobCategories = [
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      jobs: [
        "Content Marketer",
        "UX Researcher", 
        "UI Designer",
        "Scrum Master",
        "Product Owner"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      jobs: [
        "Growth Hacker",
        "Estratega Digital",
        "Fotógrafo",
        "Project Manager",
        "Director de Mercadeo"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      jobs: [
        "Productor Audiovisual",
        "Consultor de Estrategias",
        "Social Media Manager",
        "Freelancer",
        "Director de Comunicaciones"
      ]
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      jobs: [
        "Coordinador Digital",
        "Emprendedor",
      ]
    }
  ];

  const allJobs = jobCategories.flatMap(category => category.jobs);

  return (
    <section id="mundo-laboral" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Mundo laboral
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que puedes ser en CED
          </p>
        </div>

        {/* Job Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {allJobs.map((job, index) => (
            <Card key={index} className="bg-card-gradient border-border shadow-card hover:shadow-elegant transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  {index % 4 === 0 && <Monitor className="h-6 w-6 text-primary" />}
                  {index % 4 === 1 && <TrendingUp className="h-6 w-6 text-primary" />}
                  {index % 4 === 2 && <MessageSquare className="h-6 w-6 text-primary" />}
                  {index % 4 === 3 && <Globe className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="font-semibold text-primary group-hover:text-primary-glow transition-smooth">
                  {job}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobMarketSection;