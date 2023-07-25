const Populate = ({ posts }: any) => {
  return (
    posts && (
      <ul>
        {
          posts.map(({ id, slug, title }: any) => (
            <li key={id}>
              <span>{title}</span>
              <span>{slug}</span>
            </li>
          ))}
      </ul>
    )
  )
}

export async function getStaticProps() {
  // const response = await fetch('http://localhost:3000/api/seed-posts', {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // })

  // console.log(response)

  // const posts = await response.json();
  return {
    props: {
      posts: [],
    },
  }
}

export default Populate
