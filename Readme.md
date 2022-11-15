# Installation

```
npm i @strapi/provider-email-sendinblue@git+https://github.com/damienassany/strapi-provider-email-sendinblue.git
```

# Setup

*Path -* `./config/plugins.ts`

```
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendinblue',
      providerOptions: {
        apiKey: env('SENDINBLUE_API_KEY'),
      },
      settings: {
        defaultSender: { email: 'DEFAULT EMAIL', name: 'DEFAULT NAME' },
        defaultReplyTo: { email: 'DEFAULT EMAIL', name: 'DEFAULT NAME' },
      },
    }
  },
  // ...
});
```
