const stylelintPreset = require('neutrino-preset-stylelint');
const stylelintConfiguration = { config: { extends: require.resolve('stylelint-config-standard') } };

module.exports = (neutrino) => {
  stylelintPreset(neutrino);
  neutrino.config
    .plugin('stylelint')
    .inject((Plugin, options) => {
      return new Plugin(Object.assign({}, options[0], stylelintConfiguration))
    });
};
