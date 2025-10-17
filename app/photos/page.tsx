import type { Metadata } from 'next';
import Image from 'next/image';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'ফটো গ্যালারি | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের বিভিন্ন অনুষ্ঠান, কার্যক্রম এবং বিদ্যালয়ের ছবি',
};

const placeholderCards = [
  {
    title: 'বৃক্ষরোপণ কর্মসূচি',
    description: 'শেখ রাসেল দিবসে বৃক্ষরোপণ',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    title: 'সাংস্কৃতিক অনুষ্ঠান',
    description: 'বার্ষিক সাংস্কৃতিক প্রতিযোগিতা',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    title: 'ক্রীড়া প্রতিযোগিতা',
    description: 'বার্ষিক ক্রীড়া দিবস',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'জাতীয় দিবস',
    description: 'স্বাধীনতা দিবস উদযাপন',
    gradient: 'from-red-400 to-red-600',
  },
  {
    title: 'বিজ্ঞান মেলা',
    description: 'বার্ষিক বিজ্ঞান প্রদর্শনী',
    gradient: 'from-indigo-400 to-purple-600',
  },
];

export default function PhotosPage() {
  return (
    <PageShell
      title="ফটো গ্যালারি"
      description="বিদ্যালয়ের স্মৃতিময় মুহূর্ত এবং শিক্ষার্থীদের সাফল্যের ভিজ্যুয়াল সংগ্রহ"
      contentClassName="space-y-10"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-green-700">বিদ্যালয়ের ছবি</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <figure className="rounded-2xl bg-white p-4 shadow-lg">
            <Image
              src="/school-photo.jpg"
              alt="বিদ্যালয়ের প্রধান ভবন"
              width={400}
              height={300}
              className="mb-3 h-64 w-full rounded-lg object-cover"
            />
            <figcaption>
              <h3 className="text-lg font-bold text-gray-800">বিদ্যালয়ের প্রধান ভবন</h3>
              <p className="text-sm text-gray-600">চলিশীয়া উচ্চ বিদ্যালয়ের মূল ভবন</p>
            </figcaption>
          </figure>

          {placeholderCards.map((card) => (
            <figure key={card.title} className="rounded-2xl bg-white p-4 shadow-lg">
              <div className={`mb-3 flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-br ${card.gradient}`}>
                <i className="fa fa-image text-6xl text-white/70" />
              </div>
              <figcaption>
                <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm shadow-black/5">
        <h3 className="text-lg font-bold text-yellow-800 mb-2">
          <i className="fa fa-camera mr-2" />
          আরও ছবি আসছে শীঘ্রই
        </h3>
        <p className="text-gray-700">
          আমরা নিয়মিত আমাদের বিদ্যালয়ের বিভিন্ন কার্যক্রম এবং অনুষ্ঠানের ছবি এখানে যুক্ত করব। নতুন ছবি আপলোডের জন্য অপেক্ষা করুন।
        </p>
      </div>
    </PageShell>
  );
}
