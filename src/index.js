const merge = require('deepmerge');
const stylelintPreset = require('neutrino-preset-stylelint');

module.exports = (neutrino) => {
  stylelintPreset(neutrino);
  neutrino.config
    .plugin('stylelint')
    .inject((Plugin, options) => new Plugin(merge({
      config: {
        extends: require.resolve('stylelint-config-standard'),
      },
    // let any configuration.extends overwrite our standard preset.
    }, options)));
};
