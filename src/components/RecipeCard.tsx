import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Users, Star, Heart, BookOpen } from "lucide-react";
import { useState } from "react";

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  rating: number;
  tags: string[];
  chef: {
    name: string;
    avatar: string;
  };
}

const RecipeCard = ({ 
  title, 
  description, 
  image, 
  cookTime, 
  servings, 
  difficulty, 
  rating, 
  tags, 
  chef 
}: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-fresh-green text-white";
      case "Medium": return "bg-warm-yellow text-foreground";
      case "Hard": return "bg-terracotta text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-floating transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
          />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={chef.avatar} 
            alt={chef.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{chef.name}</p>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-warm-yellow text-warm-yellow" />
              <span className="text-sm text-muted-foreground">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{cookTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{servings} servings</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="recipe" className="flex-1">
            <BookOpen className="w-4 h-4 mr-2" />
            View Recipe
          </Button>
          <Button variant="outline" size="default" className="px-4">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;