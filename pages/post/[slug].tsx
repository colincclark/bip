import { useEffect } from 'react'
import { useRouter } from 'next/router'

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

const Post = () => {
  let title = "Loading..."

  const router = useRouter()
  const { slug } = router.query

  const post = posts.find(({ slug: postSlug }) => postSlug === slug)

  if (post) {
    title = post.title
  }

  return <h1>{ title }</h1>
}

export default Post
