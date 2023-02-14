import ContentfulApi from 'utils/ContentfulApi';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogsFeed from '@/components/blogs';
import Link from 'next/link';

export async function getStaticProps() {
    const blogData = await ContentfulApi.getBlogPostsPreviews();
    return {
        props: {
            blogData,
        },
    };
}

export default function Home({ blogData }) {
  return (
    <>
      <Header />
      <br />
      <h1 className="display-6 d-flex justify-content-center">
        Recent Articles
      </h1>
      <br />
      <p className="lead d-flex justify-content-center text-center">
         See what&#39;s been on my mind lately!
      </p>
      <hr className="hr" />
      <BlogsFeed blog={blogData?.blogPostCollection?.items}/>
      <br />
      <div className='d-flex justify-content-center mb-5' style={{ paddingBottom: '200px'}}>
        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <button type="button" className="btn btn-secondary">See More Articles</button>
        </Link>
      </div>
      <Footer />
    </>
  )   
}