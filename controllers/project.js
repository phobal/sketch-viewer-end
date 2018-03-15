const { ProjectProxy } = require('../proxy');

module.exports = class Project {
  static async newAndSave(ctx) {
    const name = ctx.request.body.name;
    console.log(name)
  }
};
