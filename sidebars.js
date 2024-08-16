module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Main Category',
      items: [
        {
          type: 'category',
          label: 'Subcategory',
          items: [
            {
              type: 'doc', // Link to a document under this subcategory
              id: 'doc1',  // Document ID (relative path without the file extension)
            },
            {
              type: 'doc',
              id: 'doc2',
            },
            {
              type: 'category',  // Nested category under Subcategory
              label: 'Nested Category',
              items: [
                'nested_doc1',  // Document ID in the nested category
                'nested_doc2',
              ],
            },
          ],
        },
        'another_doc',  // Document in Main Category
      ],
    },
  ],
};
