module.exports = (config, { strapi })=> {
  return async (ctx, next) => {
    const { request: { body: { data } } } = ctx

    
    await strapi.plugins['email'].services.email.send({
      to: 'dev@incorainc.com',
      subject: 'Client response',
      text: `
        name: ${data.name}
        phone number: ${data.phoneNumber}
        email: ${data.email}
        linkedin: ${data.linkedin},
        goals: ${data.goals},
        purpose: ${data.purpose}`,
    });

    return next();
  };
};