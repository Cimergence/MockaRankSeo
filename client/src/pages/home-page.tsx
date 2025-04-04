import { Link } from "wouter";
import Logo from "@/components/ui/logo";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import { useAuth } from "@/hooks/use-auth";

export default function HomePage() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white dark:bg-[#333333] shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Logo />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-foreground hover:text-primary dark:hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary dark:hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary dark:hover:text-primary transition-colors">
                Pricing
              </a>
            </nav>
            <div className="flex items-center">
              {user ? (
                <Link to="/dashboard" className="text-primary hover:text-[#BE5985] mr-4">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/auth" className="text-primary hover:text-[#BE5985] mr-4">
                    Login
                  </Link>
                  <Link to="/auth" className="bg-primary hover:bg-[#BE5985] text-white py-2 px-4 rounded-md transition-colors">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </main>

      <FooterSection />
    </div>
  );
}
