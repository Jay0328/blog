const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

const TEMPLATE_PATH = path.resolve(__dirname, '..', 'src', 'templates');
const getTemplate = tempalteName =>
  path.resolve(TEMPLATE_PATH, tempalteName, 'index.tsx');

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { fields: fields___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
              date
              title
              description
              tags
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  const { edges = [] } = allMarkdown.data.allMarkdownRemark;
  const tagSet = new Set();

  createPaginatedPages({
    edges,
    createPage,
    pageTemplate: getTemplate('page'),
    context: { postCount: edges.length },
    pathPrefix: 'pages',
    buildPath: (index, pathPrefix) =>
      index > 1 ? `${pathPrefix}/${index}` : '/'
  });

  edges.forEach(({ node }) => {
    const { fields } = node;
    const { slug, tags } = fields;

    if (tags) {
      tags.forEach(item => tagSet.add(item));
    }

    createPage({
      path: slug,
      tags,
      component: getTemplate('post'),
      context: { slug }
    });
  });
};
