const winston = require('winston');
require('winston-daily-rotate-file');

// 출력 형식
const printFormat = {
  default: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.printf(
      (info) => `[${info.timestamp}]-[${info.level}]-[${info.message}]`
    )
  ),
  // JSON
  json: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.json()
  )
};

// 로그 파일
const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
  filename: './logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const logger = winston.createLogger({
  level:
    levels[process.env.LOG_LEVEL] !== undefined
      ? process.env.LOG_LEVEL
      : 'debug',
  levels,
  format: printFormat.json,
  transports: [new winston.transports.Console(), dailyRotateFileTransport]
});

module.exports = logger;
