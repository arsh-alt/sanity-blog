import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { BlogModel } from '../lib/interfaces'
import { createClient } from 'next-sanity'
import BlogCard from '../components/BlogCard'

const client = createClient({
    projectId: 'hqvbz3wi',
    dataset: 'production',
    apiVersion: '2022-09-21',
    useCdn: false,
})

type homeProps = {
    blogs: Array<BlogModel>
    isOpen: boolean
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = `*[_type=="blog"]` //fetching all thr blogs
    const blogs: Array<object> = await client.fetch(query)
    return { props: { blogs } }
}

const Home: NextPage<homeProps> = ({ blogs, isOpen }) => {
    return (
        <div className={isOpen ? '' : 'flex w-screen flex-col p-3'}>
            {blogs.map((blog) => (
                <BlogCard
                    title={blog.title}
                    metadesc={blog.metadesc}
                    blogImage={blog.blogImage}
                    slug={blog.Slug}
                    key={blog.Slug.current}
                />
            ))}
        </div>
    )
}

export default Home