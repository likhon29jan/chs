'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '../data/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="menu-section bg-green-700/95 backdrop-blur supports-[backdrop-filter]:bg-green-700/80 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <ul className="flex min-w-max flex-nowrap items-center gap-1 px-2 py-2 md:px-4">
            {navigationItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);

              return (
                <li key={item.href} className="flex-shrink-0">
                  <Link
                    href={item.href}
                    className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 md:px-6 md:py-3 md:text-base ${
                      isActive
                        ? 'bg-white text-green-800 shadow'
                        : 'text-white hover:bg-green-800/80 hover:text-yellow-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
