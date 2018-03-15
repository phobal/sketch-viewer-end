const { ProjectModel } = require('../models');

module.exports = class ProjectProxy {
  static async newAndSave(data) {
    const project = ProjectModel.insertMany(data);
    console.log(project)
  }
}
