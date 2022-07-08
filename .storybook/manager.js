import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: '',
    brandTitle: 'Ravindra Nakrani Components',
    brandUrl: '',
  },
});
