import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, RefreshCw, ThumbsUp, Zap } from "lucide-react";
import { useState } from "react";

const AiSuggestions = () => {
  const [isLoading, setIsLoading] = useState(false);

  const suggestions = [
    {
      id: 1,
      title: "Mediterranean Quinoa Bowl",
      reason: "Based on your love for healthy grains",
      cookTime: 25,
      difficulty: "Easy",
      healthScore: 92,
      ingredients: ["quinoa", "chickpeas", "cucumber", "feta", "olive oil"]
    },
    {
      id: 2,
      title: "Spicy Korean Tofu Stir-fry",
      reason: "Matches your spicy food preferences",
      cookTime: 20,
      difficulty: "Medium", 
      healthScore: 88,
      ingredients: ["tofu", "kimchi", "sesame oil", "scallions", "rice"]
    },
    {
      id: 3,
      title: "Creamy Mushroom Risotto",
      reason: "Perfect for your dinner party tomorrow",
      cookTime: 35,
      difficulty: "Medium",
      healthScore: 75,
      ingredients: ["arborio rice", "mushrooms", "parmesan", "wine", "herbs"]
    }
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Recommendations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recipes Just for <span className="text-primary">You</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your taste preferences, dietary restrictions, and cooking history to suggest perfect recipes.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button 
            onClick={handleRefresh}
            variant="outline" 
            className="group"
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            {isLoading ? 'Generating...' : 'Get New Suggestions'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestions.map((suggestion, index) => (
            <Card 
              key={suggestion.id} 
              className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {suggestion.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground italic">
                      {suggestion.reason}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {suggestion.cookTime} min
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {suggestion.difficulty}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-fresh-green/10 text-fresh-green border-fresh-green/20"
                  >
                    {suggestion.healthScore}% healthy
                  </Badge>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Key ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {suggestion.ingredients.map((ingredient) => (
                      <Badge key={ingredient} variant="secondary" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="cooking" size="sm" className="flex-1">
                    Try This Recipe
                  </Button>
                  <Button variant="ghost" size="sm" className="px-3">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span>Suggestions improve as you cook more recipes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSuggestions;