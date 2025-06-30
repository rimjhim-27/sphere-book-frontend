
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, Users, Globe, BookmarkPlus } from "lucide-react";
import { NavLink } from "react-router-dom";
import BookCard from "@/components/BookCard";
import { dummyBooks, getFeaturedBooks, genres } from "@/data/books";
import { Book } from "@/App";
import { useToast } from "@/hooks/use-toast";

interface IndexProps {
  onSaveBook: (book: Book) => void;
}

const Index = ({ onSaveBook }: IndexProps) => {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const { toast } = useToast();
  
  const featuredBooks = getFeaturedBooks();
  
  const filteredBooks = selectedGenre === "All Genres" 
    ? dummyBooks 
    : dummyBooks.filter(book => book.genre === selectedGenre);

  const handleSaveBook = (book: Book) => {
    onSaveBook(book);
    toast({
      title: "Book saved!",
      description: `"${book.title}" has been added to your library.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 book-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Read Beyond
              <span className="block text-book-accent">Boundaries</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              Discover thousands of books, connect with fellow readers, and embark on literary adventures that know no limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <NavLink to="/library">
                <Button size="lg" className="bg-white text-book-primary hover:bg-white/90 transition-colors">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Library
                </Button>
              </NavLink>
              <NavLink to="/virtual-show">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Virtual Show
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-book-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-book-primary rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-book-dark">10,000+</h3>
              <p className="text-muted-foreground">Books Available</p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-book-secondary rounded-full mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-book-dark">50,000+</h3>
              <p className="text-muted-foreground">Active Readers</p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-book-accent rounded-full mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-book-dark">100+</h3>
              <p className="text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-book-dark">
              Featured Books
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of trending and highly-rated books across all genres.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredBooks.map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                onSave={handleSaveBook}
              />
            ))}
          </div>
          
          <div className="text-center">
            <NavLink to="/library">
              <Button size="lg" className="book-gradient text-white hover:opacity-90 transition-opacity">
                View All Books
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-book-dark">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find your next great read in your favorite genre
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {genres.map((genre) => (
              <Badge
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                  selectedGenre === genre 
                    ? "bg-book-primary text-white hover:bg-book-primary/90" 
                    : "hover:bg-book-primary/10"
                }`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.slice(0, 8).map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                onSave={handleSaveBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 book-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <BookmarkPlus className="h-16 w-16 mx-auto mb-6 text-book-accent" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Reading Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of book lovers who have already discovered their next favorite read on BookSphere.
            </p>
            <NavLink to="/auth">
              <Button size="lg" className="bg-white text-book-primary hover:bg-white/90 transition-colors">
                Get Started Today
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
