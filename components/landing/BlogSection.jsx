'use client';

import Link from 'next/link';

const BlogSection = () => {
  const blogPosts = [
    {
      image: "/blog/faktor-risiko.jpg",
      title: "Memahami Faktor Risiko Diabetes Tipe 2",
      date: "12 Mei 2023",
      excerpt: "Pahami berbagai faktor risiko diabetes seperti genetik, pola makan, dan bagaimana mengelolanya secara efektif untuk pencegahan yang lebih baik.",
      category: "Kesehatan",
      link: "/blog/faktor-risiko-diabetes"
    },
    {
      image: "/blog/gaya-hidup.jpg",
      title: "Perubahan Gaya Hidup untuk Pencegahan",
      date: "5 Mei 2023",
      excerpt: "Modifikasi gaya hidup sederhana namun efektif yang dapat membantu mengurangi risiko diabetes Anda.",
      category: "Gaya Hidup",
      link: "/blog/gaya-hidup-sehat"
    },
    {
      image: "/blog/ai-health.jpg",
      title: "AI dalam Layanan Kesehatan, Masa Depan",
      date: "28 April 2023",
      excerpt: "Menjelajahi bagaimana teknologi kecerdasan buatan sedang merevolusi deteksi dini dan pengobatan diabetes.",
      category: "Teknologi",
      link: "/blog/ai-dalam-kesehatan"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Artikel Terbaru
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informasi kesehatan terkini dan tips pengelolaan diabetes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
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
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-[#00A8FF] text-[#00A8FF] font-medium hover:bg-[#00A8FF]/5 transition-colors"
          >
            Lihat Semua Artikel
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 