import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const query = router.query

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

    const post = posts.find(({ slug }) => slug === query.slug)

    return (
        <h1>{ post.title }</h1>
    )
}

export default Post
