import fs from 'fs'
import path from 'path'
import parser from 'xml2json'
import type { NextApiRequest, NextApiResponse } from 'next'

import { setContent, setCountryId, setTripId } from 'lib/seed-posts'

import getDB from 'lib/db'

type AuthorName = 'Unknown' | 'Franchisikms'

interface Entry {
  author: {
    name: AuthorName
  }
  content: {
    '$t': string
  }
  published: string
  title: {
    '$t': string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = getDB()
  const seedPostsPath = path.join(process.cwd(), 'posts/blog.xml')

  fs.readFile(seedPostsPath, (err, xml) => {
    const { feed: data }: any = parser.toJson(xml, {
      object: true,
    })

    const reversedData = data.entry.reverse()

    const sortedData = reversedData.sort(function (a: Entry, b: Entry) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      const aDate: any = new Date(a.published);
      const bDate: any = new Date(b.published);
      return aDate.getTime() - bDate.getTime();
    });

    sortedData.map(async (entry: Entry, index: number) => {
      const { author: { name }, content, published, title } = entry

      const postTitle = title['$t']
      const postSlug = postTitle.replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, "-").toLowerCase();
      const postContent = setContent(content['$t'], postSlug)
      const postedAt = published
      const postUserId = name === 'Unknown' ? 1 : 2
      const postCountryId = setCountryId(index)
      const postTripId = setTripId(index)

      if (!postContent) return

      const writeStream = fs.createWriteStream(`posts/${postSlug}.html`);
      writeStream.write(postContent);
      writeStream.end();

      // try {
      //   await db.none('INSERT INTO posts(id, slug, title, content, posted_at, user_id, country_id, trip_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [index + 1, postSlug, postTitle, postContent, postedAt, postUserId, postCountryId, postTripId])
      //   // success
      // }
      // catch (e) {
      //   // error
      //   console.log('error setting posts: ', e)
      // }
    })
  })

  res.status(200).json([])
}
