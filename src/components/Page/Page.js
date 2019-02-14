import React from 'react';

import styles from './Page.module.css';

import { ThemeConsumer } from '../ThemeProvider';

export default function Page({ children }) {
  return (
    <ThemeConsumer>
      {theme => (
        <div style={{ backgroundColor: theme.Lighter }} className={styles.Page}>
          {children}
        </div>
      )}
    </ThemeConsumer>
  );
}
