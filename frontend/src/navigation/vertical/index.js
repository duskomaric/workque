export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Second Page',
    route: 'second-page',
    icon: 'FileIcon',
  },

    {
        header: 'Apps & Pages',
    },
    {
        title: 'Invoice',
        icon: 'FileTextIcon',
        children: [
            {
                title: 'List',
                route: 'apps-invoice-list',
            },
            {
                title: 'Preview',
                route: { name: 'apps-invoice-preview', params: { id: 4987 } },
            },
            {
                title: 'Edit',
                route: { name: 'apps-invoice-edit', params: { id: 4987 } },
            },
            {
                title: 'Add',
                route: { name: 'apps-invoice-add' },
            },
        ],
    },
    {
        title: 'User',
        icon: 'UserIcon',
        children: [
            {
                title: 'List',
                route: 'apps-users-list',
            },
            {
                title: 'View',
                route: { name: 'apps-users-view', params: { id: 21 } },
            },
            {
                title: 'Edit',
                route: { name: 'apps-users-edit', params: { id: 21 } },
            },
        ],
    },
]
