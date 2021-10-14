import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { Badge, Spacer } from '@geist-ui/react'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  link: string
  project: boolean
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  link,
  project
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage link={link} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={ link }>
          <a className="hover:underline text-current">{title}</a>
        </Link>
        { project && <>
        <Spacer w={1} inline />
        <Badge>Project</Badge>
        </> }
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
