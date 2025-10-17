import type { Metadata } from 'next';
import PageShell from '../components/PageShell';
import { getNoticeEntries, renderNotice } from '../../lib/notices';

export const metadata: Metadata = {
  title: 'নোটিশ বোর্ড | চলিশীয়া উচ্চ বিদ্যালয়',
  description: 'চলিশীয়া উচ্চ বিদ্যালয়ের নোটিশ, ঘোষণা এবং গুরুত্বপূর্ণ বার্তা',
};

export default async function NoticesPage() {
  const notices = await getNoticeEntries();

  return (
    <PageShell
      title="নোটিশ বোর্ড"
      description="বিদ্যালয়ের আপডেট, পরীক্ষা সংক্রান্ত তথ্য এবং জরুরি ঘোষণার জন্য নিয়মিত এই পাতাটি ভিজিট করুন।"
      contentClassName="space-y-10"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-green-700">সাম্প্রতিক ঘোষণা</h2>
        {notices.length > 0 ? (
          <div className="space-y-6">
            {notices.map((notice) => renderNotice(notice))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-green-300 bg-white/70 p-6 text-center text-gray-600">
            বর্তমানে কোনো নোটিশ প্রকাশিত হয়নি। শীঘ্রই নতুন তথ্য যোগ করা হবে।
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm shadow-black/5">
        <h2 className="text-xl font-semibold text-blue-800">নতুন নোটিশ যোগ করতে নির্দেশনা</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 leading-relaxed">
          <li>
            <code>content/notices</code> ডিরেক্টরিতে একটি নতুন <code>.mdx</code> ফাইল তৈরি করুন এবং ফাইলের নামের মধ্যে তারিখ ব্যবহার করুন
            (উদাহরণ: <code>2025-02-01-new-event.mdx</code>)।
          </li>
          <li>
            ফাইলের শুরুর অংশে <code>title</code>, <code>date</code>, <code>category</code>, <code>href</code> এবং
            <code>actionLabel</code> সহ YAML frontmatter যোগ করুন।
          </li>
          <li>
            frontmatter এর পরে Markdown/MDX ফরম্যাটে নোটিশের বিবরণ লিখুন। প্রয়োজনে অতিরিক্ত অনুচ্ছেদ বা তালিকা ব্যবহার করতে পারেন।
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
