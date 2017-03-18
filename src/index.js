const stylelintPreset = require('neutrino-preset-stylelint');
const standardConfiguration = { extends: require.resolve('stylelint-config-standard') };

module.exports = (neutrino) => {
  stylelintPreset(neutrino);
  neutrino.config
    .plugin('stylelint')
    .inject((Plugin, options) => {
      const projectConfiguration = options[0].config ? options[0].config : {};

      return new Plugin(Object.assign(
        {},
        options[0],
        // let any configuration.extends overwrite our standard preset.
        { config: Object.assign({}, standardConfiguration, projectConfiguration) })
      );
    });
};
