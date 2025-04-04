import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#FFEDFA] to-[#FFB8E0] dark:from-[#333333] dark:to-[#BE5985] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              MockaRank – Redefining SEO Automation
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Revolutionize Your SEO with Autonomous AI
            </h2>
            <p className="text-lg mb-8 text-foreground">
              Experience the future of digital marketing with <strong>MockaRank</strong>. Our cutting-edge AI agent autonomously drives your SEO strategy by adapting to trends and optimizing content in real time.
            </p>
            <Link to="/auth">
              <Button className="bg-primary hover:bg-[#BE5985] text-white font-medium py-3 px-6 rounded-md inline-flex items-center transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-lg shadow-xl bg-white p-4 w-full max-w-md">
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">SEO Analytics Visualization</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="bg-[#FFEDFA] h-8 rounded"></div>
                <div className="bg-primary h-8 rounded"></div>
                <div className="bg-[#BE5985] h-8 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
