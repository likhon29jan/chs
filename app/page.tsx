import Header from './components/Header';
import Navigation from './components/Navigation';
import NewsMarquee from './components/NewsMarquee';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <NewsMarquee />
      <MainContent />
      <Footer />
    </div>
  );
}
