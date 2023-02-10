import Head from 'next/head';
import Link from 'next/link';
import ContentfulApi from 'utils/ContentfulApi';

export async function getStaticProps() {
    const blogData = ContentfulApi.getBlogPostsPreviews();
    return {
        props: {
            blogPreviewData,
        },
    };
}

export default function Home({ blogPreviewData }) {
    
}