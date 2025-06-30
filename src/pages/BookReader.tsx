
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Bookmark, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  ChevronLeft, 
  ChevronRight,
  ArrowLeft,
  Star
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { dummyBooks } from "@/data/books";
import { Book } from "@/App";
import { useToast } from "@/hooks/use-toast";

interface BookReaderProps {
  onSaveBook: (book: Book) => void;
}

const BookReader = ({ onSaveBook }: BookReaderProps) => {
  const { id } = useParams();
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const book = dummyBooks.find(b => b.id === id);
  
  useEffect(() => {
    if (!book) return;
    
    // Simulate loading book content
    console.log(`Loading book: ${book.title}`);
  }, [book]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">Book not found</h2>
          <p className="text-muted-foreground mb-4">The book you're looking for doesn't exist.</p>
          <NavLink to="/library">
            <Button>Back to Library</Button>
          </NavLink>
        </div>
      </div>
    );
  }

  const handleSaveBook = () => {
    onSaveBook(book);
    setIsBookmarked(true);
    toast({
      title: "Book saved!",
      description: `"${book.title}" has been added to your library.`,
    });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Bookmark removed" : "Page bookmarked",
      description: isBookmarked 
        ? "Bookmark has been removed from this page." 
        : `Page ${currentPage} has been bookmarked.`,
    });
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, book.pages));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <NavLink to="/library">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Library
              </Button>
            </NavLink>
            <div>
              <h1 className="font-playfair text-lg font-semibold">{book.title}</h1>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm px-2">{zoom}%</span>
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleBookmark}>
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current text-book-primary' : ''}`} />
            </Button>
            <Button variant="outline" size="sm" onClick={toggleFullscreen}>
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Book Content */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] lg:h-[800px]">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Mock PDF Content */}
                <div 
                  className="flex-1 bg-white border rounded-lg p-8 overflow-auto"
                  style={{ fontSize: `${zoom}%` }}
                >
                  <div className="max-w-2xl mx-auto">
                    <h1 className="font-playfair text-3xl font-bold mb-6 text-book-dark">
                      {book.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Chapter {Math.ceil(currentPage / 20)} - Page {currentPage}
                    </p>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="mb-4">
                        {book.description}
                      </p>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p className="mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p className="mb-4">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p className="mb-4">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Page Navigation */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {book.pages}
                  </span>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleNextPage}
                    disabled={currentPage === book.pages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Book Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="font-playfair">Book Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-playfair text-lg font-semibold">{book.title}</h3>
                  <p className="text-muted-foreground">by {book.author}</p>
                  
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-foreground">{book.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Genre:</span>
                    <span>{book.genre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pages:</span>
                    <span>{book.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Published:</span>
                    <span>{book.publishedYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Progress:</span>
                    <span>{Math.round((currentPage / book.pages) * 100)}%</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleSaveBook}
                  className="w-full book-gradient text-white hover:opacity-90 transition-opacity"
                  disabled={isBookmarked}
                >
                  <Bookmark className="h-4 w-4 mr-2" />
                  {isBookmarked ? "Saved to Library" : "Save to Library"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReader;
