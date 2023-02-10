import ContentfulApi from 'utils/ContentfulApi';

export async function getStaticProps() {
    const allBlogPosts = await ContentfulApi.getAllBlogPosts();
    return {
        props: {
            allBlogPosts,
        },
    };
}

export default function Blogs({ allBlogPosts }) {
    
}