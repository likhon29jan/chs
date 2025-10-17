import type { Metadata } from 'next';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NewsMarquee from './components/NewsMarquee';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'চলিশীয়া উচ্চ বিদ্যালয় | Chalishia High School - EIIN: 115498',
  description: 'চলিশীয়া উচ্চ বিদ্যালয় (Chalishia High School) - বেসরকারি মাধ্যমিক বিদ্যালয়, EIIN: 115498, ৩ নং চলিশীয়া ইউনিয়ন, অভয়নগর উপজেলা, যশোর জেলা। প্রধান শিক্ষক: মোস্তাক আহম্মেদ। যশোর শিক্ষা বোর্ড অধীনস্থ।',
  keywords: [
    'চলিশীয়া উচ্চ বিদ্যালয়',
    'Chalishia High School',
    'EIIN 115498',
    'যশোর জেলা স্কুল',
    'অভয়নগর উপজেলা',
    'চলিশীয়া ইউনিয়ন',
    'বেসরকারি স্কুল',
    'Jessore Board School',
    'মোস্তাক আহম্মেদ',
    'নোয়াপাড়া',
    'Bangladesh Secondary School',
  ],
};

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
