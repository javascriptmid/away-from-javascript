import React from 'react';
import { graphql } from 'gatsby';

import { ThemeConsumer } from '../components/ThemeProvider';

import {
  BaseLayout,
  Post,
  Grid,
  Row,
  Col,
  Page,
  AudioPlayer,
} from '../components';

export default function PostTemplate(props) {
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
                  <AudioPlayer
                    style={{
                      width: '100%',
                      marginTop: 12,
                      marginBottom: 12,
                    }}
                    src={post.node.enclosure.url}
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
