import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'vite/index',
      label: 'Vite',
    },
    {
      type: 'link',
      label: 'Facebook', // The link label
      href: 'https://facebook.com', // The external URL
    },
    {
      type: 'html',
      value: '<img src="sponsor.png" alt="Sponsor" />', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
  ],
};

export default sidebars;
