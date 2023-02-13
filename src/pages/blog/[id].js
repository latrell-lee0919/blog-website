import Header from '@/components/header';
import Head from 'next/head';
import ContentfulApi from 'utils/ContentfulApi';
import Date from '@/components/date';

export async function getStaticPaths() {
  const paths = await ContentfulApi.getAllSlugs();
  return {
      paths,
      fallback: false,
  }
}

export async function getStaticProps({ params }) {
    const blog = await ContentfulApi.getPageBySlug(params.id);
    return {
        props: {
            blog,
        },
    };
}

export default function Blog({ blog }) {
  const blogData = blog?.blogPostCollection?.items[0];
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <br />
          <small>
              <Date dateString={blogData.date} />
          </small>
          <br />
          <br />
          <h1 className="display-6">
            {blogData.title}
          </h1>
        </div>
      </div>
    </>
  )
}