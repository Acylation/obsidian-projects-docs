import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Obsidian Projects Documentations',
  tagline: 'Plain text project planning in Obsidian',
  favicon: 'img/favicon.svg',

  url: 'https://acylation.github.io/',
  baseUrl: '/obsidian-projects-docs',
  trailingSlash: false,

  organizationName: 'Acylation',
  projectName: 'obsidian-projects-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/Acylation/obsidian-projects-docs/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner_light.svg',
    colorMode: {
      // defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Projects Docs',
      logo: {
        alt: 'logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg',
        style: { padding: "4px" }
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://github.com/Acylation/obsidian-projects-docs/?tab=readme-ov-file#contribute',
              label: 'Help us translate',
            },
          ],
        },
				{
					'aria-label': 'GitHub Repository',
					'className': 'header--github-link',
					'href': 'https://github.com/marcusolsson/obsidian-projects',
					'position': 'right',
				},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Acylation. ❤ Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
