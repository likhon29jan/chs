import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'ফটো গ্যালারি | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের বিভিন্ন অনুষ্ঠান, কার্যক্রম এবং বিদ্যালয়ের ছবি',
};

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
          ফটো গ্যালারি
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">বিদ্যালয়ের ছবি</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/school-photo.jpg"
                alt="বিদ্যালয়ের প্রধান ভবন"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
              <h3 className="font-bold text-lg text-gray-800">বিদ্যালয়ের প্রধান ভবন</h3>
              <p className="text-sm text-gray-600">চলিশীয়া উচ্চ বিদ্যালয়ের মূল ভবন</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center">
                <i className="fa fa-image text-white text-6xl opacity-50" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">বৃক্ষরোপণ কর্মসূচি</h3>
              <p className="text-sm text-gray-600">শেখ রাসেল দিবসে বৃক্ষরোপণ</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-3 flex items-center justify-center">
                <i className="fa fa-image text-white text-6xl opacity-50" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">সাংস্কৃতিক অনুষ্ঠান</h3>
              <p className="text-sm text-gray-600">বার্ষিক সাংস্কৃতিক প্রতিযোগিতা</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-3 flex items-center justify-center">
                <i className="fa fa-image text-white text-6xl opacity-50" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">ক্রীড়া প্রতিযোগিতা</h3>
              <p className="text-sm text-gray-600">বার্ষিক ক্রীড়া দিবস</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-red-400 to-red-600 rounded-lg mb-3 flex items-center justify-center">
                <i className="fa fa-image text-white text-6xl opacity-50" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">জাতীয় দিবস</h3>
              <p className="text-sm text-gray-600">স্বাধীনতা দিবস উদযাপন</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg mb-3 flex items-center justify-center">
                <i className="fa fa-image text-white text-6xl opacity-50" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">বিজ্ঞান মেলা</h3>
              <p className="text-sm text-gray-600">বার্ষিক বিজ্ঞান প্রদর্শনী</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-yellow-800">
            <i className="fa fa-camera mr-2" />
            আরও ছবি আসছে শীঘ্রই
          </h3>
          <p className="text-gray-700">
            আমরা নিয়মিত আমাদের বিদ্যালয়ের বিভিন্ন কার্যক্রম এবং অনুষ্ঠানের ছবি এখানে যুক্ত করব। 
            নতুন ছবি আপলোডের জন্য অপেক্ষা করুন।
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
