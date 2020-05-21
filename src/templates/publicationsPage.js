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
        <h2>{journal.title}</h2>
        {journal.data.map(({ title, file }) => (
          <JournalFile url={`/uploalds/${file.relativePath}`}>
            {title}
          </JournalFile>
        ))}
      </Section>
      <Section>
        <h2>{conference.title}</h2>
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
        journal {
          title
          data {
            title
            file {
              relativePath
            }
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
