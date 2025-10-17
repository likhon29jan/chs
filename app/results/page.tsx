import type { Metadata } from 'next';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'ফলাফল | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের পরীক্ষার ফলাফল, এসএসসি রেজাল্ট এবং অন্যান্য পরীক্ষার ফলাফল দেখুন',
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
          ফলাফল
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <a
            href="//www.jessoreboard.gov.bd/resultjbh25/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="text-center">
              <i className="fa fa-graduation-cap text-5xl mb-4" />
              <h2 className="text-2xl font-bold mb-2">HSC Result 2025</h2>
              <p className="text-sm opacity-90">উচ্চ মাধ্যমিক পরীক্ষার ফলাফল</p>
            </div>
          </a>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <i className="fa fa-file-text text-5xl mb-4" />
              <h2 className="text-2xl font-bold mb-2">SSC Result</h2>
              <p className="text-sm opacity-90">মাধ্যমিক পরীক্ষার ফলাফল</p>
              <p className="text-xs mt-2">(শীঘ্রই প্রকাশিত হবে)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <i className="fa fa-list-alt text-5xl mb-4" />
              <h2 className="text-2xl font-bold mb-2">Test Exam Results</h2>
              <p className="text-sm opacity-90">সাময়িক পরীক্ষার ফলাফল</p>
              <p className="text-xs mt-2">(শীঘ্রই প্রকাশিত হবে)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            <i className="fa fa-trophy mr-3" />
            সাম্প্রতিক সাফল্য
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-lg text-yellow-800 mb-2">🏆 মেধাবী শিক্ষার্থী</h3>
              <p className="text-gray-700">
                আমাদের বিদ্যালয়ের শিক্ষার্থীরা নিয়মিত বৃত্তি এবং বোর্ড পরীক্ষায় উত্তীর্ণ হচ্ছে।
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-green-800 mb-2">📚 পাসের হার</h3>
              <p className="text-gray-700">
                প্রতি বছর আমাদের বিদ্যালয়ের পাসের হার উন্নতি হচ্ছে।
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-blue-800 mb-2">🎯 লক্ষ্য</h3>
              <p className="text-gray-700">
                ১০০% পাসের হার এবং সর্বোচ্চ জিপিএ অর্জন আমাদের লক্ষ্য।
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">
            <i className="fa fa-info-circle mr-2" />
            ফলাফল সম্পর্কিত তথ্য
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <i className="fa fa-check text-blue-600 mt-1" />
              <span>সকল পাবলিক পরীক্ষার ফলাফল যশোর শিক্ষা বোর্ডের ওয়েবসাইটে প্রকাশিত হয়</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa fa-check text-blue-600 mt-1" />
              <span>অভ্যন্তরীণ পরীক্ষার ফলাফল বিদ্যালয়ে সংরক্ষিত থাকে</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa fa-check text-blue-600 mt-1" />
              <span>ফলাফল সংক্রান্ত যেকোনো তথ্যের জন্য বিদ্যালয়ে যোগাযোগ করুন</span>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
