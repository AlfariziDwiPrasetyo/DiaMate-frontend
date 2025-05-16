import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - DiaMate',
  description: 'Artikel dan wawasan tentang kesehatan diabetes dan tips pengelolaan yang efektif.'
};

export default function BlogPage() {
  const featuredPost = {
    image: "/blog/faktor-risiko.jpg",
    title: "Memahami Faktor Risiko Diabetes Tipe 2",
    date: "12 Mei 2023",
    excerpt: "Pahami berbagai faktor risiko diabetes seperti genetik, pola makan, dan bagaimana mengelolanya secara efektif untuk pencegahan yang lebih baik.",
    link: "/blog/faktor-risiko-diabetes",
  };

  const blogPosts = [
    {
      image: "/blog/gaya-hidup.jpg",
      title: "Perubahan Gaya Hidup untuk Pencegahan",
      date: "5 Mei 2023",
      excerpt: "Modifikasi gaya hidup sederhana namun efektif yang dapat membantu mengurangi risiko diabetes Anda.",
      link: "/blog/gaya-hidup-sehat",
      category: "Gaya Hidup",
    },
    {
      image: "/blog/ai-health.jpg",
      title: "AI dalam Layanan Kesehatan, Masa Depan",
      date: "28 April 2023",
      excerpt: "Menjelajahi bagaimana teknologi kecerdasan buatan sedang merevolusi deteksi dini dan pengobatan diabetes.",
      link: "/blog/ai-dalam-kesehatan",
      category: "Teknologi",
    },
    {
      image: "/blog/nutrition.jpg",
      title: "Nutrisi Penting untuk Pengaturan Gula Darah",
      date: "15 April 2023",
      excerpt: "Panduan lengkap tentang makanan dan nutrisi yang mendukung kadar gula darah yang stabil.",
      link: "#",
      category: "Nutrisi",
    },
    {
      image: "/blog/exercise.jpg",
      title: "Latihan Terbaik untuk Penderita Diabetes",
      date: "5 April 2023",
      excerpt: "Rutinitas latihan yang direkomendasikan untuk mengelola diabetes dan meningkatkan sensitivitas insulin.",
      link: "#",
      category: "Olahraga",
    },
    {
      image: "/blog/mental-health.jpg",
      title: "Aspek Psikologis dalam Pengelolaan Diabetes",
      date: "28 Maret 2023",
      excerpt: "Memahami hubungan antara kesehatan mental dan manajemen diabetes yang efektif.",
      link: "#",
      category: "Kesehatan Mental",
    },
  ];

  const categories = ["Semua", "Gaya Hidup", "Nutrisi", "Olahraga", "Teknologi", "Kesehatan Mental"];

  return (
    <>
      <Navbar />
      <div className="mt-20 pt-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Artikel & Wawasan</h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Temukan artikel terbaru, tips kesehatan, dan wawasan tentang diabetes dan kesehatan secara umum
          </p>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="bg-[#00A8FF]/10 text-[#00A8FF] text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                    Artikel Unggulan
                  </div>
                  <Link href={featuredPost.link}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-[#00A8FF] transition-colors">
                      {featuredPost.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    <Link href={featuredPost.link} className="text-[#00A8FF] font-medium hover:text-[#0086CC] transition-colors">
                      Baca selengkapnya →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    index === 0
                      ? "bg-[#00A8FF] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="bg-[#00A8FF]/10 text-[#00A8FF] text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Link href={post.link}>
                    <h3 className="text-xl font-semibold mb-3 hover:text-[#00A8FF] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link href={post.link} className="text-[#00A8FF] font-medium hover:text-[#0086CC] transition-colors">
                    Baca selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-[#00A8FF] to-[#0086CC] rounded-2xl text-white p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Dapatkan Artikel Terbaru di Email Anda</h2>
              <p className="mb-6 opacity-90">
                Berlangganan newsletter kami untuk mendapatkan artikel kesehatan terbaru dan tips pengelolaan diabetes langsung ke kotak masuk Anda.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-[#00A8FF] font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Berlangganan
                </button>
              </form>
              <p className="mt-4 text-sm opacity-75">
                Kami menghormati privasi Anda. Anda dapat berhenti berlangganan kapan saja.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 