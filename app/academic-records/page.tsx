import type { Metadata } from 'next';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'একাডেমিক রেকর্ড | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের একাডেমিক রেকর্ড, শিক্ষাবর্ষ, পরীক্ষা এবং ফলাফল',
};

export default function AcademicRecordsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
          একাডেমিক রেকর্ড
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              <i className="fa fa-calendar-check-o mr-3" />
              শিক্ষাবর্ষ তথ্য
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">চলতি শিক্ষাবর্ষ</h3>
                <p className="text-gray-600">২০২৫</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">শ্রেণী</h3>
                <p className="text-gray-600">ষষ্ঠ থেকে দশম শ্রেণী</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">শিক্ষার্থী সংখ্যা</h3>
                <p className="text-gray-600">আপডেট হচ্ছে...</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              <i className="fa fa-line-chart mr-3" />
              একাডেমিক পারফরম্যান্স
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">এসএসসি পাসের হার</h3>
                <p className="text-gray-600">শীঘ্রই প্রকাশ করা হবে</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">জিপিএ ৫ প্রাপ্ত</h3>
                <p className="text-gray-600">শীঘ্রই প্রকাশ করা হবে</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">বৃত্তি প্রাপ্ত শিক্ষার্থী</h3>
                <p className="text-gray-600">শীঘ্রই প্রকাশ করা হবে</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg text-center">
            <i className="fa fa-book text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">সাময়িক পরীক্ষা</h3>
            <p className="text-sm opacity-90">বছরে ৩টি সাময়িক পরীক্ষা</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
            <i className="fa fa-edit text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">বার্ষিক পরীক্ষা</h3>
            <p className="text-sm opacity-90">শিক্ষাবর্ষ শেষে বার্ষিক পরীক্ষা</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg text-center">
            <i className="fa fa-certificate text-4xl mb-3" />
            <h3 className="text-xl font-bold mb-2">পাবলিক পরীক্ষা</h3>
            <p className="text-sm opacity-90">এসএসসি পরীক্ষা (দশম শ্রেণী)</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            <i className="fa fa-link mr-3" />
            গুরুত্বপূর্ণ লিংক
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="//www.jessoreboard.gov.bd/resultjbh25/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <i className="fa fa-external-link text-green-600 text-xl" />
              <span className="text-gray-800 font-semibold">HSC Result 2025</span>
            </a>
            <a
              href="//student.jessoreboard.gov.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <i className="fa fa-external-link text-blue-600 text-xl" />
              <span className="text-gray-800 font-semibold">Student Management</span>
            </a>
            <a
              href="//jessoreboard.gov.bd/epd_online"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <i className="fa fa-external-link text-purple-600 text-xl" />
              <span className="text-gray-800 font-semibold">Head/Examiner</span>
            </a>
            <a
              href="//otp.jessoreboard.gov.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
            >
              <i className="fa fa-external-link text-orange-600 text-xl" />
              <span className="text-gray-800 font-semibold">OTP System</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
