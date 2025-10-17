import type { ReactNode } from 'react';

interface NoticeCardProps {
  title: string;
  date: string;
  category?: string;
  actionLabel?: string;
  href?: string;
  children: ReactNode;
}

export default function NoticeCard({
  title,
  date,
  category,
  actionLabel = 'বিস্তারিত',
  href,
  children,
}: NoticeCardProps) {
  return (
    <article className="rounded-2xl border border-green-100 bg-white/95 p-6 shadow-sm shadow-black/5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-green-600">Notice</p>
          <h2 className="text-xl font-bold text-green-800">{title}</h2>
        </div>
        <div className="text-right text-sm text-gray-500">
          <p>{date}</p>
          {category ? <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">{category}</span> : null}
        </div>
      </header>
      <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">{children}</div>
      {href ? (
        <div className="mt-6 text-right">
          <a
            href={href}
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            {actionLabel}
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
      ) : null}
    </article>
  );
}
