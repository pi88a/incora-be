'use strict';

/**
 * client-response service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-response.client-response');
