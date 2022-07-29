import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
  return (
    <div className={styles.container}>
      <Head>
        <title>Our blog post</title>
        <meta name="description" content="Our blog post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our blogpost
        </h1>
      </main>

      <aside>
        <ol>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={{
                  pathname: "/post/[slug]",
                  query: { slug: encodeURIComponent(post.slug) },
                }}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ol>
      </aside>

      <footer className={styles.footer}>
        <Link href="/about">
          About Us
        </Link>
      </footer>
    </div>
  )
}

export default Home
