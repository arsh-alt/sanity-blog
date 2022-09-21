export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'Slug',
            type: 'slug',
            title: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
        {
            title: 'metadesc',
            name: 'metadesc',
            type: 'text',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
                            options: {
                                isHighlighted: true,
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'createdAt',
            type: 'datetime',
            title: 'createdAt',
        },
        {
            title: 'Blog image',
            name: 'blogImage',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true,
                    },
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                },
            ],
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        },
    ],
}