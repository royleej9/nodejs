# dotenv

- <https://www.npmjs.com/package/dotenv>

- .env 파일에 환경 변수 값을 정의 하여 사용 가능하도록 도와 줌

``` bash
# .env file
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

```js
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

## 설치

``` bash
npm install dotenv
```

## 사용

``` js
// 프로그램 시작 부분 선언
dotenv.config();
```

또는

``` bash
// dotenv.config(); 선언이 없을 경우
node -r dotenv/config ./server/bin/www

// .env 경로 지정
node -r dotenv/config ./server/bin/www dotenv_config_path=./server/.env

```
