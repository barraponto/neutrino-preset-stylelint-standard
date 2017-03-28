const stylelint = require('neutrino-middleware-stylelint');
const STYLELINT_CONFIG_STANDARD = require.resolve('stylelint-config-standard');

module.exports = (neutrino) => {
  neutrino.use(stylelint, {
    config: {
      extends: STYLELINT_CONFIG_STANDARD
    }
  })
};
