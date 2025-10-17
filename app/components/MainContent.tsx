import Image from 'next/image';

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
    { label: 'উপস্থিতি', href: '#', icon: '📈' },
    { label: 'একাডেমিক ক্যালেন্ডার', href: '#', icon: '📅' },
    { label: 'পাঠ পরিকল্পনা', href: '#', icon: '📚' },
    { label: 'ফলাফল', href: '#', icon: '📄' },
  ];

  return (
    <section className="body-section py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <div className="side-menu space-y-4">
              {sideMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service block"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all p-4 rounded-lg shadow-md text-white flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                </a>
              ))}
              <div className="mt-6">
                <Image
                  src="/hotline.png"
                  alt="Hotline"
                  width={300}
                  height={600}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="home-menu-section grid grid-cols-2 gap-4 mb-6">
              {homeMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="home-menu block"
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all p-6 rounded-lg shadow-md text-white text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <span className="font-semibold text-lg">{item.label}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="school-photo mt-6">
              <Image
                src="/school-photo.jpg"
                alt="Chalishia High School"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
