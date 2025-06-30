
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Library from "./pages/Library";
import VirtualShow from "./pages/VirtualShow";
import Auth from "./pages/Auth";
import BookReader from "./pages/BookReader";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  coverImage: string;
  description: string;
  rating: number;
  pages: number;
  publishedYear: number;
  pdfUrl?: string;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [savedBooks, setSavedBooks] = useState<Book[]>([]);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSaveBook = (book: Book) => {
    if (!savedBooks.find(b => b.id === book.id)) {
      setSavedBooks([...savedBooks, book]);
    }
  };

  const handleRemoveBook = (bookId: string) => {
    setSavedBooks(savedBooks.filter(b => b.id !== bookId));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar user={user} onLogout={handleLogout} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index onSaveBook={handleSaveBook} />} />
                <Route path="/library" element={<Library onSaveBook={handleSaveBook} />} />
                <Route path="/virtual-show" element={<VirtualShow onSaveBook={handleSaveBook} />} />
                <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
                <Route path="/book/:id" element={<BookReader onSaveBook={handleSaveBook} />} />
                <Route path="/dashboard" element={<Dashboard user={user} savedBooks={savedBooks} onRemoveBook={handleRemoveBook} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
