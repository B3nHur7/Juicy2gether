import { TogetherAIModel } from '@/types';

export const AVAILABLE_MODELS: TogetherAIModel[] = [
  {
    id: 'stabilityai/stable-diffusion-xl-base-1.0',
    name: 'Stable Diffusion XL',
    description: 'High quality image generation with excellent composition and details',
  },
  {
    id: 'stabilityai/stable-diffusion-2-1',
    name: 'Stable Diffusion 2.1',
    description: 'Balanced image generation with good quality and speed',
  },
];