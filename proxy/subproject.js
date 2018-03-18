const { SubProjectModel } = require('../models');

module.exports = class ProjectProxy {
  static newAndSave(data) {
    const project = SubProjectModel.insertMany(data);
  }
  static findById(projectId) {
    const projects = SubProjectModel.find({ projectId });
    return projects;
  }
  static updateById(project) {
    const { _id, name, description, filePath } = project;
    return SubProjectModel.update({
      _id,
    }, {
        $set: {
          name,
          description,
          filePath,
        }
      })
  }
  static deleteById(_id) {
    return SubProjectModel.remove({ _id });
  }
}
