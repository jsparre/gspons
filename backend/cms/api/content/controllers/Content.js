'use strict';

/**
 * Content.js controller
 *
 * @description: A set of functions called "actions" for managing `Content`.
 */

module.exports = {

  /**
   * Retrieve content records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.content.search(ctx.query);
    } else {
      return strapi.services.content.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a content record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.content.fetch(ctx.params);
  },

  /**
   * Count content records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.content.count(ctx.query, populate);
  },

  /**
   * Create a/an content record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.content.add(ctx.request.body);
  },

  /**
   * Update a/an content record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.content.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an content record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.content.remove(ctx.params);
  }
};
