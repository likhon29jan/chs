import Image from 'next/image';
import Link from 'next/link';

export default function MainContent() {
  const sideMenuItems = [
    {
      label: 'HSC Result-2025',
      href: '//www.jessoreboard.gov.bd/resultjbh25/index.php',
      icon: '📊',
    },
    {
      label: 'Student Management',
      href: '//student.jessoreboard.gov.bd',
      icon: '👨‍🎓',
    },
    {
      label: 'Head/Examiner',
      href: '//jessoreboard.gov.bd/epd_online',
      icon: '👔',
    },
    {
      label: 'OTP',
      href: '//otp.jessoreboard.gov.bd',
      icon: '🔐',
    },
  ];

  const homeMenuItems = [
    { label: 'আমাদের বিষয়', href: '/about', icon: '📖' },
    { label: 'একাডেমিক রেকর্ড', href: '/academic-records', icon: '📈' },
    { label: 'কার্যাবলী', href: '/activities', icon: '🎯' },
    { label: 'ফলাফল', href: '/results', icon: '📄' },
  ];

  return (
    <section className="body-section py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <div className="side-menu grid grid-cols-2 gap-3 md:gap-4">
              {sideMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service block col-span-1"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all p-3 md:p-4 rounded-lg shadow-md text-white text-center h-full flex flex-col items-center justify-center gap-2">
                    <span className="text-2xl md:text-3xl">{item.icon}</span>
                    <span className="font-semibold text-xs md:text-sm">{item.label}</span>
                  </div>
                </a>
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
          
          <div className="lg:col-span-8 space-y-6">
            <div className="home-menu-section grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {homeMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="home-menu block"
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all p-4 md:p-6 rounded-lg shadow-md text-white text-center h-full flex flex-col items-center justify-center gap-2">
                    <div className="text-2xl md:text-3xl">{item.icon}</div>
                    <span className="font-semibold text-xs md:text-sm lg:text-base">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="school-photo">
              <Image
                src="/school-photo.jpg"
                alt="Chalishia High School"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 md:p-6 rounded-lg border-l-4 border-green-500">
              <h2 className="text-lg md:text-xl font-bold text-green-800 mb-3">
                <i className="fa fa-info-circle mr-2" />
                বিদ্যালয় সম্পর্কে
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                চলিশীয়া উচ্চ বিদ্যালয় যশোর জেলার অভয়নগর উপজেলায় অবস্থিত একটি বেসরকারি মাধ্যমিক বিদ্যালয়। 
                EIIN: 115498। প্রধান শিক্ষক: মোস্তাক আহম্মেদ। যোগাযোগ: ০১৭১৪৯৬০৭৯৭
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
