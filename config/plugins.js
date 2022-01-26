module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'dev@incorainc.com',
        defaultReplyTo: 'dev@incorainc.com',
        testAddress: 'dev@incorainc.com',
      },
    },
  },
});