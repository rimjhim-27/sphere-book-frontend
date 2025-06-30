
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, Star, TrendingUp, Calendar, Clock } from "lucide-react";
import BookCard from "@/components/BookCard";
import { User as UserType, Book } from "@/App";
import { NavLink } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface DashboardProps {
  user: UserType | null;
  savedBooks: Book[];
  onRemoveBook: (bookId: string) => void;
}

const Dashboard = ({ user, savedBooks, onRemoveBook }: DashboardProps) => {
  const { toast } = useToast();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <User className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">Please log in</h2>
          <p className="text-muted-foreground mb-4">You need to be logged in to view your dashboard.</p>
          <NavLink to="/auth">
            <button className="bg-book-primary text-white px-6 py-2 rounded-lg hover:bg-book-primary/90 transition-colors">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    );
  }

  const handleRemoveBook = (bookId: string) => {
    const book = savedBooks.find(b => b.id === bookId);
    onRemoveBook(bookId);
    toast({
      title: "Book removed",
      description: book ? `"${book.title}" has been removed from your library.` : "Book has been removed from your library.",
    });
  };

  const totalPages = savedBooks.reduce((sum, book) => sum + book.pages, 0);
  const averageRating = savedBooks.length > 0 
    ? (savedBooks.reduce((sum, book) => sum + book.rating, 0) / savedBooks.length).toFixed(1)
    : "0.0";

  const readingStats = [
    { label: "Books Saved", value: savedBooks.length, icon: BookOpen, color: "text-book-primary" },
    { label: "Total Pages", value: totalPages.toLocaleString(), icon: TrendingUp, color: "text-book-secondary" },
    { label: "Avg Rating", value: averageRating, icon: Star, color: "text-book-accent" },
    { label: "Reading Time", value: `${Math.round(totalPages / 250)}h`, icon: Clock, color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-book-primary rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-book-dark">
                Welcome, {user.name}!
              </h1>
              <p className="text-lg text-muted-foreground">{user.email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-book-primary/10 text-book-primary">
              Reader
            </Badge>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Member since 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-book-dark">
            Your Reading Stats
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {readingStats.map((stat, index) => (
              <Card key={index} className="book-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Bookshelf */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-playfair text-2xl font-bold text-book-dark">
              My Bookshelf
            </h2>
            <NavLink to="/library">
              <button className="text-book-primary hover:text-book-primary/80 text-sm font-medium">
                Browse more books →
              </button>
            </NavLink>
          </div>
          
          {savedBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {savedBooks.map((book) => (
                <BookCard 
                  key={book.id} 
                  book={book} 
                  onRemove={handleRemoveBook}
                  showRemove={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Your bookshelf is empty</h3>
              <p className="text-muted-foreground mb-6">
                Start building your personal library by saving books you want to read.
              </p>
              <NavLink to="/library">
                <button className="bg-book-primary text-white px-6 py-3 rounded-lg hover:bg-book-primary/90 transition-colors">
                  Explore Books
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </section>

      {/* Reading Goals */}
      <section className="py-12 bg-book-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-book-dark">
            Reading Goals
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-book-primary" />
                  <span>Monthly Reading Goal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Books this month</span>
                    <span className="font-semibold">{Math.min(savedBooks.length, 5)} / 5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-book-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((savedBooks.length / 5) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {savedBooks.length >= 5 
                      ? "🎉 Goal achieved! Great job!" 
                      : `${5 - savedBooks.length} more books to reach your goal.`}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-book-secondary" />
                  <span>Reading Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Hours this week</span>
                    <span className="font-semibold">{Math.min(Math.round(totalPages / 250), 10)} / 10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-book-secondary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((Math.round(totalPages / 250) / 10) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Keep up the great reading habit!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
