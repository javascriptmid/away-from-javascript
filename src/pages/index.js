import React from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Post from '../components/Post';
import HeroPost from '../components/HeroPost';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Page from '../components/Page';

const IndexPage = ({ data }) => {
  const [headerPost, ...posts] = data.allPodcastFeedItem.edges;

  return (
    <BaseLayout>
      <Page>
        <Grid>
          <Row>
            <Col xs>
              <HeroPost
                published={headerPost.node.published}
                image={headerPost.node.image}
                title={headerPost.node.title}
                description={headerPost.node.description}
              />
            </Col>
          </Row>
          <Row>
            {posts.map(post => (
              <Col xs>
                <Post
                  published={post.node.published}
                  image={post.node.image}
                  title={post.node.title}
                  description={post.node.description}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </Page>
    </BaseLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allPodcastFeedItem {
      edges {
        node {
          guid
          title
          image
          description
          published(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`;
