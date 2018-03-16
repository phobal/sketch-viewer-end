const { ProjectModel } = require('../models');

module.exports = class ProjectProxy {
  static async newAndSave(data) {
    const project = ProjectModel.insertMany(data);
  }
  static async findAll() {
    const projects = ProjectModel.find({});
    return projects;
  }
  static updateById(project) {
    const { _id, name, description } = project;
    return ProjectModel.update({
      _id,
    }, {
        $set: {
          name,
          description,
        }
      })
  }
  static deleteById(_id) {
    return ProjectModel.remove({ _id });
  }
}
