interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENABLE_MSW: 'false' | 'true';
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
