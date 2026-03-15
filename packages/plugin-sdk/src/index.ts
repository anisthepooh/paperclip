export interface PluginManifest {
  name: string;
  version: string;
  description?: string;
  [key: string]: unknown;
}

export interface Plugin {
  manifest: PluginManifest;
  [key: string]: unknown;
}
