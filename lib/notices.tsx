import fs from 'node:fs/promises';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';
import NoticeCard from '../app/components/NoticeCard';

export interface NoticeFrontmatter {
  title: string;
  date: string;
  category?: string;
  href?: string;
  actionLabel?: string;
}

export interface NoticeEntry {
  slug: string;
  frontmatter: NoticeFrontmatter;
  content: ReactNode;
}

const noticesDirectory = path.join(process.cwd(), 'content/notices');

export async function getNoticeEntries(): Promise<NoticeEntry[]> {
  let files: string[];

  try {
    files = await fs.readdir(noticesDirectory);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }

    throw error;
  }

  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file): Promise<NoticeEntry | null> => {
        try {
          const filePath = path.join(noticesDirectory, file);
          const source = await fs.readFile(filePath, 'utf-8');

          const { content, frontmatter } = await compileMDX<NoticeFrontmatter>({
            source,
            options: {
              parseFrontmatter: true,
            },
          });

          return {
            slug: file.replace(/\.mdx$/, ''),
            frontmatter,
            content,
          } satisfies NoticeEntry;
        } catch (error) {
          console.error(`Failed to load notice file: ${file}`, error);
          return null;
        }
      })
  );

  return entries
    .filter((entry): entry is NoticeEntry => {
      if (!entry) {
        return false;
      }

      return Boolean(entry.frontmatter.title && entry.frontmatter.date);
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function renderNotice(entry: NoticeEntry) {
  const { frontmatter, content } = entry;

  return (
    <NoticeCard
      key={entry.slug}
      title={frontmatter.title}
      date={frontmatter.date}
      category={frontmatter.category}
      href={frontmatter.href}
      actionLabel={frontmatter.actionLabel}
    >
      {content}
    </NoticeCard>
  );
}
