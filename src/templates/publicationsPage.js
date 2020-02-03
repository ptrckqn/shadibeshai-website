import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Section from '../components/Section';
import JournalFile from '../components/JournalFile';
import TextBlock from '../components/TextBlock';

const publicationsPage = ({ data }) => {
  const { title, journal, conference } = data.markdownRemark.frontmatter;
  return (
    <Layout title="Publications">
      <Section>
        <h2>{title}</h2>
        {journal.data.map(({ title, file }) => (
          <JournalFile url={file}>{title}</JournalFile>
        ))}
        {conference.data.map(({ title, body }) => (
          <TextBlock title={title}>{body}</TextBlock>
        ))}
      </Section>
    </Layout>
  );
};

export default publicationsPage;

export const pageQuery = graphql`
  query publicationsQuery {
    markdownRemark(frontmatter: { template: { eq: "publicationsPage" } }) {
      frontmatter {
        title
        journal {
          title
          data {
            title
            file
          }
        }
        conference {
          title
          data {
            title
            body
          }
        }
      }
    }
  }
`;
