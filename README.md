# 📚 BookSphere – Read Beyond Boundaries

**BookSphere** is a modern e-library and virtual e-book showcase platform that empowers readers to discover, access, and engage with books from anywhere in the world. Designed for ease, inclusivity, and interactivity, BookSphere bridges the gap between traditional libraries and the digital reading experience.

---

## 🔗 Live Demo

🌐 [Visit BookSphere]https://sphere-book-frontend.vercel.app/)  


---

## 💡 Inspiration

The idea for BookSphere stemmed from a simple question: _What if accessing quality books was as easy and exciting as streaming movies or music?_  
We aimed to build a centralized platform for readers—especially in rural or underserved areas—to access books digitally in an engaging, inclusive way.

---

## 🚀 Features

- 📖 Browse, preview, and read e-books online
- 🔍 Smart search by title, author, or genre
- 📁 Personalized bookshelf (save your favorites)
- 🌐 Virtual Book Show (curated expos and new releases)
- 🧑‍🤝‍🧑 Reading clubs and community discussions
- 📤 Admin dashboard to upload and manage books
- 🔐 Secure login/signup with JWT authentication
- 📱 Mobile-friendly responsive design

---

## ⚙️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS

### Backend:
- Node.js + Express.js
- MongoDB (NoSQL)
- JWT for authentication

### Storage & Hosting:
- Cloudinary (book covers, PDFs)
- Vercel (frontend hosting)
- Render (backend hosting)

---

## ☁️ AWS Tools Used

- **AWS Lambda** – Serverless backend logic (uploading books, search queries, bookshelf data)
- **Amazon API Gateway** – Exposes RESTful APIs to frontend
- **Amazon S3** – Book storage (alternative to Cloudinary)


---

## 🧠 How We Used AWS Lambda

BookSphere’s backend functions were modularized using **AWS Lambda**, allowing us to run serverless logic for core operations without managing infrastructure. Lambda functions were triggered through **API Gateway** endpoints like:

- `/search-books` – Processes user input and queries the database
- `/add-book` – Authenticated admin book upload
- `/user-library` – Retrieves a user's saved books
- `/auth/signup` and `/auth/login` – Handles secure JWT-based authentication

By using Lambda, we ensured:
- Auto-scaling without provisioning servers
- Faster development and deployment cycles
- Minimal downtime and reduced backend costs

Logs from AWS CloudWatch helped us debug and optimize these Lambda functions efficiently.

---

## 📸 Demo Screenshots

| Screenshot | What it Shows |
|------------|----------------|
| Homepage   | Featured books, clean layout, genre filter |
| Book Details | Book preview, metadata, "Add to Library" |
| Admin Panel | Upload form for new books |
| Search Page | Search/filter in action |
| Mobile View | Responsive layout across devices |

---

## 🧩 Challenges We Overcame

1. **PDF Rendering:** Ensuring smooth previewing of large PDFs inside browser
2. **JWT Handling:** Managing secure user sessions
3. **Search Performance:** Efficient querying and filtering across genres
4. **Time Constraints:** Prioritizing MVP features during hackathon

---

## 🧠 What We Learned

- Practical usage of AWS Lambda in real-world serverless applications
- REST API design and integration with MongoDB
- Secure and scalable file upload & preview handling
- React state management and component-based design

---

## 🏁 Future Scope

- Real-time reading rooms using WebSockets
- Integration with text-to-speech (TTS) APIs
- Partnership with authors/publishers for exclusive releases
- Multi-language e-books and accessibility tools

---

## 🙌 Team

Made with  by Rimjhim .

---

## ✨ Quote

> “A reader lives a thousand lives before they die.”  
> BookSphere makes each one count.

