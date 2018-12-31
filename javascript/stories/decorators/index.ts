import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

export const decorate = stories => {
  // addInfo(stories);
  addKnobs(stories);
};

function addKnobs(stories) {
  return stories.addDecorator(withKnobs);
}

function addInfo(stories) {
  return stories.addDecorator(withInfo);
}
