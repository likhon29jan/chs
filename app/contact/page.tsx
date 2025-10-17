import type { Metadata } from 'next';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'যোগাযোগ | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের যোগাযোগের তথ্য - ঠিকানা, মোবাইল নম্বর, ইমেইল এবং লোকেশন ম্যাপ',
};

export default function ContactPage() {
  return (
    <PageShell
      title="যোগাযোগ"
      description="চলিশীয়া উচ্চ বিদ্যালয়ের সাথে যোগাযোগের জন্য বিস্তারিত তথ্য এবং অবস্থান"
      contentClassName="space-y-10"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-green-700">যোগাযোগের তথ্য</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <i className="fa fa-institution mt-1 text-xl text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">প্রতিষ্ঠানের নাম</h3>
                <p className="text-gray-700">চলিশীয়া উচ্চ বিদ্যালয় (Chalishia High School)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa fa-map-marker mt-1 text-xl text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">ঠিকানা</h3>
                <p className="text-gray-700 leading-relaxed">
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
              <i className="fa fa-phone mt-1 text-xl text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">মোবাইল নম্বর</h3>
                <a href="tel:01714960797" className="text-blue-600 hover:underline">
                  01714960797
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa fa-id-card mt-1 text-xl text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">EIIN নম্বর</h3>
                <p className="text-gray-700">115498</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa fa-building mt-1 text-xl text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">প্রতিষ্ঠানের ধরন</h3>
                <p className="text-gray-700">বেসরকারি মাধ্যমিক বিদ্যালয়</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa fa-graduation-cap mt-1 text-xl text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">শিক্ষা বোর্ড</h3>
                <p className="text-gray-700">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-green-700">বিদ্যালয়ের অবস্থান</h2>
          <div className="h-96 min-h-[400px] w-full md:h-full">
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

      <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm shadow-black/5">
        <h3 className="text-lg font-bold mb-2">যোগাযোগের সময়</h3>
        <p className="text-gray-700 leading-relaxed">
          রবিবার থেকে বৃহস্পতিবার: সকাল ১০:০০ টা থেকে বিকাল ৪:০০ টা<br />
          শুক্রবার এবং সরকারি ছুটির দিন: বন্ধ
        </p>
      </div>
    </PageShell>
  );
}
