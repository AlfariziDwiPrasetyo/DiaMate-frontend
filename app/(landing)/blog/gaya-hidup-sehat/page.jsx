import Link from 'next/link';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export const metadata = {
  title: 'Perubahan Gaya Hidup untuk Pencegahan - DiaMate Blog',
  description: 'Modifikasi gaya hidup sederhana namun efektif yang dapat membantu mengurangi risiko diabetes Anda.'
};

export default function GayaHidupSehat() {
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
                <span className="text-sm text-gray-500">5 Mei 2023</span>
                <span className="bg-[#00A8FF]/10 text-[#00A8FF] text-xs font-medium px-3 py-1 rounded-full">
                  Gaya Hidup
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Perubahan Gaya Hidup untuk Pencegahan</h1>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Dr. Maya Wijaya</p>
                  <p className="text-sm text-gray-500">Dokter Umum, Spesialis Gizi</p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Gaya hidup merupakan faktor kunci dalam pencegahan dan pengelolaan risiko diabetes. Berbagai studi ilmiah telah membuktikan bahwa perubahan gaya hidup yang positif tidak hanya dapat menurunkan risiko diabetes tipe 2 hingga 58%, tetapi juga meningkatkan kualitas hidup secara keseluruhan.
              </p>
              <p>
                Pada artikel ini, kita akan membahas beberapa modifikasi gaya hidup yang dapat membantu mengurangi risiko diabetes dan meningkatkan kesehatan secara keseluruhan.
              </p>
              <h2>Aktivitas Fisik: Kunci Utama Pencegahan</h2>
              <p>
                Aktivitas fisik teratur memainkan peran penting dalam pencegahan diabetes. Berikut beberapa rekomendasi:
              </p>
              <ul>
                <li><strong>Minimal 150 menit per minggu</strong> - Lakukan aktivitas aerobik intensitas sedang seperti jalan cepat, berenang, atau bersepeda.</li>
                <li><strong>Latihan kekuatan</strong> - Lakukan latihan kekuatan minimal 2 kali seminggu untuk meningkatkan sensitivitas insulin.</li>
                <li><strong>Kurangi waktu sedentari</strong> - Batasi waktu duduk yang panjang, usahakan untuk bergerak setiap 30 menit sekali.</li>
                <li><strong>Aktivitas sehari-hari</strong> - Tingkatkan aktivitas fisik dalam keseharian seperti menggunakan tangga, berjalan kaki, atau berkebun.</li>
              </ul>
              <h2>Pola Makan Sehat untuk Pencegahan Diabetes</h2>
              <p>
                Pola makan seimbang memainkan peran krusial dalam pencegahan diabetes:
              </p>
              <ul>
                <li><strong>Diet kaya serat</strong> - Konsumsi sayuran, buah-buahan, biji-bijian utuh, dan kacang-kacangan.</li>
                <li><strong>Pilih karbohidrat tepat</strong> - Utamakan karbohidrat kompleks dengan indeks glikemik rendah.</li>
                <li><strong>Batasi gula tambahan</strong> - Kurangi konsumsi minuman manis, makanan olahan, dan camilan manis.</li>
                <li><strong>Protein sehat</strong> - Pilih sumber protein tanpa lemak seperti ikan, ayam tanpa kulit, dan protein nabati.</li>
                <li><strong>Lemak sehat</strong> - Konsumsi lemak tak jenuh seperti minyak zaitun, alpukat, dan kacang-kacangan.</li>
                <li><strong>Pola makan teratur</strong> - Hindari melewatkan waktu makan dan perhatikan porsi yang tepat.</li>
              </ul>
              <h2>Pengelolaan Berat Badan</h2>
              <p>
                Mempertahankan berat badan ideal adalah salah satu faktor terpenting dalam pencegahan diabetes:
              </p>
              <ul>
                <li><strong>Penurunan berat badan moderat</strong> - Mengurangi 5-10% berat badan dapat menurunkan risiko diabetes secara signifikan.</li>
                <li><strong>Fokus pada kebiasaan berkelanjutan</strong> - Hindari diet ketat yang sulit dipertahankan jangka panjang.</li>
                <li><strong>Perhatikan lingkar pinggang</strong> - Lingkar pinggang yang besar meningkatkan risiko diabetes.</li>
              </ul>
              <h2>Manajemen Stres</h2>
              <p>
                Stres kronis dapat meningkatkan kadar gula darah dan berkontribusi pada risiko diabetes:
              </p>
              <ul>
                <li><strong>Teknik relaksasi</strong> - Meditasi, yoga, atau pernapasan dalam.</li>
                <li><strong>Tidur berkualitas</strong> - Usahakan 7-8 jam tidur setiap malam.</li>
                <li><strong>Aktivitas menyenangkan</strong> - Luangkan waktu untuk hobi dan kegiatan yang menyenangkan.</li>
                <li><strong>Dukungan sosial</strong> - Jaga hubungan dengan keluarga dan teman.</li>
              </ul>
              <h2>Hindari Kebiasaan Buruk</h2>
              <p>
                Beberapa kebiasaan secara langsung meningkatkan risiko diabetes:
              </p>
              <ul>
                <li><strong>Berhenti merokok</strong> - Merokok meningkatkan risiko diabetes dan komplikasinya.</li>
                <li><strong>Batasi alkohol</strong> - Konsumsi alkohol berlebihan dapat merusak pankreas dan mengganggu metabolisme glukosa.</li>
              </ul>
              <h2>Pemeriksaan Kesehatan Rutin</h2>
              <p>
                Pemeriksaan kesehatan rutin membantu mendeteksi prediabetes dan faktor risiko lainnya sedini mungkin:
              </p>
              <ul>
                <li><strong>Pemeriksaan gula darah</strong> - Terutama bagi mereka dengan faktor risiko tinggi.</li>
                <li><strong>Pemeriksaan tekanan darah dan kolesterol</strong> - Setidaknya sekali setahun.</li>
                <li><strong>Konsultasi dengan dokter</strong> - Diskusikan riwayat kesehatan keluarga dan risiko personal Anda.</li>
              </ul>
              <p>
                DiaMate hadir untuk mendukung perubahan gaya hidup positif Anda melalui pemantauan kesehatan yang komprehensif dan personalisasi. Dengan memulai perubahan kecil namun konsisten, Anda telah mengambil langkah besar dalam mencegah diabetes dan meningkatkan kesehatan secara keseluruhan.
              </p>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold mb-6">Artikel Terkait</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/faktor-risiko-diabetes" className="group">
                  <div className="bg-gray-200 h-40 rounded-lg mb-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium group-hover:text-[#00A8FF] transition-colors">Memahami Faktor Risiko Diabetes Tipe 2</h4>
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