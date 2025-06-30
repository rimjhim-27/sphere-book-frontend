
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Star, BookOpen } from "lucide-react";
import BookCard from "@/components/BookCard";
import { getTrendingBooks, getNewArrivals } from "@/data/books";
import { Book } from "@/App";
import { useToast } from "@/hooks/use-toast";

interface VirtualShowProps {
  onSaveBook: (book: Book) => void;
}

const VirtualShow = ({ onSaveBook }: VirtualShowProps) => {
  const { toast } = useToast();
  const trendingBooks = getTrendingBooks();
  const newArrivals = getNewArrivals();

  const handleSaveBook = (book: Book) => {
    onSaveBook(book);
    toast({
      title: "Book saved!",
      description: `"${book.title}" has been added to your library.`,
    });
  };

  const handleRegisterEvent = (eventTitle: string) => {
    toast({
      title: "Event Registration",
      description: `You've been registered for "${eventTitle}". Check your email for details.`,
    });
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Future of Technology in Literature",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      time: "2:00 PM EST",
      attendees: 1250,
      description: "Exploring how AI and digital transformation are reshaping storytelling and reading experiences."
    },
    {
      id: 2,
      title: "Mindful Leadership Book Launch",
      author: "Dr. Michael Torres",
      date: "2024-01-20",
      time: "7:00 PM EST",
      attendees: 800,
      description: "Join the author for an exclusive launch event and Q&A session about mindful leadership practices."
    },
    {
      id: 3,
      title: "Coding Stories: From Novice to Expert",
      author: "Elena Rodriguez",
      date: "2024-01-25",
      time: "6:00 PM EST",
      attendees: 950,
      description: "A programmer's journey through the world of code, coffee, and continuous learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-book-warm to-white">
      {/* Hero Section */}
      <section className="py-20 book-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Virtual Book
              <span className="block text-book-accent">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join live author events, discover trending books, and connect with the global reading community.
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>50K+ Attendees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Weekly Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>Top Authors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-book-dark">
              Trending Now
            </h2>
            <p className="text-lg text-muted-foreground">
              The most popular books in our virtual showcase this week
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingBooks.map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                onSave={handleSaveBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-book-dark">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join live author talks, book launches, and reading discussions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="book-card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-book-primary/10 text-book-primary">
                      Live Event
                    </Badge>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">{event.attendees}</span>
                    </div>
                  </div>
                  <CardTitle className="font-playfair text-xl mb-2">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    with {event.author}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-book-primary" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-book-primary" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full book-gradient text-white hover:opacity-90 transition-opacity"
                    onClick={() => handleRegisterEvent(event.title)}
                  >
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-book-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-book-dark">
              New Arrivals
            </h2>
            <p className="text-lg text-muted-foreground">
              Fresh releases from our featured authors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                onSave={handleSaveBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-book-dark">
              Featured Authors
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the brilliant minds behind your favorite books
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                bio: "Technology futurist and bestselling author",
                books: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Elena Rodriguez",
                bio: "Software engineer turned storyteller",
                books: 3,
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Dr. Michael Torres",
                bio: "Leadership expert and mindfulness advocate",
                books: 4,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
              }
            ].map((author, index) => (
              <Card key={index} className="text-center book-card-hover">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={author.image} 
                      alt={author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    {author.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {author.bio}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-book-primary">
                    <BookOpen className="h-4 w-4" />
                    <span>{author.books} Books Published</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualShow;
