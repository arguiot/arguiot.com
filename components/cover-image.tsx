import cn from 'classnames'
import Link from 'next/link'
type Props = {
  title: string
  src: string
  link?: string
}

const CoverImage = ({ title, src, link }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200 rounded': link,
      })}
      style={{ width: "100%" }}
    />
  )
  return (
    <div className="sm:mx-0">
      {link ? (
        <Link href={link} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
