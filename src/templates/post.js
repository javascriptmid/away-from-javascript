import React, { Component } from 'react';
import linkifyHtml from 'linkifyjs/html';
import ReactAudioPlayer from 'react-audio-player';

import { ThemeConsumer } from '../components/ThemeProvider';
import BaseLayout from '../layouts/BaseLayout';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Page from '../components/Page';

class PostTemplate extends Component {
  render() {
    const post = this.props.data.allPodcastFeedItem;

    return (
      <BaseLayout>
        <ThemeConsumer>
          {theme => (
            <Page>
              <Grid>
                <Row>
                  <Col xs>
                    <div>
                      <h1>{post.edges[0].node.title}</h1>

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

                      <p>{post.edges[0].node.description}</p>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </Page>
          )}
        </ThemeConsumer>
      </BaseLayout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($guid: String!) {
    allPodcastFeedItem(limit: 1, filter: { guid: { eq: $guid } }) {
      edges {
        node {
          guid
          title
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
