const mongoose = require('mongoose');
const config = require('config');
const ProjectModel = require('./project');

mongoose.Promise = global.Promise;
mongoose.connect(config.get('db'), {
  poolSize: 20,
}, (err) => {
  if (err) {
    console.error('connect to %s error: ', config.get('db'), err.message);
    process.exit(1);
  } else {
    console.log('connect to ' + config.get('db'));
  }
});

module.exports = {
  ProjectModel,
}
