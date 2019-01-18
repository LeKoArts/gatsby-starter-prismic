const path = require('path');
const _ = require('lodash');

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
            data {
              categories {
                category {
                  document {
                    data {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const postTemplate = path.resolve('src/templates/post.jsx');
  const categoryTemplate = path.resolve('src/templates/category.jsx');

  const categorySet = new Set();
  const postsList = pages.data.allPrismicPost.edges;

  postsList.forEach(edge => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach(cat => {
        categorySet.add(cat.category.document[0].data.name);
      });
    }

    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const categoryList = Array.from(categorySet);
  categoryList.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });
};
