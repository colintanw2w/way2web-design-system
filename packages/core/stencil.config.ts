import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from "@stencil/vue-output-target";
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'core',
  plugins: [sass()],
  globalStyle: 'src/css/core.scss',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@w2wds/core',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: false,
    }),
    vueOutputTarget({
      componentCorePackage: '@w2wds/core',
      proxiesFile: '../vue/src/proxies.ts',
      includeDefineCustomElements: false,
      includePolyfills: false,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
