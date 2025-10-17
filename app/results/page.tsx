import type { Metadata } from 'next';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'ফলাফল | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের পরীক্ষার ফলাফল, এসএসসি রেজাল্ট এবং অন্যান্য পরীক্ষার ফলাফল দেখুন',
};

export default function ResultsPage() {
  return (
    <PageShell
      title="ফলাফল"
      description="চলিশীয়া উচ্চ বিদ্যালয়ের পরীক্ষার ফলাফল এবং সাম্প্রতিক সাফল্য"
      contentClassName="space-y-10"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="//www.jessoreboard.gov.bd/resultjbh25/index.php"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-center text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <i className="fa fa-graduation-cap mb-4 text-5xl" />
          <h2 className="text-2xl font-bold mb-2">HSC Result 2025</h2>
          <p className="text-sm opacity-90">উচ্চ মাধ্যমিক পরীক্ষার ফলাফল</p>
        </a>

        <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center text-white shadow-lg">
          <i className="fa fa-file-text mb-4 text-5xl" />
          <h2 className="text-2xl font-bold mb-2">SSC Result</h2>
          <p className="text-sm opacity-90">মাধ্যমিক পরীক্ষার ফলাফল</p>
          <p className="mt-2 text-xs">(শীঘ্রই প্রকাশিত হবে)</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-center text-white shadow-lg">
          <i className="fa fa-list-alt mb-4 text-5xl" />
          <h2 className="text-2xl font-bold mb-2">Test Exam Results</h2>
          <p className="text-sm opacity-90">সাময়িক পরীক্ষার ফলাফল</p>
          <p className="mt-2 text-xs">(শীঘ্রই প্রকাশিত হবে)</p>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          <i className="fa fa-trophy mr-3" />
          সাম্প্রতিক সাফল্য
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">🏆 মেধাবী শিক্ষার্থী</h3>
            <p className="text-gray-700">
              আমাদের বিদ্যালয়ের শিক্ষার্থীরা নিয়মিত বৃত্তি এবং বোর্ড পরীক্ষায় কৃতিত্ব অর্জন করছে।
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-800 mb-2">📚 পাসের হার</h3>
            <p className="text-gray-700">প্রতি বছর আমাদের বিদ্যালয়ের পাসের হার উন্নতি করছে।</p>
          </div>
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">🎯 লক্ষ্য</h3>
            <p className="text-gray-700">১০০% পাসের হার এবং সর্বোচ্চ জিপিএ অর্জন আমাদের লক্ষ্য।</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm shadow-black/5">
        <h3 className="text-lg font-bold mb-3">
          <i className="fa fa-info-circle mr-2" />
          ফলাফল সম্পর্কিত তথ্য
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <i className="fa fa-check mt-1 text-blue-600" />
            <span>সকল পাবলিক পরীক্ষার ফলাফল যশোর শিক্ষা বোর্ডের ওয়েবসাইটে প্রকাশিত হয়</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fa fa-check mt-1 text-blue-600" />
            <span>অভ্যন্তরীণ পরীক্ষার ফলাফল বিদ্যালয়ে সংরক্ষিত থাকে</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fa fa-check mt-1 text-blue-600" />
            <span>ফলাফল সংক্রান্ত যেকোনো তথ্যের জন্য বিদ্যালয়ে যোগাযোগ করুন</span>
          </li>
        </ul>
      </div>
    </PageShell>
  );
}
