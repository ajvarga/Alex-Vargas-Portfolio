export default{
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'date',
            type: 'datetime',
        },
        {
            name: 'technologies',
            type: 'string',
        },
        {
            name: 'designImage',
            title: 'Design image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'projectType',
            title: 'Project type',
            type: 'string',
            options: {
                list: [
                        {value: 'personal', title: 'Personal'},
                        {value: 'group', title:'Group'},
                        {value: 'client', title: 'Client'},
                        {value: 'school', title: 'School'},
                    ],
                },
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                type: 'string',
            }
            ],
            options: {
                layout: 'tags',
            },
        },
    ],
}