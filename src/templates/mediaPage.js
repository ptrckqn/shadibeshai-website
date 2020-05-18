import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';

import extractHostHame from '../utils/extractHostName';

const mediaPage = ({ data: media }) => {
  const { title, data } = media.markdownRemark.frontmatter;
  return (
    <Layout title="Media">
      <Section>
        <h2>{title}</h2>
        {data &&
          data.map(({ title, url }) => {
            return (
              <a href={url} target="__blank" style={{ textDecoration: 'none' }}>
                <TextBlock title={title} isLink>
                  {extractHostHame(url)}
                </TextBlock>
              </a>
            );
          })}
      </Section>
    </Layout>
  );
};

export default mediaPage;

export const pageQuery = graphql`
  query mediaQuery {
    markdownRemark(frontmatter: { template: { eq: "mediaPage" } }) {
      frontmatter {
        title
        data {
          title
          url
        }
      }
    }
  }
`;
