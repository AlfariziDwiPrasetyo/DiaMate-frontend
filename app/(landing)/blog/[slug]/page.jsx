import Link from 'next/link';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export async function generateMetadata({ params }) {
  const slug = params.slug;
  // In a real app, fetch the blog post data based on the slug
  return {
    title: `${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - DiaMate Blog`,
    description: 'Informasi kesehatan terkini dan tips pengelolaan diabetes'
  };
}

export default function BlogPost({ params }) {
  const slug = params.slug;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <>
      <Navbar />
      <div className="mt-20 pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-[#00A8FF] hover:text-[#0086CC] flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Kembali ke Artikel
            </Link>
            
            <div className="bg-gray-200 h-64 md:h-96 rounded-2xl mb-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">12 Mei 2023</span>
                <span className="bg-[#00A8FF]/10 text-[#00A8FF] text-xs font-medium px-3 py-1 rounded-full">
                  Kesehatan
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Spesialis Endokrinologi</p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor augue non fermentum porta. Morbi blandit feugiat consequat. Vivamus vestibulum lacus et diam feugiat, a rhoncus lectus pretium.
              </p>
              <p>
                Proin ac velit vel est ultrices congue non vitae felis. Vivamus efficitur, nisi vitae aliquam malesuada, magna felis volutpat magna, eget fermentum ex sem ac ante. Cras porttitor augue non fermentum porta.
              </p>
              <h2>Pentingnya Pemahaman Faktor Risiko</h2>
              <p>
                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi massa, vitae pulvinar metus scelerisque in. Aliquam id dolor cursus, sagittis arcu tincidunt, scelerisque nisi. Morbi scelerisque feugiat mi in faucibus.
              </p>
              <p>
                Maecenas faucibus neque in nulla tincidunt, vitae gravida enim pretium. Cras hendrerit, dolor sit amet rutrum faucibus, urna dolor rhoncus augue, vel congue arcu tortor non sem. Morbi blandit feugiat consequat.
              </p>
              <ul>
                <li>Riwayat keluarga dengan diabetes</li>
                <li>Kurang aktivitas fisik</li>
                <li>Pola makan tidak sehat</li>
                <li>Kelebihan berat badan</li>
                <li>Tekanan darah tinggi</li>
              </ul>
              <h2>Langkah Pencegahan</h2>
              <p>
                Proin ac velit vel est ultrices congue non vitae felis. Vivamus efficitur, nisi vitae aliquam malesuada, magna felis volutpat magna, eget fermentum ex sem ac ante. Aliquam id dolor cursus, sagittis arcu tincidunt, scelerisque nisi.
              </p>
              <p>
                Aenean ut purus mattis, vehicula magna ut, maximus magna. Sed vitae enim sit amet velit eleifend viverra non at elit. Quisque tincidunt est vel vulputate gravida. Sed vitae enim sit amet velit eleifend viverra non at elit.
              </p>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold mb-6">Artikel Terkait</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/gaya-hidup-sehat" className="group">
                  <div className="bg-gray-200 h-40 rounded-lg mb-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium group-hover:text-[#00A8FF] transition-colors">Perubahan Gaya Hidup untuk Pencegahan</h4>
                </Link>
                <Link href="/blog/ai-dalam-kesehatan" className="group">
                  <div className="bg-gray-200 h-40 rounded-lg mb-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium group-hover:text-[#00A8FF] transition-colors">AI dalam Layanan Kesehatan, Masa Depan</h4>
                </Link>
                <Link href="#" className="group">
                  <div className="bg-gray-200 h-40 rounded-lg mb-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium group-hover:text-[#00A8FF] transition-colors">Nutrisi Penting untuk Pengaturan Gula Darah</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 