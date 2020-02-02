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

const indexPage = ({ data }) => {
  const {
    heroImage,
    about,
    publications,
    lab,
  } = data.markdownRemark.frontmatter;
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
        <LinkedHeader url="/publications">{publications.title}</LinkedHeader>
        <Cards title={publications.journalTitle}>
          {publications.journalData.map(({ title, file }) => (
            <a
              href={file}
              target="__blank"
              style={{ textDecoration: 'none' }}
              key={title}
            >
              <Card title={title}></Card>
            </a>
          ))}
        </Cards>
        <Cards title={publications.conferenceTitle} variant>
          {publications.conferenceData.map(({ title, body }) => (
            <Card title={title} key={title}>
              {body}
            </Card>
          ))}
        </Cards>
      </Section>
      <Section>
        <LinkedHeader url="/lab">{lab.title}</LinkedHeader>
        {lab.data.map(({ title, body }) => (
          <TextBlock title={title} key={title}>
            {body}
          </TextBlock>
        ))}
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
        publications {
          title
          journalTitle
          journalData {
            title
            file
          }
          conferenceTitle
          conferenceData {
            title
            body
          }
        }
        lab {
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
