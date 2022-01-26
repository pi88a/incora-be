module.exports = (config, { strapi })=> {
  return async (ctx, next) => {
    const { request: { body: { data } } } = ctx
    console.log(data);

    return next();
  };
};