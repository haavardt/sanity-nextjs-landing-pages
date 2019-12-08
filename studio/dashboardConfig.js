export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ded65f6d6a547e8734b379f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-arfbnerd',
                  apiId: '9aed89d7-0137-4e00-8a7d-bdcdb50df0e9'
                },
                {
                  buildHookId: '5ded65f6b3f928245d357d55',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-az4q4yv3',
                  apiId: '37aa9c3f-c528-484c-98b0-440a299f271c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haavardt/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-az4q4yv3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
