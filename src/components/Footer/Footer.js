import React from 'react';
import Link from 'gatsby-link';

import styles from './Footer.module.css';

import { ThemeConsumer } from '../ThemeProvider';

export default function Footer() {
  return (
    <ThemeConsumer>
      {theme => (
        <footer style={{ backgroundColor: theme.Darker }}>
          <div className={styles.Footer}>
            <Link
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: theme.Yellow,
              }}
            >
              Made with ♥ by the Javascript Mérida community
            </Link>
          </div>
        </footer>
      )}
    </ThemeConsumer>
  );
}
