import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import LinkedHeader from '../components/LinkedHeader';
import TextBlock from '../components/TextBlock';
import Cards from '../components/Cards';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';

import extractHostName from '../utils/extractHostName';

const indexPage = ({ data }) => {
  const { heroImage, about } = data.markdownRemark.frontmatter;

  const publications = data.publications.frontmatter;
  const lab = data.lab.frontmatter;
  const media = data.media.frontmatter;

  return (
    <Layout title="Welcome">
      <Hero image={heroImage} />
      <Section>
        <h2>{about.title}</h2>
        {about.data.map(({ title, body }) => (
          <TextBlock title={title} key={title}>
            {body}
          </TextBlock>
        ))}
      </Section>
      <Section>
        <LinkedHeader url="/publications">Publications</LinkedHeader>
        <Cards title={publications.journal.title}>
          {publications.journal.data.map(({ title, file }, i) => {
            if (i > 3) return null;
            return (
              <a
                href={file}
                target="__blank"
                style={{ textDecoration: 'none' }}
                key={title}
              >
                <Card title={title}></Card>
              </a>
            );
          })}
        </Cards>
        <Cards title={publications.conference.title} variant>
          {publications.conference.data.map(({ title, body }, i) => {
            if (i > 3) return null;

            return (
              <Card title={title} key={title}>
                {body}
              </Card>
            );
          })}
        </Cards>
      </Section>
      <Section>
        <LinkedHeader url="/lab">{lab.title}</LinkedHeader>
        <TextBlock title={lab.bio[0].title}>{lab.bio[0].body}</TextBlock>
      </Section>
      <Section>
        <h2>{media.title}</h2>
        <Cards variant>
          {media.data.map(({ title, url }, i) => {
            if (i > 3) return null;
            return (
              <a
                href={url}
                target="__blank"
                style={{ textDecoration: 'none' }}
                key={title}
              >
                <Card title={title}>{extractHostName(url)}</Card>
              </a>
            );
          })}
        </Cards>
      </Section>
      <Section id="contact">
        <h2>Contact</h2>
        <ContactForm />
      </Section>
    </Layout>
  );
};

export default indexPage;

export const pageQuery = graphql`
  query indexQuery {
    markdownRemark(frontmatter: { template: { eq: "indexPage" } }) {
      frontmatter {
        heroImage {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        about {
          title
          data {
            title
            body
          }
        }
      }
    }

    publications: markdownRemark(
      frontmatter: { template: { eq: "publicationsPage" } }
    ) {
      frontmatter {
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

    lab: markdownRemark(frontmatter: { template: { eq: "labPage" } }) {
      frontmatter {
        title
        bio {
          title
          sub
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          body
        }
      }
    }

    media: markdownRemark(frontmatter: { template: { eq: "mediaPage" } }) {
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
