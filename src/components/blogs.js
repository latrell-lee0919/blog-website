import Date from "./date"
import Link from "next/link"

export default function BlogsFeed({ blog }) {
  return (
    <div className="container">
      <ul className="list-group list-group-flush">
      {blog.map(({ slug, date, title, preview }) => (
        <li key={slug} className="list-group-item">
          <article>
            <small className="d-flex justify-content-center">
              <Date dateString={date} />
            </small>
            <Link href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
              <h1 className='display-6 fs-3 text-black d-flex justify-content-center'>
                {title}
              </h1>
            </Link>
            <span className="lead d-flex justify-content-center">
              {preview}
            </span>
          </article>
          <br />
        </li>
      ))}
      </ul>
    </div>
  )
}