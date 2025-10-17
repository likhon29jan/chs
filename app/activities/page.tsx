import type { Metadata } from 'next';
import PageShell from '../components/PageShell';

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
      ],
    },
    {
      title: 'সহপাঠ কার্যক্রম',
      icon: 'fa-users',
      items: [
        'খেলাধুলা ও ক্রীড়া প্রতিযোগিতা',
        'বিতর্ক ও বক্তৃতা প্রতিযোগিতা',
        'সাংস্কৃতিক অনুষ্ঠান',
        'বিজ্ঞান মেলা ও প্রদর্শনী',
      ],
    },
    {
      title: 'সামাজিক কার্যক্রম',
      icon: 'fa-heart',
      items: [
        'বৃক্ষরোপণ কর্মসূচি',
        'স্বেচ্ছাসেবী কার্যক্রম',
        'পরিচ্ছন্নতা অভিযান',
        'সামাজিক সচেতনতা কর্মসূচি',
      ],
    },
    {
      title: 'বিশেষ কার্যক্রম',
      icon: 'fa-trophy',
      items: [
        'জাতীয় দিবস উদযাপন',
        'শহীদ দিবস পালন',
        'বার্ষিক ক্রীড়া প্রতিযোগিতা',
        'মেধাবী শিক্ষার্থী সংবর্ধনা',
      ],
    },
  ];

  return (
    <PageShell
      title="কার্যাবলী"
      description="চলিশীয়া উচ্চ বিদ্যালয়ের সহপাঠ এবং সামাজিক কার্যক্রমের সারসংক্ষেপ"
      contentClassName="space-y-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <i className={`fa ${activity.icon} text-3xl text-green-600`} />
              </div>
              <h2 className="text-2xl font-bold text-green-700">{activity.title}</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              {activity.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <i className="fa fa-check-circle mt-1 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm shadow-black/5">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          <i className="fa fa-calendar mr-3" />
          বিশেষ অনুষ্ঠান
        </h2>
        <p className="text-gray-700 leading-relaxed">
          আমাদের বিদ্যালয়ে নিয়মিত বিভিন্ন সাংস্কৃতিক ও শিক্ষামূলক অনুষ্ঠান আয়োজন করা হয়। শেখ রাসেল দিবস, স্বাধীনতা দিবস,
          বিজয় দিবস, আন্তর্জাতিক মাতৃভাষা দিবসসহ জাতীয় গুরুত্বপূর্ণ দিবসসমূহ যথাযথ মর্যাদায় উদযাপন করা হয়।
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          এছাড়াও বার্ষিক ক্রীড়া প্রতিযোগিতা, সাহিত্য ও সাংস্কৃতিক সপ্তাহ, বিজ্ঞান মেলা সহ বিভিন্ন কর্মসূচি শিক্ষার্থীদের সৃজনশীলতা
          বৃদ্ধি এবং নেতৃত্ব বিকাশে সহায়তা করে।
        </p>
      </div>
    </PageShell>
  );
}
