import React from 'react';
import { graphql } from 'gatsby';
import ReactAudioPlayer from 'react-audio-player';

import { ThemeConsumer } from '../components/ThemeProvider';
import BaseLayout from '../layouts/BaseLayout';
import Post from '../components/Post';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Page from '../components/Page';

export default function PostTemplate(props) {
  const post = props.data.allPodcastFeedItem;

  return (
    <BaseLayout>
      <ThemeConsumer>
        {theme => (
          <Page>
            <Grid>
              <Row>
                <Col xs>
                  <ReactAudioPlayer
                    style={{
                      width: '100%',
                      marginTop: 12,
                      marginBottom: 12,
                    }}
                    src={post.edges[0].node.enclosure.url}
                    autoPlay={false}
                    controls
                  />
                  <Post
                    published={post.edges[0].node.published}
                    image={post.edges[0].node.image}
                    title={post.edges[0].node.title}
                    description={post.edges[0].node.description}
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
