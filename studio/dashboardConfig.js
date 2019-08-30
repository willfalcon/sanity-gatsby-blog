export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d695ec2077dad77dee4f7c2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rmase66w',
                  apiId: '01a8315a-2d27-442f-addc-e137ab01b1f4'
                },
                {
                  buildHookId: '5d695ec2852f3d922b9a5fd8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dq7ifwdi',
                  apiId: 'a9eb791c-1264-458f-bb0b-44682cfdac00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/willfalcon/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dq7ifwdi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
