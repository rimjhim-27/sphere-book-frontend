
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "@/App";
import { BookOpen, Star, Bookmark } from "lucide-react";
import { NavLink } from "react-router-dom";

interface BookCardProps {
  book: Book;
  onSave?: (book: Book) => void;
  onRemove?: (bookId: string) => void;
  showRemove?: boolean;
}

const BookCard = ({ book, onSave, onRemove, showRemove }: BookCardProps) => {
  return (
    <Card className="book-card-hover bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-book-dark">
              {book.genre}
            </Badge>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center space-x-1 text-yellow-400 mb-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium text-white">{book.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-playfair font-semibold text-lg text-book-dark line-clamp-2 mb-1">
              {book.title}
            </h3>
            <p className="text-sm text-muted-foreground">by {book.author}</p>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {book.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{book.pages} pages</span>
            <span>{book.publishedYear}</span>
          </div>
          
          <div className="flex gap-2">
            <NavLink to={`/book/${book.id}`} className="flex-1">
              <Button className="w-full book-gradient text-white hover:opacity-90 transition-opacity">
                <BookOpen className="h-4 w-4 mr-2" />
                Read Now
              </Button>
            </NavLink>
            
            {showRemove ? (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onRemove?.(book.id)}
                className="px-3"
              >
                Remove
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onSave?.(book)}
                className="px-3"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
