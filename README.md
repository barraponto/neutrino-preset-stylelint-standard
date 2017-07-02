# Neutrino preset with Stylelint Standard configuration
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
[![Join Slack][slack-image]][slack-url]

`neutrino-preset-stylelint-standard` is a Neutrino preset that adds
[Stylelint][stylelint] support with pre-configured
[Standard Stylelint configuration][stylelint-config-standard].

## Documentation

Install this preset to your development dependencies, then set it in
`.neutrinorc.js`:

```js
  module.exports = {
    use: [
      "neutrino-preset-stylelint-standard"
    ]
  }
```


[stylelint]: https://stylelint.io/
[stylelint-config-docs]: https://stylelint.io/user-guide/configuration/
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[npm-image]: https://img.shields.io/npm/v/neutrino-preset-stylelint-standard.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-stylelint-standard.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-stylelint-standard
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
