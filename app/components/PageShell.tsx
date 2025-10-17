import type { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageShellProps {
  title: string;
  description?: string;
  children: ReactNode;
  contentClassName?: string;
}

export default function PageShell({
  title,
  description,
  children,
  contentClassName,
}: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8 w-full">
        <div
          className={`rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl shadow-black/5 border border-white/40 p-6 md:p-10 space-y-6 ${
            contentClassName ?? ''
          }`}
        >
          <header className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-green-600">Chalishia High School</p>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">{title}</h1>
            {description ? (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            ) : null}
          </header>

          <section className="space-y-6">{children}</section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
