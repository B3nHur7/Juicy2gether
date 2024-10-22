export const DEFAULT_PARAMS = {
  steps: 20,
  seed: 0,
  n: 1,
  height: 1024,
  width: 1024,
};

export const API_ENDPOINT = 'https://api.together.xyz/v1/images/generations';

export const DIMENSION_PRESETS = [
  { width: 512, height: 512, label: 'Square (512×512)' },
  { width: 768, height: 768, label: 'Square (768×768)' },
  { width: 1024, height: 1024, label: 'Square (1024×1024)' },
  { width: 896, height: 512, label: 'Landscape (896×512)' },
  { width: 1024, height: 576, label: 'Landscape (1024×576)' },
  { width: 512, height: 896, label: 'Portrait (512×896)' },
  { width: 576, height: 1024, label: 'Portrait (576×1024)' },
];