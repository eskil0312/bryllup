
interface ImportMetaEnv {
    readonly NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    readonly NEXT_PUBLIC_SANITY_DATASET: string;
  
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}