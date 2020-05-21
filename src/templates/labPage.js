import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Section from '../components/Section';
import Bio from '../components/Bio';

const labPage = ({ data }) => {
  const { title, current, alumni } = data.markdownRemark.frontmatter;
  return (
    <Layout title="Lab">
      <Section>
        <h2>{title}</h2>
      </Section>
      <Section>
        <h3>{current.title}</h3>
        {current.bio &&
          current.bio.map(({ title, sub, image, body }, count) => (
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
      <Section>
        <h3>{alumni.title}</h3>
        {alumni.bio &&
          alumni.bio.map(({ title, sub, image, body }, count) => (
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
        current {
          title
          bio {
            title
            sub
            body
            image {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        alumni {
          title
          bio {
            title
            sub
            body
            image {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
