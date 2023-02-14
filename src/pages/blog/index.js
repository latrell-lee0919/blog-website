import ContentfulApi from 'utils/ContentfulApi';
import Header from '@/components/header';
import BlogsFeed from '@/components/blogs';
import Footer from '@/components/footer';
import { useState } from 'react';

export async function getStaticProps() {
    const blogData = await ContentfulApi.getAllBlogPosts();
    return {
        props: {
            blogData,
        },
    };
}

export default function Blogs({ blogData }) {
  const [newFilter, setNewFilter] = useState('');

  const Filter = () => {
    const tags = blogData?.blogPostCollection?.items.map((blog) => blog.tags[0]);
    const uniqueTags = new Set(tags);
    const finalTags = [...uniqueTags];

    return (
      <div className="dropdown  d-flex justify-content-center">
        <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
          Select a Topic
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item lead" name="See All" onClick={() => { setNewFilter('')}}>see all blogs</a>
          {finalTags.map(tag => 
            <a className="dropdown-item lead" key={tag} name={tag} onClick={(event) => setNewFilter(event.target.name)}>{tag}</a>
          )}
        </div>
      </div>
    )
  }



  const filteredBlogs = newFilter === '' ? 
    blogData?.blogPostCollection?.items : 
    blogData?.blogPostCollection?.items.filter(blog => blog.tags[0].includes(newFilter));

  return (
    <>
      <Header />
      <br />
      <h1 className="display-6 d-flex justify-content-center">
        Articles
      </h1>
      <Filter />
      <br />
      <p className="lead d-flex justify-content-center text-center">
        Check out my writings below! A variery of content can be found, from fitness to book reviews. Use the filter above if you don&#39;t feel like scrolling! 
      </p>
      <hr className="hr" />
      <BlogsFeed blog={filteredBlogs}/>
      <div style={{ paddingBottom: '200px'}}/>
      <Footer />
    </>
    
  )
}