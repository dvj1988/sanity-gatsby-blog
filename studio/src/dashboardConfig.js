export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e598a5ce53ccd019cdac849',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f97t62qo',
                  apiId: '41ddd16d-11fc-4b8a-809c-709740955864'
                },
                {
                  buildHookId: '5e598a5d720793017996b4d2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ki2zy8dd',
                  apiId: 'c382238d-1e90-470f-8880-455fe51d66f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/diljitvj/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ki2zy8dd.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
