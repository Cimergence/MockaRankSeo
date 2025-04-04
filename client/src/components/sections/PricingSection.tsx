import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "wouter";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/mo",
      description: "Perfect for small websites and blogs",
      features: [
        { included: true, text: "Basic SEO monitoring" },
        { included: true, text: "Monthly reports" },
        { included: true, text: "Up to 3 websites" },
        { included: false, text: "Advanced AI optimization" }
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/mo",
      description: "Ideal for growing businesses",
      features: [
        { included: true, text: "Advanced SEO monitoring" },
        { included: true, text: "Weekly reports" },
        { included: true, text: "Up to 10 websites" },
        { included: true, text: "Basic AI optimization" }
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/mo",
      description: "For large businesses and agencies",
      features: [
        { included: true, text: "Complete SEO suite" },
        { included: true, text: "Daily reports & alerts" },
        { included: true, text: "Unlimited websites" },
        { included: true, text: "Full AI automation" }
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-[#333333]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Affordable Plans for Every Need</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Choose the perfect plan for your business size and requirements. Scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`transition-transform hover:translate-y-[-5px] ${
                plan.popular 
                  ? "border-primary relative transform scale-105 z-10" 
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <CardHeader className={`p-6 ${
                plan.popular 
                  ? "bg-primary text-white" 
                  : "bg-[#FFEDFA] dark:bg-[#333333] border-b border-gray-200 dark:border-gray-700"
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#BE5985] text-white text-xs py-1 px-3 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold">
                  {plan.price}
                  <span className="text-sm font-normal ml-1">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-gray-400"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="/auth">
                  <Button className="w-full mt-6 bg-primary hover:bg-[#BE5985] text-white">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
