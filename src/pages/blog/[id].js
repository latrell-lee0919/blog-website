import Head from 'next/head';
import ContentfulApi from 'utils/ContentfulApi';

export async function getStaticProps({ params }) {
    const blog = await ContentfulApi.getPageBySlug(params.id);
    return {
        props: {
            blog,
        },
    };
}

export async function getStaticPaths() {
    const paths = await ContentfulApi.getAllSlugs();
    return {
        paths,
        fallback: false,
    }
}

export default function Blog({ blog }) {
    
}