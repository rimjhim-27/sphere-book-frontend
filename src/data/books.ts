
import { Book } from "@/App";

export const dummyBooks: Book[] = [
  {
    id: "1",
    title: "The Digital Revolution",
    author: "Sarah Chen",
    genre: "Technology",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=450&fit=crop",
    description: "An insightful look into how digital transformation is reshaping our world and the future of work.",
    rating: 4.7,
    pages: 324,
    publishedYear: 2023,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "2",
    title: "Mindful Leadership",
    author: "Dr. Michael Torres",
    genre: "Business",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=450&fit=crop",
    description: "Transform your leadership approach with mindfulness techniques that inspire teams and drive results.",
    rating: 4.5,
    pages: 256,
    publishedYear: 2023,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "3",
    title: "Code & Coffee",
    author: "Elena Rodriguez",
    genre: "Technology",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=450&fit=crop",
    description: "A programmer's journey through late-night coding sessions and the art of building beautiful software.",
    rating: 4.8,
    pages: 298,
    publishedYear: 2024,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "4",
    title: "The Art of Algorithms",
    author: "James Park",
    genre: "Education",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=450&fit=crop",
    description: "Master the fundamentals of computer science with clear explanations and practical examples.",
    rating: 4.6,
    pages: 412,
    publishedYear: 2023,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "5",
    title: "Matrix Decoded",
    author: "Neo Anderson",
    genre: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    description: "A thrilling sci-fi adventure that questions the nature of reality and human consciousness.",
    rating: 4.9,
    pages: 387,
    publishedYear: 2024,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "6",
    title: "Web Development Mastery",
    author: "Alex Kim",
    genre: "Technology",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=450&fit=crop",
    description: "From HTML basics to advanced React patterns, become a full-stack web development expert.",
    rating: 4.4,
    pages: 503,
    publishedYear: 2023,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "7",
    title: "Modern MacBook Guide",
    author: "Jennifer Apple",
    genre: "Technology",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=450&fit=crop",
    description: "Unlock the full potential of your MacBook with tips, tricks, and productivity hacks.",
    rating: 4.3,
    pages: 198,
    publishedYear: 2024,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "8",
    title: "Digital Workspace",
    author: "Ryan Miller",
    genre: "Business",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=450&fit=crop",
    description: "Create efficient and inspiring workspaces that boost productivity and creativity.",
    rating: 4.2,
    pages: 267,
    publishedYear: 2023,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "9",
    title: "The Cozy Corner",
    author: "Maria Santos",
    genre: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=450&fit=crop",
    description: "A heartwarming story about finding home in unexpected places and the people who make it special.",
    rating: 4.7,
    pages: 289,
    publishedYear: 2024,
    pdfUrl: "https://example.com/sample.pdf"
  },
  {
    id: "10",
    title: "Remote Work Revolution",
    author: "David Chang",
    genre: "Business",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=450&fit=crop",
    description: "Navigate the future of work with strategies for successful remote teams and digital collaboration.",
    rating: 4.5,
    pages: 345,
    publishedYear: 2023,
    pdfUrl: "https://example.com/sample.pdf"
  }
];

export const genres = [
  "All Genres",
  "Technology",
  "Business",
  "Fiction",
  "Education",
  "Science",
  "History",
  "Biography",
  "Self-Help",
  "Mystery",
  "Romance"
];

export const getFeaturedBooks = () => dummyBooks.slice(0, 6);
export const getTrendingBooks = () => dummyBooks.slice(3, 9);
export const getNewArrivals = () => dummyBooks.filter(book => book.publishedYear === 2024);
