import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Section from '../components/Section';
import Bio from '../components/Bio';

const labPage = ({ data }) => {
  const { title, bio } = data.markdownRemark.frontmatter;
  return (
    <Layout title="Lab">
      <Section>
        <h2>{title}</h2>
        {bio.map(({ title, sub, image, body }, count) => (
          <Bio
            title={title}
            sub={sub}
            image={image}
            key={count}
            variant={count % 2 === 0}
          >
            {body}
          </Bio>
        ))}
      </Section>
    </Layout>
  );
};

export default labPage;

export const pageQuery = graphql`
  query labQuery {
    markdownRemark(frontmatter: { template: { eq: "labPage" } }) {
      frontmatter {
        title
        bio {
          title
          sub
          image {
            childImageSharp {
              fixed(width: 400, height: 500) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
          body
        }
      }
    }
  }
`;
