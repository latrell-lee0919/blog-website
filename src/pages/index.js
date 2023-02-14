import ContentfulApi from 'utils/ContentfulApi';
import Header from '@/components/header';
import BlogsFeed from '@/components/blogs';

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
      <p className="lead d-flex justify-content-center">
         See what&#39;s been on my mind lately!
      </p>
      <hr className="hr" />
      <BlogsFeed blog={blogData?.blogPostCollection?.items}/>
    </>
  )   
}