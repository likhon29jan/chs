import type { Metadata } from 'next';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'যোগাযোগ | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের যোগাযোগের তথ্য - ঠিকানা, মোবাইল নম্বর, ইমেইল এবং লোকেশন ম্যাপ',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
          যোগাযোগ
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-6">যোগাযোগের তথ্য</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="fa fa-institution text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">প্রতিষ্ঠানের নাম</h3>
                  <p className="text-gray-700">চলিশীয়া উচ্চ বিদ্যালয় (Chalishia High School)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa fa-map-marker text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">ঠিকানা</h3>
                  <p className="text-gray-700">
                    গ্রাম: চলিশীয়া<br />
                    ইউনিয়ন: ৩ নং চলিশীয়া ইউনিয়ন<br />
                    ওয়ার্ড নং: ১<br />
                    ডাকঘর: নোয়াপাড়া<br />
                    উপজেলা: অভয়নগর<br />
                    জেলা: যশোর<br />
                    বিভাগ: খুলনা
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa fa-phone text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">মোবাইল নম্বর</h3>
                  <p className="text-gray-700">
                    <a href="tel:01714960797" className="text-blue-600 hover:underline">
                      01714960797
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa fa-id-card text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">EIIN নম্বর</h3>
                  <p className="text-gray-700">115498</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa fa-building text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">প্রতিষ্ঠানের ধরন</h3>
                  <p className="text-gray-700">বেসরকারি মাধ্যমিক বিদ্যালয়</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa fa-graduation-cap text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">শিক্ষা বোর্ড</h3>
                  <p className="text-gray-700">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-6">বিদ্যালয়ের অবস্থান</h2>
            <div className="w-full h-96 md:h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1760664293435!6m8!1m7!1sVCknVdOV3pHWlfJnu49myA!2m2!1d23.00819631855351!2d89.38639562511186!3f138.72357!4f0!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2">যোগাযোগের সময়</h3>
          <p className="text-gray-700">
            রবিবার থেকে বৃহস্পতিবার: সকাল ১০:০০ টা থেকে বিকাল ৪:০০ টা<br />
            শুক্রবার এবং সরকারি ছুটির দিন: বন্ধ
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
