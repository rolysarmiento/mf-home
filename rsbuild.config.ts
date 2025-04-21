import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mf_home',
      exposes: {
        './pacientes': './src/features/pacientes/Pacientes.tsx',
        './Home': './src/App.tsx'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3003,
  },
});