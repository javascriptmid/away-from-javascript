import React from 'react';
import Link from 'gatsby-link';

import { ThemeConsumer } from '../ThemeProvider';
import Grid from '../Grid';
import Row from '../Row';
import Col from '../Col';

import HeaderExternalLink from './HeaderExternalLink';
import styles from './Header.module.css';

export default function Header() {
  return (
    <ThemeConsumer>
      {theme => (
        <header className={styles.Header}>
          <Grid>
            <Row center="xs">
              <Col xs md={8}>
                <Link
                  to="/"
                  style={{ textDecoration: 'none', color: theme.Darker }}
                >
                  <div className={styles.HeaderLink}>
                    <h1 style={{ fontWeight: 'bold' }}>Away from Javascript</h1>
                  </div>
                </Link>
              </Col>
            </Row>

            <Row center="xs">
              <Col xs md={8}>
                <nav>
                  <HeaderExternalLink href="https://rss.simplecast.com/podcasts/10278/rss">
                    RSS
                  </HeaderExternalLink>
                  <HeaderExternalLink href="https://open.spotify.com/show/2lFTjo5kc498PWOOg0fvum?si=4g0U4s43SSqu8ifdaKFR3A">
                    Spotify
                  </HeaderExternalLink>
                  <HeaderExternalLink href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvMTAyNzgvcnNz">
                    Google Podcast
                  </HeaderExternalLink>
                  <HeaderExternalLink href="https://itunes.apple.com/mx/podcast/away-from-javascript/id1452959831?l=en&mt=2">
                    iTunes
                  </HeaderExternalLink>
                </nav>
              </Col>
            </Row>
          </Grid>
        </header>
      )}
    </ThemeConsumer>
  );
}
