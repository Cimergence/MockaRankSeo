import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-[#BE5985] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your SEO Strategy?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already benefiting from MockaRank's autonomous SEO technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/auth">
            <Button className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-6">
              Start Free Trial
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="border border-white hover:bg-white hover:text-primary font-medium py-3 px-6"
            onClick={() => {
              // Schedule demo functionality would go here
              console.log("Schedule demo clicked");
            }}
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
