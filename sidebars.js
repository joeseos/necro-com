// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manually define the sidebar
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Main Category',
      items: [
        'intro',  // Link to a document in Main Category
        {
          type: 'category',
          label: 'Subcategory',
          items: [
            'hello',  // Link to a document in Subcategory
            {
              type: 'category',  // Nested category under Subcategory
              label: 'Nested Category',
              items: [
                'tutorial-basics/create-a-document',  // Document ID in the Nested Category
                'tutorial-basics/create-a-page',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
