import Link from 'next/link';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export const metadata = {
  title: 'Memahami Faktor Risiko Diabetes Tipe 2 - DiaMate Blog',
  description: 'Pahami berbagai faktor risiko diabetes seperti genetik, pola makan, dan bagaimana mengelolanya secara efektif untuk pencegahan yang lebih baik.'
};

export default function FaktorRisikoDiabetes() {
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Memahami Faktor Risiko Diabetes Tipe 2</h1>
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
                Diabetes tipe 2 merupakan penyakit metabolik yang ditandai dengan kadar gula darah tinggi akibat resistensi insulin atau kekurangan produksi insulin relatif. Berbeda dengan diabetes tipe 1 yang umumnya disebabkan oleh faktor autoimun, diabetes tipe 2 lebih banyak dipengaruhi oleh gaya hidup dan faktor genetik.
              </p>
              <p>
                Memahami faktor risiko diabetes tipe 2 sangat penting untuk pencegahan dan pengelolaan yang efektif. Berikut adalah beberapa faktor risiko utama yang perlu diperhatikan.
              </p>
              <h2>Faktor Risiko yang Tidak Dapat Dimodifikasi</h2>
              <p>
                Beberapa faktor risiko tidak dapat diubah, tetapi penting untuk diketahui sebagai bagian dari kesadaran diri:
              </p>
              <ul>
                <li><strong>Genetik dan riwayat keluarga</strong> - Risiko diabetes meningkat jika orang tua atau saudara kandung memiliki diabetes tipe 2.</li>
                <li><strong>Usia</strong> - Risiko diabetes tipe 2 meningkat seiring bertambahnya usia, terutama setelah 45 tahun.</li>
                <li><strong>Etnis</strong> - Beberapa kelompok etnis memiliki risiko lebih tinggi, termasuk Asia Selatan, Afrika, dan Hispanik.</li>
                <li><strong>Riwayat diabetes gestasional</strong> - Wanita yang mengalami diabetes selama kehamilan memiliki risiko lebih tinggi mengembangkan diabetes tipe 2 di kemudian hari.</li>
              </ul>
              <h2>Faktor Risiko yang Dapat Dimodifikasi</h2>
              <p>
                Faktor-faktor berikut dapat dimodifikasi melalui perubahan gaya hidup:
              </p>
              <ul>
                <li><strong>Kelebihan berat badan dan obesitas</strong> - Terutama penumpukan lemak di area perut.</li>
                <li><strong>Kurangnya aktivitas fisik</strong> - Aktivitas fisik membantu mengontrol berat badan dan menggunakan glukosa sebagai energi.</li>
                <li><strong>Pola makan tidak sehat</strong> - Konsumsi tinggi gula, karbohidrat olahan, dan rendah serat.</li>
                <li><strong>Hipertensi</strong> - Tekanan darah tinggi sering berhubungan dengan resistensi insulin.</li>
                <li><strong>Kolesterol abnormal</strong> - Kadar HDL rendah dan trigliserida tinggi.</li>
                <li><strong>Merokok</strong> - Meningkatkan risiko diabetes dan komplikasinya.</li>
                <li><strong>Gangguan tidur</strong> - Termasuk sleep apnea dan kurang tidur kronisk.</li>
              </ul>
              <h2>Langkah Pencegahan dan Pengelolaan</h2>
              <p>
                Memahami faktor risiko adalah langkah pertama dalam pencegahan dan pengelolaan diabetes. Berikut beberapa rekomendasi untuk mengurangi risiko:
              </p>
              <ol>
                <li><strong>Pertahankan berat badan sehat</strong> - Bahkan penurunan berat badan moderat (5-10%) dapat mengurangi risiko secara signifikan.</li>
                <li><strong>Aktivitas fisik teratur</strong> - Minimal 150 menit aktivitas aerobik intensitas sedang per minggu.</li>
                <li><strong>Pola makan seimbang</strong> - Perbanyak sayuran, buah-buahan, biji-bijian utuh, dan protein tanpa lemak.</li>
                <li><strong>Kontrol tekanan darah dan kolesterol</strong> - Pemeriksaan rutin dan pengelolaan yang tepat.</li>
                <li><strong>Hindari merokok</strong> - Dan batasi konsumsi alkohol.</li>
                <li><strong>Pemeriksaan rutin</strong> - Terutama bagi individu dengan faktor risiko tinggi.</li>
              </ol>
              <p>
                DiaMate hadir untuk membantu Anda mengelola faktor risiko diabetes melalui pemantauan kesehatan yang komprehensif dan personalisasi. Dengan memahami faktor risiko dan mengambil langkah proaktif, Anda dapat secara signifikan mengurangi kemungkinan terkena diabetes tipe 2 atau mengelolanya dengan lebih efektif.
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 