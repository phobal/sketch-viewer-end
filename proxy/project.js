const { ProjectModel } = require('../models');

module.exports = class ProjectProxy {
  static newAndSave(data) {
    const project = ProjectModel.insertMany(data);
  }
  static findAll() {
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
