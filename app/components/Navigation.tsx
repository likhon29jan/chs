import Link from 'next/link';

export default function Navigation() {
  const menuItems = [
    { label: 'প্রথম পাতা', href: '/' },
    { label: 'আমাদের বিষয়', href: '/about' },
    { label: 'কার্যাবলী', href: '/activities' },
    { label: 'একাডেমিক রেকর্ড', href: '/academic-records' },
    { label: 'ফলাফল', href: '/results' },
    { label: 'ফটো', href: '/photos' },
    { label: 'যোগাযোগ', href: '/contact' },
  ];

  return (
    <section className="menu-section bg-green-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center md:justify-start items-center">
          {menuItems.map((item, index) => (
            <li key={index} className="flex-shrink-0">
              <Link
                href={item.href}
                className="block px-3 md:px-6 py-3 text-white hover:bg-green-800 transition-colors border-r border-green-600 last:border-r-0 text-sm md:text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
