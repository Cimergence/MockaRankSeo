import { Badge } from "@/components/ui/badge";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description: "Our AI crawls search engines and analyzes competitors"
    },
    {
      number: 2,
      title: "Strategy Formulation",
      description: "The system identifies optimization opportunities"
    },
    {
      number: 3,
      title: "Autonomous Implementation",
      description: "Seamless application of SEO improvements"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#FFEDFA] dark:bg-[#333333]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">How It Works</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="rounded-lg shadow-xl bg-white dark:bg-gray-800 p-4 mx-auto max-w-md">
              <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                <div className="p-4 text-center">
                  <div className="text-primary text-4xl mb-4">AI</div>
                  <div className="flex justify-center space-x-2 mb-2">
                    <Badge variant="outline" className="bg-[#FFEDFA] dark:bg-transparent">Data</Badge>
                    <Badge variant="outline" className="bg-[#FFEDFA] dark:bg-transparent">Analytics</Badge>
                    <Badge variant="outline" className="bg-[#FFEDFA] dark:bg-transparent">Optimization</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">AI Process Visualization</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="max-w-lg mx-auto">
              <p className="text-lg mb-6 text-foreground">
                MockaRank continuously monitors search patterns and intelligently refines your SEO tactics—so you can focus on scaling your business without the hassle of manual optimizations.
              </p>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start">
                    <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-lg font-medium text-foreground">
                  Embrace the future of SEO with <strong>MockaRank</strong>. Join us today and transform your online presence with the power of autonomous intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
