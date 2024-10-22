import { ImageGenerationParams, ApiResponse } from '@/types';
import { API_ENDPOINT } from '@/config/constants';

export async function generateImage(
  params: ImageGenerationParams,
  apiKey: string
): Promise<ApiResponse> {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({
      error: 'An unknown error occurred',
    }));
    throw new Error(error.error || 'Failed to generate image');
  }

  return response.json();
}