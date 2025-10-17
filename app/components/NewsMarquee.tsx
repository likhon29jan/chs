'use client';

export default function NewsMarquee() {
  return (
    <div className="container mx-auto px-4 pt-6">
      <div className="news-section bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-3 shadow-md">
        <div className="flex items-center gap-4">
          <label className="font-bold text-gray-800 whitespace-nowrap">News:</label>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-gray-800">
              চলিশিয়া মাধ্যমিক বিদ্যালয়ে আপনাকে স্বাগতম। নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শীঘ্রই শুরু হবে।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
