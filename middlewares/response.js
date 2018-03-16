const codeMap = {
  '-1': 'fail',
  '200': 'success',
  '401': 'token expired',
  '500': 'server error',
  '10001': 'params error'
}
const utilFn = {
  resuccess(data) {
    return {
      "success": true,
      "data": data || null,
      "exeCode": 200,
      "exeMsg": codeMap['200']
    }
  },
  refail(msg, code, data) {
    return {
      "success": false,
      "data": data || null,
      "exeCode": code || '-1',
      "exeMsg": msg || codeMap[code]
    }
  }
}
module.exports = class Response {
  static init(ctx, next) {
    ctx.util = utilFn;
    return next();
  }
}
