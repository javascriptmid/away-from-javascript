import React from 'react';
import Link from 'gatsby-link';
import linkifyHtml from 'linkifyjs/html';
import slugify from 'slugify';

import styles from './Post.module.css';

import { ThemeConsumer } from '../ThemeProvider';
import Row from '../Row';
import Col from '../Col';

export default function Post({ image, title, description, published }) {
  return (
    <ThemeConsumer>
      {theme => (
        <article className={styles.Post}>
          <Row>
            <Col xs={3}>
              <img className={styles.PostImage} src={image} alt={title} />
            </Col>
            <Col xs>
              <div>
                <p style={{ color: theme.Dark }}>{published}</p>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={slugify(title, { lower: true })}
                >
                  <h2
                    className={`subtitle ${styles.PostTitle}`}
                    style={{ color: theme.Darker }}
                  >
                    {title}
                  </h2>
                </Link>
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
      )}
    </ThemeConsumer>
  );
}
