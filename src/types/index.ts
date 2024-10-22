export interface ImageGenerationParams {
  prompt: string;
  model: string;
  steps: number;
  seed: number;
  n: number;
  height: number;
  width: number;
  negative_prompt?: string;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  model: string;
  timestamp: number;
  params: ImageGenerationParams;
}

export interface TogetherAIModel {
  id: string;
  name: string;
  description: string;
}

export interface ApiResponse {
  id: string;
  model: string;
  object: string;
  data: {
    index: number;
    url: string;
    timings: {
      inference: number;
    };
  }[];
}