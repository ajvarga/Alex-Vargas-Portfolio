export default {
    name: 'art',
    title: 'Art',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    {
    name: 'publishedAt',
    title: 'Published at',
    type: 'datetime',
    },
    ]
}