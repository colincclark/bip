import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

interface PostParams {
  params: {
    slug: string
  }
}

interface PostProps {
  post: {
    id: number
    slug: string
    title: string
  }
}

const posts = [
  {
    id: 1,
    slug: 'my-london-post',
    title: 'London Post',
  },
  {
    id: 2,
    slug: 'my-quito-post',
    title: 'Quito Post',
  },
]

const Post = ({ post }: PostProps) => {
  let title = "Loading..."

  if (post) {
    title = `Colin and Francesca: ${post.title}`
  }

  const [likes, setLikes] = React.useState(0);

  const handleClick = () => {
    setLikes(likes + 1)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>

      <button onClick={handleClick}>Like ({likes})</button>
    </>
  )
}

export function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export function getStaticProps({ params }: PostParams) {
  const post = posts.find(({ slug: postSlug }) => postSlug === params.slug)
  return { props: { post } }
}

export default Post
