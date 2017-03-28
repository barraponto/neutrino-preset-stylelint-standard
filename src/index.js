const stylelint = require('neutrino-middleware-stylelint');

module.exports = (neutrino) => {
  neutrino.use(stylelint, {
    config: {
      extends: require.resolve('stylelint-config-standard')
    }
  });
};
