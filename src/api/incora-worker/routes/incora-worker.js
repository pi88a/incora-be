'use strict';

/**
 * incora-worker router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::incora-worker.incora-worker');
