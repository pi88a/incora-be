'use strict';

/**
 *  project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
  async findOne(ctx) {
    const id = ctx.params.id;

    const fieldsToSelect = [
      '*',
    ];

    const dto = (project) => {
      const p = project;
      return {
        id: p.id,
        location: {
          country: p.location.country,
          city: p.location.city,
          lat: p.location.lat,
          lng: p.location.lng,
        },
        industry: {
          name: p.industry.name,
          url: p.industry.url,
        },
        technologies: p.technologies.map(t => { return {name: t.name, url: t.url, icon: t.icon }}),
        services: {
          name: p.services.name,
          url: p.services.url,
        },
        banner: {
          title: p.banner.title,
          description: p.banner.description,
        },
        mainInfo: {
          title: p.mainInfo.title,
          items: p.mainInfo.item,
        },
        projectOverview: {
          title: p.projectOverview.title,
          items: p.projectOverview.item,
        },
        nextProject: {
          label: p.nextProject.label,
          url: p.nextProject.url,
        },
        contactUs: {
          title: p.contactUs.title,
          subtitle: p.contactUs.subtitle,
          button: {
            label: p.contactUs.button.label,
            url: p.contactUs.button.url,
          }
        },
        feedback: p.feedback,
      }
    }

    const query = await strapi.db
      .query('api::project.project')
      .findOne({
        where: { id },
        populate: {
          location: { populate: true },
          industry: { populate: true },
          technologies: { populate: true },
          services: { populate: true },
          banner: true,
          mainInfo: { populate: true },
          projectOverview: { populate: true },
          gallary: true,
          nextProject: true,
          contactUs: { populate: true },
          feedback: { populate: true },
        },
        select: fieldsToSelect,
      });
    
    let project;

    if (query) {
      project = dto(query);
    }

    // const knex = strapi.db.connection;
    // console.log('knex: ', knex)
    // const query = knex.raw(`
    //   SELECT *
    //   FROM
    //   (SELECT id FROM projects
    //   UNION
    //   SELECT project_id FROM projects_location_links)
    // `);
      // .select(fieldsToSelect)
      // .from('projects AS p')
      // //
      // .leftJoin('locations AS l', 'l.id', 'projects_location_links.project_id')
      // .leftJoin('projects_location_links as p_l', 'p.id', 'p_l.project_id')
      // //.leftJoin('locations as l', 'l.id', 'p.location_id')
      // .where({ id });

    return project;
  }
}));
