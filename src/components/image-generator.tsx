import { useState } from 'react';
import { useStore } from '@/lib/store';
import { ApiKeyManager } from './api-key-manager';
import { ImageGenerationForm } from './image-generation-form';
import { ImageGallery } from './image-gallery';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ImageGenerator() {
  const { apiKey } = useStore();
  const [activeTab, setActiveTab] = useState('generate');

  if (!apiKey) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h2 className="text-xl font-semibold">Welcome to Together AI Image Generator</h2>
        <p className="text-muted-foreground">Please add your API key to get started</p>
        <ApiKeyManager />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <ApiKeyManager />
      </div>
      <Card>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">Generate</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="generate" className="p-6">
            <ImageGenerationForm />
          </TabsContent>
          <TabsContent value="gallery" className="p-6">
            <ImageGallery />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}