import { configure, setAddon, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    header: false // Global configuration for the info addon across all of your stories.
  })
);

const req = require.context(
  '../javascript/stories',
  true,
  /\.stories.(jsx|tsx)?$/
);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
