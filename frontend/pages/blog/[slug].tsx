import { NextPage, GetServerSideProps } from 'next'
import { BlogModel } from '../../lib/interfaces'
import { createClient } from 'next-sanity'
import { useRouter } from 'next/router'

interface Props {
    blog: Array<BlogModel>
    slug: string
}
const client = createClient({
    projectId: 'hqvbz3wi',
    dataset: 'production',
    apiVersion: '2022-09-21',
    useCdn: false,
})

const BlogPage: NextPage<Props> = ({ blog, slug }) => {
    console.log(slug, blog)
    return <div className="flex w-full h-full justify-center"></div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.query
    const query = `*[_type == "blog" && Slug.current == '${slug}'][0]`
    const blog: BlogModel = await client.fetch(query)
    return {
        props: { blog: blog, slug: slug },
    }
}

export default BlogPage
