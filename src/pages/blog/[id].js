import Header from '@/components/header';
import Image from 'next/image';
import ContentfulApi from 'utils/ContentfulApi';
import Date from '@/components/date';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
  const richTextDocument = blogData.blogExcerpt?.json;

  const Bold = ({ children }) => <b className="bold">{children}</b>;

  const Text = ({ children }) => <p className="lead">{children}</p>;

  const Heading = ({ children }) => <p className="h4">{children}</p>;

  const Quote = ({ children }) => <blockquote class="blockquote">{ children }</blockquote>;

  const BlogImage = ({ children }) => <Image priority src={ children } height={144} width={144} alt="Blog Img" />;
  // revisit later

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => <BlogImage />
    },
  };

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
          <section>
            {
              documentToReactComponents(richTextDocument, options)
            }
          </section>
        </div>
      </div>
    </>
  )
}