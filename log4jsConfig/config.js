
const path = require('path');

// 日志根目录
const baseLogPath = path.resolve(__dirname, '../../../logs');

// 请求日志目录
const reqPath = '/request';

// 请求日志文件名
const reqFileName = 'request';

// 请求日志输出完整路径
const reqLogPath = baseLogPath + reqPath + '/' + reqFileName;

// 响应日志目录
const resPath = '/response';

// 响应日志文件名
const resFileName = 'response';

// 响应日志输出完整路径
const resLogPath = baseLogPath + resPath + '/' + resFileName;

// 错误日志目录
const errPath = '/error';

// 错误日志文件名
const errFileName = 'error';

// 错误日志输出完整路径
const errLogPath = baseLogPath + errPath + '/' + errFileName;

module.exports = {
  appenders: {
    // 所有日志
    'console': {type: 'console'},
    // 请求日志
    'reqLogger': {
      type: 'dateFile', // 日志类型
      filename: reqLogPath, // 输出文件名
      pattern: '-yyyy-MM-dd-hh.log', 
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: 'utf-8', // 编码格式
    },
    // 响应日志
    'resLogger': {
      type: 'dateFile',
      filename: resLogPath,
      pattern: '-yyyy-MM-dd-hh.log', 
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: 'utf-8', // 编码格式
    },
    // 错误日志
    'errLogger': {
      type: 'dateFile',
      filename: errLogPath,
      pattern: '-yyyy-MM-dd-hh.log', 
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: 'utf-8', // 编码格式
    }
  },
  // 分类以及日志等级
  categories: {
    default: {
      appenders: ['console'],
      level: 'all'
    },
    reqLogger: {
      appenders: ['reqLogger'],
      level: 'info'
    },
    resLogger: {
      appenders: ['resLogger'],
      level: 'info'
    },
    errLogger: {
      appenders: ['resLogger'],
      level: 'error'
    }
  }
};