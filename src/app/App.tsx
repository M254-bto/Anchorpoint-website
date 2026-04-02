import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/components/HomePage';
import { AboutPage } from '@/app/components/AboutPage';
import { TrainingPage } from '@/app/components/TrainingPage';
import { BooksPage } from '@/app/components/BooksPage';
import { BlogsPage } from '@/app/components/BlogsPage';
import { PodcastsPage } from '@/app/components/PodcastsPage';
import { EventsPage } from '@/app/components/EventsPage';
import { ContactPage } from '@/app/components/ContactPage';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/podcasts" element={<PodcastsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}