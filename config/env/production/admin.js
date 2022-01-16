module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '610f787ba4b86f7829b8c113932a342f'),
  },
});
