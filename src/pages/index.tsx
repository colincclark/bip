import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { ThemeContext } from 'src/components/ThemeContext'
import ContentContainer from 'src/components/ContentContainer'

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

const Home: NextPage = () => {
  const theme: string = useContext(ThemeContext)

  return (
    <>
      <Head>
        <title>Colin and Francesca: Home Page</title>
      </Head>

      {
        posts && (
          <ul>
            {
              posts?.map((post) => (
                <li key={post.id}>
                  <ContentContainer>
                    <Link
                      href={{
                        pathname: "/post/[slug]",
                        query: { slug: encodeURIComponent(post.slug) },
                      }}
                    >
                      {post.title}
                    </Link>
                  </ContentContainer>
                </li>
              ))}
          </ul>
        )
      }
    </>
  )
}

export default Home
