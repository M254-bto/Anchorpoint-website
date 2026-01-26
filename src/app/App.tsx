import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/components/HomePage';
import { AboutPage } from '@/app/components/AboutPage';
import { TrainingPage } from '@/app/components/TrainingPage';
import { BooksPage } from '@/app/components/BooksPage';
import { ContactPage } from '@/app/components/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}