export interface AuthorModel{
    name: string;
    bio: string;
    avatar: object;
}

export interface SlugModel{
    current: string;
    _type: string;
}

export interface BlogModel{
    title: string;
    metadesc: string;
    content: Array<object>;
    createdAt: string;
    _id: string;
    blogImage: object;
    author: AuthorModel;
    slug: SlugModel;
} 