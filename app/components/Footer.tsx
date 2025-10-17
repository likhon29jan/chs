import Image from 'next/image';

export default function Footer() {
  const footerMenus = [
    {
      items: [
        'কমিটি',
        'জনবল',
        'সম্পদ',
        'ভর্তি তথ্যাদি',
        'ভর্তি ফরম',
        'ক্লাস রুটিন',
        'হাজিরা',
      ],
    },
    {
      items: [
        'সাময়িক পরীক্ষা',
        'টিউটরিয়াল পরীক্ষা',
        'পাবলিক পরীক্ষা',
        'ভর্তি পরীক্ষা',
        'ক্লাব',
        'ছুটি',
        'শিক্ষা পঞ্জিকা',
      ],
    },
    {
      items: [
        'ছাত্র-ছাত্রী',
        'ছাত্র-ছাত্রীর পরীক্ষার রেকর্ড',
        'একাডেমিক পারফরম্যান্স',
        'বৃত্তি',
        'ছাত্রাবাস',
        'অন্যান্য',
        'নোটিশ বোর্ড',
      ],
    },
  ];

  return (
    <>
      <div className="footer-top-section bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="footer-title text-center text-2xl font-bold mb-8">
            এক নজরে গুরুত্বপূর্ণ মেন্যু
          </div>
          <div className="footer-menu-section grid md:grid-cols-4 gap-8">
            {footerMenus.map((menu, menuIndex) => (
              <div key={menuIndex}>
                <ul className="space-y-2">
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="power-by text-center md:text-left">
              <Image
                src="/logo.png"
                alt="Jessore Board Logo"
                width={80}
                height={80}
                className="mx-auto md:mx-0 mb-4"
              />
              <a
                href="http://www.jessoreboard.gov.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors block mb-2"
              >
                মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর
              </a>
              <p className="text-sm text-gray-400">প্রকল্প, অর্থায়ন, বাস্তবায়ন</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto px-4 text-center">
          Copyright &copy; 2025 Chalishia High School. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
