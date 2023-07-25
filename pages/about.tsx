import type { NextPage } from 'next'
import Head from 'next/head'

import ContentContainer from 'components/ContentContainer'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Colin and Francesca: About Us</title>
      </Head>

      <ContentContainer>
        <h2>Who are we?</h2>
        <p>Hi everyone. We are Colin and Francesca, a couple who have travelled around the world both independently, and together.</p>
      </ContentContainer>
    </>
  )
}

export default About
