import React from 'react';
import Link from 'gatsby-link';

import LogoPNG from '../../assets/logo.png';

import styles from './Header.module.css';

import { ThemeConsumer } from '../ThemeProvider';

export function HeaderLink(props) {
  return (
    <ThemeConsumer>
      {theme => (
        <Link
          {...props}
          style={{ color: theme.Blue }}
          className={styles.HeaderLink}
        >
          {props.children}
        </Link>
      )}
    </ThemeConsumer>
  );
}

export default function Header() {
  return (
    <ThemeConsumer>
      {theme => (
        <header
          style={{ backgroundColor: theme.Darker }}
          className={styles.Header}
        >
          <Link to="/" style={{ textDecoration: 'none', color: theme.Yellow }}>
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
            <HeaderLink>RSS</HeaderLink>
            <HeaderLink>iTunes</HeaderLink>
          </nav>
        </header>
      )}
    </ThemeConsumer>
  );
}
