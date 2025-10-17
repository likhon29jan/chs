import Link from 'next/link';
import Image from 'next/image';
import { navigationItems } from '../data/navigation';

const footerGroups: string[][] = [
  ['কমিটি', 'জনবল', 'সম্পদ', 'ভর্তি তথ্যাদি', 'ভর্তি ফরম', 'ক্লাস রুটিন', 'হাজিরা'],
  ['সাময়িক পরীক্ষা', 'টিউটরিয়াল পরীক্ষা', 'পাবলিক পরীক্ষা', 'ভর্তি পরীক্ষা', 'ক্লাব', 'ছুটি', 'শিক্ষা পঞ্জিকা'],
  ['ছাত্র-ছাত্রী', 'ছাত্র-ছাত্রীর পরীক্ষার রেকর্ড', 'একাডেমিক পারফরম্যান্স', 'বৃত্তি', 'ছাত্রাবাস', 'অন্যান্য', 'নোটিশ বোর্ড'],
];

const navigationLookup = new Map(navigationItems.map((item) => [item.label, item.href]));

export default function Footer() {
  return (
    <footer className="mt-12 text-white">
      <div className="bg-gray-900/95">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-center text-2xl font-bold text-yellow-300">এক নজরে গুরুত্বপূর্ণ মেন্যু</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {footerGroups.map((group, index) => (
              <div key={index}>
                <ul className="space-y-2">
                  {group.map((label) => (
                    <li key={label}>
                      <Link
                        href={navigationLookup.get(label) ?? '#'}
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="text-center md:text-left">
              <Image
                src="/logo.png"
                alt="Jessore Board Logo"
                width={80}
                height={80}
                className="mx-auto mb-4 md:mx-0"
              />
              <a
                href="http://www.jessoreboard.gov.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর
              </a>
              <p className="text-sm text-gray-400">প্রকল্প, অর্থায়ন, বাস্তবায়ন</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/90">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-400">
          Copyright &copy; 2025 Chalishia High School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
