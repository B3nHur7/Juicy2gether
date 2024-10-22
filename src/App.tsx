import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { MainLayout } from '@/components/layouts/main-layout';
import { ImageGenerator } from '@/components/image-generator';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="together-ai-theme">
      <MainLayout>
        <ImageGenerator />
      </MainLayout>
      <Toaster />
    </ThemeProvider>
  );
}