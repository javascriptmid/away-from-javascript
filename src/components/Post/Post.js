import React, { useEffect } from 'react';
import Link from 'gatsby-link';
import linkifyHtml from 'linkifyjs/html';
import slugify from 'slugify';
import lozad from 'lozad';

import styles from './Post.module.css';

import { ThemeConsumer } from '../ThemeProvider';
import Row from '../Row';
import Col from '../Col';

export default function Post({ ep, image, title, description, published }) {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  });

  return (
    <ThemeConsumer>
      {theme => (
        <Link
          style={{ textDecoration: 'none' }}
          to={slugify(title, { lower: true })}
        >
          <article className={styles.Post}>
            <Row>
              <Col xs={2}>
                <img
                  className={`lozad ${styles.PostImage}`}
                  data-src={image}
                  alt={title}
                />
              </Col>
              <Col xs>
                <div>
                  <h2
                    className={`subtitle ${styles.PostTitle}`}
                    style={{ color: theme.Darker }}
                  >
                    {ep ? `${ep}: ${title}` : title}
                  </h2>
                  <div
                    style={{ color: theme.Dark }}
                    dangerouslySetInnerHTML={{
                      __html: linkifyHtml(description).replace(
                        /(?:\r\n|\r|\n)/g,
                        '<br />'
                      ),
                    }}
                  />
                </div>
              </Col>
            </Row>
          </article>
        </Link>
      )}
    </ThemeConsumer>
  );
}
