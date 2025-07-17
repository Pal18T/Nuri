import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, Users, ChefHat } from "lucide-react";
import heroImage from "@/assets/hero-cooking.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful cooking ingredients and kitchen setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Recipe Discovery
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Smart Recipe Sharing &{" "}
            <span className="bg-gradient-to-r from-warm-yellow to-primary bg-clip-text text-transparent">
              Meal Planning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover AI-powered recipes, plan meals with friends, and turn cooking into a collaborative experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              <ChefHat className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" />
              Start Cooking Together
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <Search className="w-5 h-5 mr-2" />
              Explore Recipes
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-warm-yellow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Recipe Suggestions</h3>
              <p className="text-white/80">Get personalized recipes based on your preferences and dietary needs</p>
            </div>

            <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaborative Planning</h3>
              <p className="text-white/80">Plan meals together with family and friends in real-time</p>
            </div>

            <div className="text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <ChefHat className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Grocery Lists</h3>
              <p className="text-white/80">Auto-generate shopping lists with price comparisons</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;