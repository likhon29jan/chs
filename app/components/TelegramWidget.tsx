'use client';

import { useState } from 'react';
import Script from 'next/script';

const TELEGRAM_CHANNEL = 'chalishia_school_updates';
const TELEGRAM_URL = `https://t.me/${TELEGRAM_CHANNEL}`;

export default function TelegramWidget() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="rounded-2xl border border-green-100 bg-white/95 p-5 shadow-lg">
      <div className="flex items-start gap-3">
        <span aria-hidden className="text-2xl">
          📢
        </span>
        <div>
          <h2 className="text-xl font-semibold text-green-700">টেলিগ্রাম আপডেট</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            বিদ্যালয়ের জরুরি নোটিশ, পরীক্ষা সূচি এবং অভিভাবক বার্তা দ্রুত পেতে আমাদের অফিসিয়াল টেলিগ্রাম চ্যানেলে যুক্ত হন।
          </p>
        </div>
      </div>

      <div className="relative mt-4 min-h-[320px] overflow-hidden rounded-xl bg-green-50/50">
        {!hasError ? (
          <>
            <Script
              id="telegram-channel-widget"
              src="https://telegram.org/js/telegram-widget.js?22"
              strategy="afterInteractive"
              data-telegram-channel={TELEGRAM_CHANNEL}
              data-width="100%"
              data-height="320"
              data-radius="10"
              data-color="1C9E4D"
              onLoad={() => setIsScriptLoaded(true)}
              onError={() => setHasError(true)}
            />
            {!isScriptLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-sm text-gray-600">
                টেলিগ্রাম উইজেট লোড হচ্ছে...
              </div>
            ) : null}
          </>
        ) : null}

        {hasError ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-gray-700">
            <p>
              টেলিগ্রাম উইজেটটি প্রদর্শিত হচ্ছে না। নিচের লিংক ব্যবহার করে সরাসরি আমাদের চ্যানেলে যুক্ত হতে পারেন।
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 font-semibold text-white shadow-md transition-colors hover:bg-green-700"
            >
              <span aria-hidden>🚀</span>
              <span>চ্যানেলে যোগ দিন</span>
            </a>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 leading-relaxed">
        <p>
          উইজেটটি দেখা না গেলে সরাসরি
          {' '}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-700 underline underline-offset-2"
          >
            টেলিগ্রাম চ্যানেল লিংকে
          </a>
          {' '}
          ক্লিক করুন।
        </p>
        <p>
          প্রতিদিন সকাল ৮টা ও সন্ধ্যা ৭টায় চ্যানেলে উপস্থিতি, পরীক্ষা ও প্রশাসনিক ঘোষণা প্রকাশ করা হয়।
        </p>
      </div>
    </div>
  );
}

