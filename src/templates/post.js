import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import ReactAudioPlayer from 'react-audio-player';
import lozad from 'lozad';

import { ThemeConsumer } from '../components/ThemeProvider';
import BaseLayout from '../layouts/BaseLayout';
import Post from '../components/Post';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Page from '../components/Page';

export default function PostTemplate(props) {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  });

  const post = props.data.allPodcastFeedItem.edges[0];

  return (
    <BaseLayout
      image={post.node.image}
      audio={post.node.enclosure.url}
      title={post.node.title}
      description={post.node.description}
    >
      <ThemeConsumer>
        {theme => (
          <Page>
            <Grid>
              <Row center="xs">
                <Col xs md={8}>
                  <ReactAudioPlayer
                    className="lozad"
                    style={{
                      width: '100%',
                      marginTop: 12,
                      marginBottom: 12,
                    }}
                    data-src={post.node.enclosure.url}
                    autoPlay={false}
                    controls
                  />
                  <Post
                    published={post.node.published}
                    image="logo.png"
                    title={post.node.title}
                    description={post.node.description}
                  />
                </Col>
              </Row>
            </Grid>
          </Page>
        )}
      </ThemeConsumer>
    </BaseLayout>
  );
}

export const pageQuery = graphql`
  query currentPostQuery($guid: String!) {
    allPodcastFeedItem(limit: 1, filter: { guid: { eq: $guid } }) {
      edges {
        node {
          guid
          title
          image
          description
          published(formatString: "DD/MM/YYYY")
          duration
          enclosure {
            url
            filesize
            type
          }
        }
      }
    }
  }
`;
