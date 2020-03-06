# The Kerbside Lookup Widget
Powered by [RecycleNow](https://recyclenow.com)

[![Build Status](https://travis-ci.com/etchteam/kerbside-lookup.svg?branch=master)](https://travis-ci.com/etchteam/kerbside-lookup)
[![Known Vulnerabilities](https://snyk.io/test/github/etchteam/kerbside-lookup/badge.svg)](https://snyk.io/test/github/etchteam/kerbside-lookup)
[![Maintainability](https://api.codeclimate.com/v1/badges/b3f4691dfc9626559dd8/maintainability)](https://codeclimate.com/github/etchteam/kerbside-lookup/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b3f4691dfc9626559dd8/test_coverage)](https://codeclimate.com/github/etchteam/kerbside-lookup/test_coverage)

Contact the [RecycleNow Digital Team](mailto:digitalteam@wrap.co.uk) for API Access.

## Usage

Include the script and CSS (optional) from jsdeliver:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/etchteam/kerbside-lookup@1.0.0/dist/index.css" />
<script src="https://cdn.jsdelivr.net/gh/etchteam/kerbside-lookup@1.0.0/dist/index.min.js" async defer></script>
```

Add the following `div` in the location you want the widget to appear:

```html
<div id="wrap-klw"></div>
```

### Options

You can set the following using `data-prop` attributes on your `div` tag.

* `token` - Your API token (required)
* `materials` - An array of material IDs to restrict the widget to (optional)
* `postcode` - A postcode to restrict the widget to (optional)
* `locale` - `cy` or `en`. Defaults to `en`.
* `button` - Button text. Defaults to `Submit` or `Cyflwyno` depending on the `locale` setting.
* `placeholder` - Placeholder text. Defaults to `Enter a postcode...` or `Rhowch eich cod post...` depending on `locale` setting.
* `apihost` - Used in development to override the api host on pre-built widget code.

For example:

```html
<div id="wrap-klw"
  data-prop-token="MySuperSecureApiToken"
  data-prop-locale="cy"
></div>
```

Alternatively, you can ue a script tag with a JSON object inside.

```html
<div id="wrap-klw">
  <script type="text/props">
    {
      "token": "MySuperSecureApiToken",
      "locale": "cy"
    }
  </script>
</div>
```

## Support

For API access, full documentation, and a list of material IDs, please contact the [RecycleNow Digital Team](mailto:digitalteam@wrap.co.uk).

Raise issues on this repository for any bugs you find or feature requests that you have.
