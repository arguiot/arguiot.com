import cn from 'classnames'
import Link from 'next/link'
import Image from "next/image"
type Props = {
  title: string
  src: string
  link?: string
}

const CoverImage = ({ title, src, link }: Props) => {
  const image = (
    <Image
      src={src}
      layout="fill"
      objectFit="cover"
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200 rounded': link,
      })}
    />
  )
  return (
    <div className="sm:mx-0" style={{ position: "relative", height: "350px" }}>
      {link ? (
        <Link href={link}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
