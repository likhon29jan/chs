import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Institute | Log in',
  description: 'Institute Management System লগইন পোর্টাল',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900/90 to-emerald-800/90 px-4 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl bg-white/95 p-8 shadow-2xl shadow-black/20 md:flex-row md:gap-10 md:p-12">
        <div className="flex-1 text-center md:text-left">
          <Image
            src="/logo.png"
            alt="Jessore Board Logo"
            width={90}
            height={90}
            className="mx-auto md:mx-0"
          />
          <h1 className="mt-4 text-3xl font-bold text-green-800">Institute Management System</h1>
          <p className="mt-2 text-sm text-gray-600">Board of Intermediate and Secondary Education, Jashore</p>
          <p className="mt-1 text-sm font-semibold text-green-700">EIIN ভিত্তিক লগইন পোর্টাল</p>
        </div>

        <div className="flex-1">
          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-lg">
            <h2 className="text-center text-xl font-semibold text-green-700">Institute Login Panel</h2>
            <form className="mt-6 space-y-5" action="#" method="post">
              <div>
                <label htmlFor="eiin" className="mb-2 block text-sm font-semibold text-gray-700">
                  EIIN নম্বর
                </label>
                <input
                  id="eiin"
                  name="eiin"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  required
                  className="w-full rounded-lg border border-green-100 px-4 py-3 text-gray-800 shadow-sm focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                  placeholder="আপনার EIIN নম্বর লিখুন"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
                  পাসওয়ার্ড
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full rounded-lg border border-green-100 px-4 py-3 text-gray-800 shadow-sm focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                  placeholder="পাসওয়ার্ড লিখুন"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <a href="//institute.jessoreboard.gov.bd" className="text-green-700 hover:underline">
                  অফিসিয়াল পোর্টাল
                </a>
                <a href="mailto:info@jessoreboard.gov.bd" className="hover:underline">
                  সহায়তা প্রয়োজন?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-600 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-green-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
