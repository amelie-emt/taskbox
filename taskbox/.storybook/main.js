module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    "./.storybook/design-addon/register.js"
  ],
};
