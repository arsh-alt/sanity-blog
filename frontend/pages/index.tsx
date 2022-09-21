import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { BlogModel } from '../lib/interfaces'
import { createClient } from 'next-sanity'

const client = createClient({
    projectId: 'swphe1qd',
    dataset: 'production',
    apiVersion: 'v1',
    useCdn: false,
})

type homeProps = {
    blogs: Array<BlogModel>
    isOpen: boolean
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = `*[_type == "blog"][0...3] ` //fetching the first 3 blogs
    const blogs: Array<object> = await client.fetch(query)
    return { props: { blogs } }
}

const Home: NextPage<homeProps> = ({ blogs, isOpen }) => {
    return <div className={isOpen ? 'hidden' : 'flex w-screen'}>9uadshfad</div>
}

export default Home
