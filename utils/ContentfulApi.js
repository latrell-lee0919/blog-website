export default class ContentfulApi {

    static async callContenful(query, variables = {}) {
        const fetchUrl =
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

        const fetchOptions = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              query, 
              variables 
            }),
        };

        try {
            const data = await fetch(fetchUrl, fetchOptions)
            .then((response) =>
                response.json(),
            );
            return data;
        } catch (error) {
            throw new Error("Could not fetch data from Contentful!");
        }
    }

    static async getAllBlogPosts() {
        const query = `{
            blogPostCollection(order: date_DESC) {
              items {
                sys {
                  id
                }
                date
                title
                slug
                tags
                preview
                primaryPicture {
                  url
                }
                secondaryPicture {
                  url
                }
              }
            }
        }`;

        const response = await this.callContenful(query);

        const sortedBlogs = response.data;

        return sortedBlogs;
    }

    static async getBlogPostsPreviews() {
        const query = `{
            blogPostCollection(limit: 5, order: date_DESC) {
                items {
                    sys {
                        id
                    }
                    slug
                    date
                    title
                    preview
                    tags
                }
            }
        }`;

        const response = await this.callContenful(query);
        
        const blogPreviews = response.data;

        return blogPreviews;
    }

    static async getAllSlugs() {
        const query = `{
            blogPostCollection {
                items {
                  slug
                }
            }
        }`;

        const response = await this.callContenful(query);

        const slugs = response.data?.blogPostCollection?.items;

        return slugs.map((item) => {
            return {
                params: {
                    id: item.slug,
                },
            }
        });
    }

    static async getPageBySlug(slug) {
        const variables = { slug };

        const query = `
        query GetPostBySlug($slug: String!){
          blogPostCollection(where:{slug: $slug}) {
            items {
              date
              title
              slug
              blogExcerpt {
                json
              }
              tags
              preview
              primaryPicture {
                url
              }
              secondaryPicture {
                url
              }
            }
          }
      }`;

        const response = await this.callContenful(query, variables);

        const page = response.data;

        return page;
    }
}