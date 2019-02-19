import React from 'react';
import Link from 'gatsby-link';

import LogoPNG from '../../assets/logo.png';

import styles from './Header.module.css';

import { ThemeConsumer } from '../ThemeProvider';
import Image from '../Image';

export function HeaderLink(props) {
  return (
    <ThemeConsumer>
      {theme => (
        <a
          {...props}
          style={{ color: theme.Blue }}
          className={styles.HeaderLink}
        >
          {props.children}
        </a>
      )}
    </ThemeConsumer>
  );
}

export default function Header() {
  return (
    <ThemeConsumer>
      {theme => (
        <header style={{ backgroundColor: theme.Darker }}>
          <div className={styles.Header}>
            <Link
              to="/"
              style={{ textDecoration: 'none', color: theme.Yellow }}
            >
              <div className={styles.HeaderLogoGroup}>
                <Image
                  style={{ maxHeight: 32 }}
                  src={LogoPNG}
                  alt="Javascript Mérida"
                />
                <p style={{ fontWeight: 'bold' }} className={styles.HeaderLink}>
                  Away from Javascript
                </p>
              </div>
            </Link>
            <nav>
              <HeaderLink href="https://rss.simplecast.com/podcasts/10278/rss">
                RSS
              </HeaderLink>
              <HeaderLink href="https://open.spotify.com/show/2lFTjo5kc498PWOOg0fvum?si=4g0U4s43SSqu8ifdaKFR3A">
                Spotify
              </HeaderLink>
              <HeaderLink href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvMTAyNzgvcnNz">
                Google Podcast
              </HeaderLink>
              <HeaderLink href="https://itunes.apple.com/mx/podcast/away-from-javascript/id1452959831?l=en&mt=2">
                iTunes
              </HeaderLink>
            </nav>
          </div>
        </header>
      )}
    </ThemeConsumer>
  );
}
