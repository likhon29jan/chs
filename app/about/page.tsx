import type { Metadata } from 'next';
import Image from 'next/image';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'আমাদের বিষয় | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের ইতিহাস, লক্ষ্য, উদ্দেশ্য এবং প্রতিষ্ঠানের সম্পূর্ণ তথ্য',
};

export default function AboutPage() {
  return (
    <PageShell
      title="আমাদের বিষয়"
      description="চলিশীয়া উচ্চ বিদ্যালয়ের ইতিহাস, লক্ষ্য, উদ্দেশ্য এবং প্রতিষ্ঠানের সম্পূর্ণ তথ্য"
      contentClassName="space-y-10"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">প্রতিষ্ঠান সম্পর্কে</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              চলিশীয়া উচ্চ বিদ্যালয় যশোর জেলার অভয়নগর উপজেলায় অবস্থিত একটি বেসরকারি মাধ্যমিক বিদ্যালয়।
              এটি চলিশিয়া ইউনিয়ন পরিষদের অধীনে একটি শিক্ষা প্রতিষ্ঠান এবং এর EIIN নম্বর হলো 115498।
              এই বিদ্যালয়টি স্থানীয়ভাবে পরিচিত এবং এটি বিভিন্ন শিক্ষা কার্যক্রমের আয়োজন করে থাকে।
            </p>
            <p className="text-gray-700 leading-relaxed">
              বিদ্যালয়টি যশোর মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ডের অধীনে পরিচালিত হয় এবং
              শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">প্রাতিষ্ঠানিক তথ্য</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">নাম (বাংলা)</h3>
                <p className="text-gray-600">চলিশীয়া উচ্চ বিদ্যালয়</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">নাম (ইংরেজি)</h3>
                  <p className="text-gray-600">Chalishia High School</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800">EIIN</h3>
                  <p className="text-gray-600">115498</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">প্রতিষ্ঠানের ধরন</h3>
                  <p className="text-gray-600">বেসরকারি</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800">প্রধান শিক্ষক</h3>
                  <p className="text-gray-600">মোস্তাক আহম্মেদ</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">ইউনিয়ন</h3>
                  <p className="text-gray-600">৩ নং চলিশীয়া</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800">উপজেলা</h3>
                  <p className="text-gray-600">অভয়নগর</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">জেলা</h3>
                  <p className="text-gray-600">যশোর, খুলনা</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">আমাদের লক্ষ্য ও উদ্দেশ্য</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fa fa-check-circle text-green-600 text-xl mt-1" />
                  <span className="text-gray-700">মানসম্মত শিক্ষা প্রদান এবং শিক্ষার্থীদের সর্বাঙ্গীণ উন্নয়ন</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa fa-check-circle text-green-600 text-xl mt-1" />
                  <span className="text-gray-700">নৈতিক মূল্যবোধ এবং দেশপ্রেম জাগ্রত করা</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa fa-check-circle text-green-600 text-xl mt-1" />
                  <span className="text-gray-700">শিক্ষার্থীদের সৃজনশীল ও মেধাবী হিসেবে গড়ে তোলা</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa fa-check-circle text-green-600 text-xl mt-1" />
                  <span className="text-gray-700">আধুনিক শিক্ষা পদ্ধতি এবং প্রযুক্তির ব্যবহার</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa fa-check-circle text-green-600 text-xl mt-1" />
                  <span className="text-gray-700">সকল শিক্ষার্থীর জন্য সমান সুযোগ নিশ্চিত করা</span>
                </li>
              </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-4">বিদ্যালয়ের ছবি</h2>
            <Image
              src="/school-photo.jpg"
              alt="চলিশীয়া উচ্চ বিদ্যালয়"
              width={400}
              height={300}
              className="w-full rounded-lg shadow-md mb-4"
            />
            <Image
              src="/logo_jessore.png"
              alt="যশোর শিক্ষা বোর্ড"
              width={200}
              height={200}
              className="w-full max-w-[200px] mx-auto"
            />
          </div>

          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 shadow-lg">
            <h3 className="font-bold text-lg mb-3 text-green-800">শিক্ষা বোর্ড</h3>
            <p className="text-gray-700">
              <a
                href="http://www.jessoreboard.gov.bd"
                target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর
                </a>
              </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
