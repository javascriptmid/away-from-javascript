import React from 'react';

import styles from './Footer.module.css';

import { ThemeConsumer } from '../ThemeProvider';

export default function Footer() {
  return (
    <ThemeConsumer>
      {theme => (
        <footer style={{ backgroundColor: theme.Darker }}>
          <div className={styles.Footer}>
            <a
              href="https://github.com/javascriptmid/away-from-javascript"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: theme.Yellow,
              }}
            >
              Made with ♥ by the Javascript Mérida community
            </a>
          </div>
        </footer>
      )}
    </ThemeConsumer>
  );
}
