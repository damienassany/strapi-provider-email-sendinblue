# Installation

```
npm i git+https://github.com/damienassany/strapi-provider-email-sendinblue.git
```

# Setup

*Path -* `./config/plugins.js`

```
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendinblue',
    providerOptions: {
      apiKey: env('SENDINBLUE_API_KEY'),
    },
    settings: {
      defaultFrom: { email: 'DEFAULT EMAIL', name: 'DEFAULT NAME' },
      defaultReplyTo: { email: 'DEFAULT EMAIL', name: 'DEFAULT NAME' },
    },
  },
  // ...
});
```
