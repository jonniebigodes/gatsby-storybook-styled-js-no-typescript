module.exports = {
  //stories: ["../stories/**/*.stories.js"],
  stories: ["../src/components/**/*.stories.js"], // introspects the `components` folder
  // registers the installed addons(registration order matters)
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
  ],
}