import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ChartLine, TrendingUp } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Innovative Automation",
      description: "Let our AI take the reins, analyzing market trends and fine-tuning strategies for optimal performance."
    },
    {
      icon: <ChartLine className="h-8 w-8 text-primary" />,
      title: "Data-Driven Insights",
      description: "Leverage real-time analytics that empower your website to climb search rankings."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Scalable Solutions",
      description: "Tailored for startups and enterprises alike, our technology grows as your business does."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-[#333333]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Why MockaRank?</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#FFEDFA] dark:bg-[#333333] border dark:border-[#BE5985] transition-transform hover:translate-y-[-5px]"
            >
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
