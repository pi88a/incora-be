'use strict';

/**
 * incora-worker service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::incora-worker.incora-worker');
