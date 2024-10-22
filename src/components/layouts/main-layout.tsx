import { PropsWithChildren } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { GithubIcon } from 'lucide-react';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">Together AI Image Generator</h1>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container py-8">{children}</main>
    </div>
  );
}