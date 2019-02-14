import React from 'react';
import Link from 'gatsby-link';

import LogoPNG from '../../assets/logo.png';

import styles from './Header.module.css';

import { ThemeConsumer } from '../ThemeProvider';

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
                <img
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
              {/* <HeaderLink href="">iTunes</HeaderLink> */}
            </nav>
          </div>
        </header>
      )}
    </ThemeConsumer>
  );
}
