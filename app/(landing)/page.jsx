import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import BlogSection from '@/components/landing/BlogSection';
import Footer from '@/components/landing/Footer';

export const metadata = {
  title: 'DiaMate - Pantau Kesehatan Diabetes Anda',
  description: 'DiaMate membantumu memantau risiko diabetes sejak dini. Kenali risiko diabetes lebih awal dan dapatkan insight personal.'
};

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <BlogSection />
      <Footer />
    </div>
  );
} 