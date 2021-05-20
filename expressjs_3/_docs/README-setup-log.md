# Log

## winston

<https://www.npmjs.com/package/winston>
<https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342>

### 설치

``` bash
npm install winston

npm install winston-daily-rotate-file
```

### 1. log level 설정

- LOG_LEVEL 설정하지 않는 경우 debug 레벨

```
.env file
# error < warn < info < http < debug
LOG_LEVEL=info
```

### 2 사용

``` js
const logger = require('@utils/logger');
logger.error('error!!!');
logger.warn('warn!!!');
logger.info('info!!!');
logger.http('http!!');
logger.debug('debug!!');
```

## morgan

<https://www.npmjs.com/package/morgan>
