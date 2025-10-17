import type { Metadata } from 'next';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'কার্যাবলী | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের বিভিন্ন কার্যক্রম, সহপাঠ কার্যক্রম এবং সাংস্কৃতিক অনুষ্ঠান',
};

export default function ActivitiesPage() {
  const activities = [
    {
      title: 'শিক্ষা কার্যক্রম',
      icon: 'fa-book',
      items: [
        'নিয়মিত ক্লাস পরিচালনা',
        'পাঠ পরিকল্পনা বাস্তবায়ন',
        'শিক্ষকদের প্রশিক্ষণ কর্মসূচি',
        'ডিজিটাল শিক্ষা উপকরণ ব্যবহার',
      ]
    },
    {
      title: 'সহপাঠ কার্যক্রম',
      icon: 'fa-users',
      items: [
        'খেলাধুলা ও ক্রীড়া প্রতিযোগিতা',
        'বিতর্ক ও বক্তৃতা প্রতিযোগিতা',
        'সাংস্কৃতিক অনুষ্ঠান',
        'বিজ্ঞান মেলা ও প্রদর্শনী',
      ]
    },
    {
      title: 'সামাজিক কার্যক্রম',
      icon: 'fa-heart',
      items: [
        'বৃক্ষরোপণ কর্মসূচি',
        'স্বেচ্ছাসেবী কার্যক্রম',
        'পরিচ্ছন্নতা অভিযান',
        'সামাজিক সচেতনতা কর্মসূচি',
      ]
    },
    {
      title: 'বিশেষ কার্যক্রম',
      icon: 'fa-trophy',
      items: [
        'জাতীয় দিবস উদযাপন',
        'শহীদ দিবস পালন',
        'বার্ষিক ক্রীড়া প্রতিযোগিতা',
        'মেধাবী শিক্ষার্থী সংবর্ধনা',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
          কার্যাবলী
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <i className={`fa ${activity.icon} text-3xl text-green-600`} />
                </div>
                <h2 className="text-2xl font-bold text-green-700">{activity.title}</h2>
              </div>
              <ul className="space-y-3">
                {activity.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fa fa-check-circle text-green-500 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            <i className="fa fa-calendar mr-3" />
            বিশেষ অনুষ্ঠান
          </h2>
          <p className="text-gray-700 mb-4">
            আমাদের বিদ্যালয়ে নিয়মিত বিভিন্ন সাংস্কৃতিক ও শিক্ষামূলক অনুষ্ঠান আয়োজন করা হয়। 
            যেমন - শেখ রাসেল দিবস, স্বাধীনতা দিবস, বিজয় দিবস, আন্তর্জাতিক মাতৃভাষা দিবস ইত্যাদি।
          </p>
          <p className="text-gray-700">
            এছাড়াও বার্ষিক ক্রীড়া প্রতিযোগিতা, সাহিত্য ও সাংস্কৃতিক সপ্তাহ, বিজ্ঞান মেলা সহ বিভিন্ন কর্মসূচি পালন করা হয়।
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
