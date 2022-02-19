import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PostCard, Categories, PostWidget} from '../components'

const posts = [
  {title: 'Blog Test', excerpt: 'This is a test post'},
  {title: 'Blog Test 2', excerpt: 'This is a test post 2'},
]
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS blog</title>
        <link rel="icon" href="#"></link>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>



    </div>
  )
}
