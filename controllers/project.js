const { ProjectProxy } = require('../proxy');

module.exports = class Project {
  static async newAndSave(ctx) {
    const { name, description, imgSrc } = ctx.request.body;
    const saveQuery = {
      name,
      description,
      imgSrc,
    };
    if (ctx.errors) {
      ctx.body = ctx.util.refail(null, 10001, ctx.errors);
      return;
    }
    const project = await ProjectProxy.newAndSave(saveQuery);
    ctx.body = ctx.util.resuccess();
  }
  static async findAll(ctx) {
    const projects = await ProjectProxy.findAll();
    ctx.body = ctx.util.resuccess(projects);
  }
  static async updateById(ctx) {
    const data = ctx.request.body;
    const project = await ProjectProxy.updateById(data);
    ctx.body = ctx.util.resuccess();
  }
  static async deleteById(ctx) {
    const { _id } = ctx.request.query;
    await ProjectProxy.deleteById(_id);
    ctx.body = ctx.util.resuccess();
  }
};
