import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AiSuggestions from "@/components/AiSuggestions";
import FeaturedRecipes from "@/components/FeaturedRecipes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AiSuggestions />
        <FeaturedRecipes />
      </main>
    </div>
  );
};

export default Index;
