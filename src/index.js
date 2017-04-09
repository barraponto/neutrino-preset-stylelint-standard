const stylelint = require('neutrino-middleware-stylelint');

module.exports = (neutrino) => {
  neutrino.use(stylelint, {
    config: {
      context: neutrino.options.source,
      extends: require.resolve('stylelint-config-standard')
    }
  });
};
