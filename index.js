var SibApiV3Sdk = require("sib-api-v3-sdk");

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    var apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = providerOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //apikey.apiKeyPrefix = 'Token';

    // Configure API key authorization: partner-key
    var partnerKey = defaultClient.authentications["partner-key"];
    partnerKey.apiKey = providerOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //partnerKey.apiKeyPrefix = 'Token';

    return {
      send: async (options) => {
        var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

        sendSmtpEmail.to = [{ email: options.to }];
        sendSmtpEmail.textContent = options.text;
        sendSmtpEmail.htmlContent = options.html;
        sendSmtpEmail.subject = options.subject;
        sendSmtpEmail.replyTo = { email: options.replyTo } || settings.defaultReplyTo;
        sendSmtpEmail.sender = options.sender || settings.defaultSender;

        apiInstance.sendTransacEmail(sendSmtpEmail).then(
          function (data) {
            console.log("API called successfully. Returned data: " + data);
          },
          function (error) {
            console.error(error);
          }
        );
      },
    };
  },
};
