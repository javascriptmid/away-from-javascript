import React, { createContext, Component } from 'react';

import theme from './theme';

const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor() {
    super();

    this.state = {
      theme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const ThemeConsumer = ThemeContext.Consumer;

export default ThemeProvider;
export { ThemeConsumer };
