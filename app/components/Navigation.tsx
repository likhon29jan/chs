export default function Navigation() {
  const menuItems = [
    { label: 'প্রথম পাতা', href: '/' },
    { label: 'আমাদের বিষয়', href: '#' },
    { label: 'কার্যাবলী', href: '#' },
    { label: 'একাডেমিক রেকর্ড', href: '#' },
    { label: 'ফলাফল', href: '#' },
    { label: 'ফটো', href: '#' },
    { label: 'যোগাযোগ', href: '#' },
  ];

  return (
    <section className="menu-section bg-green-700 shadow-md">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center md:justify-start items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block px-4 md:px-6 py-3 text-white hover:bg-green-800 transition-colors border-r border-green-600 last:border-r-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
