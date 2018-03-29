const path = require('path');
const fs = require('fs');
const { uploadFile } = require('../utils/upload');
const unzipper = require('unzipper');

module.exports = class UploadZip {
  static async uploadZip(ctx) {
    let result = await uploadFile(ctx, {
      path: path.resolve(__dirname, '../upload')
    });
    if (result.success) {
      this.unzip(result.data.filename);
      ctx.body = ctx.util.resuccess(result.data.filePath);
    } else {
      ctx.body = ctx.util.refail(null, 10001, ctx.errors);
    }
  }
  static async uploadImg(ctx) {
    let result = await uploadFile(ctx, {
      path: path.resolve(__dirname, '../avator')
    })
    if (result.success) {
      ctx.body = ctx.util.resuccess(result.data.filePath);
    } else {
      ctx.body = ctx.util.refail(null, 10001, ctx.errors);
    }
  }
  static unzip(filename) {
    const inputPath = path.resolve(__dirname, `../upload/${filename}`)
    const outputPath = path.resolve(__dirname, '../upload');
    fs.createReadStream(inputPath)
    .pipe(unzipper.Extract({ path: outputPath }));
  }
}
