// @ts-check
// @type JSDoc annotations allow editor autocompletion and type checking
// (when paired with @ts-check).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Necro-Com',
  tagline: 'Want to find something quickly? Use the search.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/joeseos/necro-com/tree/main/',
          // Enable last update time and author display
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Necro-Com',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Rules',
            position: 'left',
            items: [
              {
                label: 'Rules Intro',
                to: '/docs/intro', // Link to Rules Intro page
              },
              {
                label: 'Conditions',
                to: '/docs/general-principles/conditions', // Link to Conditions page
              },
              {
                label: 'Skills',
                to: '/docs/gang-fighters--their-weaponry/skills', // Link to Skills page
              },
              {
                label: 'Weapon Traits',
                to: '/docs/gang-fighters--their-weaponry/weapon-traits', // Link to Weapon Traits page
              },
            ],
          },
          {
            label: 'Campaigns',
            position: 'left',
            items: [
              {
                label: 'The Underhells Campaign',
                to: '/docs/campaigns/underhells-campaign/using-the-campaign', // Link to The Underhells Campaign page
              },
            ],
          },
          { to: '/blog', label: 'UPDATES', position: 'right' }, // Blog section
          {
            href: 'https://github.com/joeseos/necro-com',
            label: 'GitHub',
            position: 'right',
          }, // GitHub link
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Rules Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Yaktribe',
                href: 'https://yaktribe.games/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `This site is a free community project not associated with Games Workshop. All original content is Copyright © ${new Date().getFullYear()} Games Workshop`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
