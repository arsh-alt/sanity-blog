export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
        },
        {
            name: 'avatar',
            type: 'image',
            title: 'Avatar',
            options: {
                hotspot: true,
            },
        },
    ],
}