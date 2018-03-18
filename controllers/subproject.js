const { SubProjectProxy } = require('../proxy');

module.exports = class SubProject {
  static async newAndSave(ctx) {
    const { name, description, filePath, projectId } = ctx.request.body;
    const saveQuery = {
      name,
      description,
      filePath,
      projectId,
    };
    if (ctx.errors) {
      ctx.body = ctx.util.refail(null, 10001, ctx.errors);
      return;
    }
    const project = await SubProjectProxy.newAndSave(saveQuery);
    ctx.body = ctx.util.resuccess();
  }
  static async findAll(ctx) {
    const { projectId } = ctx.request.query;
    const projects = await SubProjectProxy.findById(projectId);
    ctx.body = ctx.util.resuccess(projects);
  }
  static async updateById(ctx) {
    const data = ctx.request.body;
    const project = await SubProjectProxy.updateById(data);
    ctx.body = ctx.util.resuccess();
  }
  static async deleteById(ctx) {
    const { _id } = ctx.request.query;
    await SubProjectProxy.deleteById(_id);
    ctx.body = ctx.util.resuccess();
  }
};
