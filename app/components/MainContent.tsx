import Image from 'next/image';
import Link from 'next/link';

const sideMenuItems = [
  { label: 'HSC Result-2025', href: '/hsc-result-2025', icon: '📊' },
  { label: 'Student Management', href: '/student-management', icon: '👨‍🎓' },
  { label: 'Head/Examiner', href: '/head-examiner', icon: '👔' },
  { label: 'OTP', href: '/otp', icon: '🔐' },
];

const homeMenuItems = [
  { label: 'আমাদের বিষয়', href: '/about', icon: '📖' },
  { label: 'একাডেমিক রেকর্ড', href: '/academic-records', icon: '📈' },
  { label: 'কার্যাবলী', href: '/activities', icon: '🎯' },
  { label: 'ফলাফল', href: '/results', icon: '📄' },
  { label: 'নোটিশ বোর্ড', href: '/notices', icon: '📢' },
  { label: 'একাডেমিক ক্যালেন্ডার', href: '/academic-calendar', icon: '🗓️' },
];

export default function MainContent() {
  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {sideMenuItems.map((item) => (
                <Link key={item.href} href={item.href} className="block">
                  <div className="flex h-full flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-3 text-center text-white shadow-md transition-transform hover:-translate-y-1 hover:from-blue-600 hover:to-blue-700 md:p-4">
                    <span className="text-2xl md:text-3xl">{item.icon}</span>
                    <span className="text-xs font-semibold md:text-sm">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="hidden lg:block">
              <Image
                src="/hotline.png"
                alt="Hotline"
                width={300}
                height={600}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {homeMenuItems.map((item) => (
                <Link key={item.href} href={item.href} className="block">
                  <div className="flex h-full flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 p-4 text-center text-white shadow-md transition-transform hover:-translate-y-1 hover:from-green-600 hover:to-green-700 md:p-6">
                    <div className="text-2xl md:text-3xl">{item.icon}</div>
                    <span className="text-xs font-semibold md:text-sm lg:text-base">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/90 p-4 shadow-lg md:p-6">
              <Image
                src="/school-photo.jpg"
                alt="Chalishia High School"
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="rounded-3xl border-l-4 border-green-500 bg-gradient-to-r from-blue-50 to-green-50 p-4 md:p-6">
              <h2 className="mb-3 text-lg font-bold text-green-800 md:text-xl">
                <i className="fa fa-info-circle mr-2" /> বিদ্যালয় সম্পর্কে
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed md:text-base">
                চলিশীয়া উচ্চ বিদ্যালয় যশোর জেলার অভয়নগর উপজেলায় অবস্থিত একটি বেসরকারি মাধ্যমিক বিদ্যালয়। EIIN: 115498। প্রধান শিক্ষক: মোস্তাক আহম্মেদ। যোগাযোগ: ০১৭১৪৯৬০৭৯৭।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
