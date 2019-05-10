import React from 'react';

import { ThemeConsumer } from '../ThemeProvider';
import styles from './HeaderExternalLink.module.css';

export default function HeaderExternalLink(props) {
  return (
    <ThemeConsumer>
      {theme => (
        <a
          {...props}
          style={{ color: theme.Blue }}
          className={styles.HeaderExternalLink}
        >
          {props.children}
        </a>
      )}
    </ThemeConsumer>
  );
}
