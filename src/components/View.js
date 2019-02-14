import React from 'react';

import Row from './Row';

export default function View(props) {
  return (
    <Row {...props} style={{ ...props.style, height: '100%', width: '100%' }}>
      {props.children}
    </Row>
  );
}
