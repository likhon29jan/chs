import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '../../components/PageShell';
import { getPageContent, dynamicPageSlugs } from '../../data/pageContent';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return dynamicPageSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const content = getPageContent(params.slug);

  if (!content) {
    return {
      title: 'চলিশীয়া উচ্চ বিদ্যালয়',
    };
  }

  return {
    title: `${content.title} | চলিশীয়া উচ্চ বিদ্যালয়`,
    description: content.description,
  };
}

export default function InformationalPage({ params }: PageProps) {
  const content = getPageContent(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <PageShell title={content.title} description={content.description}>
      {content.intro ? (
        <p className="rounded-2xl bg-green-50/80 p-5 text-base text-gray-700 shadow-inner">
          {content.intro}
        </p>
      ) : null}

      {content.sections?.map((section) => (
        <section
          key={section.heading}
          className="rounded-2xl border border-green-100 bg-white/80 p-5 shadow-sm shadow-black/5"
        >
          <h2 className="text-xl font-semibold text-green-800">{section.heading}</h2>
          {section.description ? (
            <p className="mt-3 text-gray-700 leading-relaxed">{section.description}</p>
          ) : null}
          {section.items ? (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {content.externalLinks?.length ? (
        <section className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 shadow-sm shadow-black/5">
          <h2 className="text-xl font-semibold text-blue-800">গুরুত্বপূর্ণ লিংক</h2>
          <ul className="mt-4 space-y-3">
            {content.externalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col rounded-xl bg-white/60 px-4 py-3 text-blue-700 transition hover:bg-white/90"
                >
                  <span className="font-semibold">{link.label}</span>
                  {link.description ? (
                    <span className="text-sm text-gray-600">{link.description}</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {content.lastUpdated ? (
        <p className="text-right text-sm text-gray-500">সর্বশেষ হালনাগাদ: {content.lastUpdated}</p>
      ) : null}
    </PageShell>
  );
}
