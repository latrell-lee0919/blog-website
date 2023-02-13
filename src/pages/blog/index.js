import ContentfulApi from 'utils/ContentfulApi';
import Header from '@/components/header';
import BlogsFeed from '@/components/blogs';

export async function getStaticProps() {
    const blogData = await ContentfulApi.getAllBlogPosts();
    return {
        props: {
            blogData,
        },
    };
}

export default function Blogs({ blogData }) {
  return (
    <>
      <Header />
      <br />
      <h1 className="display-6 d-flex justify-content-center">
        Articles
      </h1>
      <br />
      <p className="lead d-flex justify-content-center text-wrap">
        Check out my writings below! A variery of content can be found, from fitness to book reviews. 
      </p>
      <hr className="hr" />
      <BlogsFeed blog={blogData}/>
    </>
    
  )
}