import RecipeCard from "./RecipeCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const FeaturedRecipes = () => {
  // Mock data for featured recipes
  const featuredRecipes = [
    {
      id: "1",
      title: "Creamy Tuscan Chicken Pasta",
      description: "Rich and indulgent pasta dish with sun-dried tomatoes, spinach, and a creamy garlic sauce that's ready in 30 minutes.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cookTime: 30,
      servings: 4,
      difficulty: "Medium" as const,
      rating: 4.8,
      tags: ["Italian", "Pasta", "Comfort Food"],
      chef: {
        name: "Maria Romano",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    },
    {
      id: "2", 
      title: "Asian-Style Buddha Bowl",
      description: "Colorful and nutritious bowl with quinoa, edamame, avocado, and a tangy sesame-ginger dressing.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cookTime: 25,
      servings: 2,
      difficulty: "Easy" as const,
      rating: 4.6,
      tags: ["Healthy", "Vegan", "Asian"],
      chef: {
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    },
    {
      id: "3",
      title: "Moroccan Lamb Tagine",
      description: "Aromatic slow-cooked lamb with apricots, almonds, and traditional Moroccan spices served with fluffy couscous.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cookTime: 120,
      servings: 6,
      difficulty: "Hard" as const,
      rating: 4.9,
      tags: ["Moroccan", "Lamb", "Slow Cook"],
      chef: {
        name: "Amina Hassan",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    },
    {
      id: "4",
      title: "Lemon Herb Salmon with Asparagus",
      description: "Fresh Atlantic salmon baked with herbs and lemon, served alongside roasted asparagus and baby potatoes.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cookTime: 35,
      servings: 4,
      difficulty: "Medium" as const,
      rating: 4.7,
      tags: ["Seafood", "Healthy", "Low Carb"],
      chef: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    },
    {
      id: "5",
      title: "Chocolate Avocado Mousse",
      description: "Decadent yet healthy chocolate mousse made with ripe avocados, cacao powder, and maple syrup.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cookTime: 15,
      servings: 4,
      difficulty: "Easy" as const,
      rating: 4.5,
      tags: ["Dessert", "Vegan", "Healthy"],
      chef: {
        name: "Sophie Laurent",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    },
    {
      id: "6",
      title: "Korean BBQ Tacos",
      description: "Fusion tacos with marinated bulgogi beef, kimchi slaw, and spicy gochujang mayo in soft corn tortillas.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      cookTime: 45,
      servings: 4,
      difficulty: "Medium" as const,
      rating: 4.8,
      tags: ["Korean", "Fusion", "Spicy"],
      chef: {
        name: "Min-jun Park",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Trending <span className="text-primary">Recipes</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Discover the most popular recipes from our cooking community
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All Recipes
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <div key={recipe.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="md:hidden">
            View All Recipes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;