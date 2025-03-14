const {withSentryConfig} = require("@sentry/nextjs");

const moduleExports = {
// Your existing Next.js config here
};
const SentryWebpackPluginOptions = {
    silent: true,
};
module.exports = withSentryConfig(moduleExports,SentryWebpackPluginOptions);