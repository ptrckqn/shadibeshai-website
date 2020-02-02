import React from 'react';
import { graphql } from 'gatsby';

const indexPage = () => {
  return <div>hello world</div>;
};

export default indexPage;

export const pageQuery = graphql`
  query indexQuery {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        template
      }
    }
  }
`;
