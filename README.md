#### Setup Server

- create package.json

```sh
npm init -y
```
- create and test server.js

```sh
node server
```

#### ES6 Modules

- package.json

```json
  "type": "module",
```
#### Source Control

- create .gitignore
- create .env
- create thư mục src
- trong thư mục src tạo các thư mục con: controllers, models, routes, utils, services, dbs, helpers, auth, middlewares, configs, core,...
- tạo file app.js trong thư mục src

#### Install Packages and Setup Install Script


```sh
npm install bcryptjs@2.4.3 concurrently@8.0.1 cookie-parser@1.4.6 dayjs@1.11.7 dotenv@16.0.3 express@4.18.2 express-async-errors@3.1.1 express-validator@7.0.1 http-status-codes@2.2.0 jsonwebtoken@9.0.0 mongoose@7.0.5 morgan@1.10.0 multer@1.4.5-lts.1 nanoid@4.0.2 nodemon@2.0.22 cloudinary@1.37.3 dayjs@1.11.9 datauri@4.1.0 helmet@7.0.0 express-rate-limit@6.8.0 express-mongo-sanitize@2.2.0

```

#### Setup Basic Express
- install express and nodemon
- khởi tạo 1 a basic server trong file app.js sau đó import vào file server.js which listening on PORT=5100
- tạo a basic home route which sends back "hello world"
- setup a script with nodemon package.

[Express Docs](https://expressjs.com/)

Express is a fast and minimalist web application framework for Node.js. It simplifies the process of building web applications by providing a robust set of features for handling HTTP requests, routing, middleware, and more. Express allows you to create server-side applications and APIs easily, with a focus on simplicity and flexibility.

[Nodemon Docs](https://nodemon.io/)

Nodemon is a development tool that improves the developer experience. It monitors your Node.js application for any changes in the code and automatically restarts the server whenever a change is detected. This eliminates the need to manually restart the server after every code modification, making the development process more efficient and productive. Nodemon is commonly used during development to save time and avoid the hassle of manual server restarts.

```sh
npm i express@4.18.2 nodemon@2.0.22
```

app.js : khởi tạo và export 1 ứng dụng express

```js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;

```

server.js: import app.js vào file server.js và listen on PORT=5100

```js
// server.js
import app from './src/app.js';

app.listen(5100, () => {
  console.log('server running....');
});
```


package.json: thêm đoạn script sau trong file package.json để thiết lập các khỏi chạy server

```json
"scripts": {
    "dev": "nodemon server.js"
  },
```

Chạy thử server + mở trình duyệt và truy cập vào http://localhost:5100/ xem kết quả

```sh
npm run dev
```


#### Accept JSON

Setup express middleware to accept json truyền lên từ client lên trong file app.js

server

```js
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req);

  res.json({ message: 'Data received', data: req.body });
});
```

Open Postman and send a POST request to http://localhost:5100/ with some JSON data in the body.

#### Morgan and Dotenv

[Morgan](https://www.npmjs.com/package/morgan)

HTTP request logger middleware for node.js

[Dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

```sh
npm i morgan@1.10.0 dotenv@16.0.3
```
server.js

```js
import morgan from 'morgan';

app.use(morgan('dev'));
```

- tạo .env file in the root
- add PORT and NODE_ENV
- add .env to .gitignore

server.js

```js
// server.js
import app from './src/app.js';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
```

Đã check đc những route chạy ngon lành, giờ hãy xử lí lỗi khi có lỗi xảy ra hoặc không khớp với route nào đó

#### Not Found Middleware

Trong file app.js thêm

```js
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});
```

#### Error Middleware
Trong file app.js thêm
```js
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});
```

#### Not Found and Error Middleware

The "not found" middleware in Express.js is used when a request is made to a route that does not exist. It catches these requests and responds with a 404 status code, indicating that the requested resource was not found.

On the other hand, the "error" middleware in Express.js is used to handle any errors that occur during the processing of a request. It is typically used to catch unexpected errors or exceptions that are not explicitly handled in the application code. It logs the error and sends a 500 status code, indicating an internal server error.

In summary, the "not found" middleware is specifically designed to handle requests for non-existent routes, while the "error" middleware is a catch-all for handling unexpected errors that occur during request processing.

#### Controller and Router and Services

setup controllers and router and services
trong thư mục routes tạo file index.js, folder tour, trong folder tour tạo file index.js
trong thư mục controllers tạo file tour.controller.js
trong thư mục services tạo file tour.service.js
#   N o d e T r a i n n i n g  
 