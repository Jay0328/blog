module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const { name: filename } = getNode(node.parent);
    const result = filename.toLowerCase().split('-');
    const {
      name = result[3],
      date: dateString = result
        .slice(result.length - 1, result.length)
        .join('-')
    } = node.frontmatter;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const slug = `/post/${year}/${month}/${day}/${name}`;

    createNodeField({
      node,
      name: 'date',
      value: date
    });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};
