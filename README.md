# PART 1: Basic Express

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
- trong thư mục src tạo các thư mục con: controllers, models, routers, utils, services, dbs, helpers, auth, middlewares, configs, core,...
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

In summary, the "not found" middleware is specifically designed to handle requests for non-existent routers, while the "error" middleware is a catch-all for handling unexpected errors that occur during request processing.

#### Controller and Router and Services

setup controllers and router and services
trong thư mục routers tạo file index.js, folder tour, trong folder tour tạo file index.js
trong thư mục controllers tạo file tour.controller.js
trong thư mục services tạo file tour.service.js
Init router bên trong thư mục app.js

index.js

```js
import { Router } from "express";
import tourRouter from './tour/index.js'; // Provide the correct path to tourController.js
const router = Router();
router.use('/v1/api/tour', tourRouter);
export default router;
```
tour/index.js

```js
import { Router } from "express";
import tourController from "../../controllers/tour.controller.js";


const router = Router();

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

export default router;

```



tour.controller.js
```js
import TourService from "../services/tour.service.js";

class TourController {
  getAllTours = async (req, res, next) => {
    console.log("req:",req)
    return await TourService.getAllTours();
  };

  createTour = async (req, res, next) => {
    return await TourService.createTour(req.body);
  };

  getTourById = async (req, res, next) => {
    return await TourService.getTourById(req.params.id);
  };

  updateTourById = async (req, res, next) => {
    return await TourService.updateTourById(req.params.id, req.body);
  };
  deleteTourById = async (req, res, next) => {
    return await TourService.deleteTourById(req.params.id);
  };
}

export default new TourController();

```
tour.service.js

```js


export default class TourService {
  constructor() { }

  static async getAllTours() {
    // thao tác với database
    return {
      msg: "All tours",
    };
  }

  static async createTour(tour) {
    // thao tác với database
    return {
      msg: "createTour",
    };
  }

  static async getTourById(id) {
    // thao tác với database
    return {
      msg: "getTourById",
    };
  }

  static async updateTourById(id, tour) {
    // thao tác với database
    return {
      msg: "updateTourById",
    };
  }

  static async deleteTourById(id) {
    // thao tác với database
    return {
      msg: "deleteTourById",
    };
  }
}


```
app.js : Thêm cấu hình cho init route
```js
import express from 'express';
import router from './routers/index.js';

const app = express();

app.use(express.json());

//Init Rourte

app.use('', router)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});

export default app;


```

- Khởi chạy lúc này để call Api sẽ bị lỗi lí do là chúng ta đang cố gắng tách biệt phần service ra chỉ để làm nhiệm vụ về logic mà không xử lí bất cứ tác vụ nào liên quan đến các luồng khác, bên service chỉ có đúng nhiệm vụ trả về data
- Để thực thi điều đó: chúng ta sẽ cố gắng xử lí luồn req, res trong file tour.controller.js

#### Status Codes/ Middleware Response/ Error and catchAsync


A library for HTTP status codes is useful because it provides a comprehensive and standardized set of codes that represent the outcome of HTTP requests. It allows developers to easily understand and handle different scenarios during web development, such as successful responses, client or server errors, redirects, and more. By using a status code library, developers can ensure consistent and reliable communication between servers and clients, leading to better error handling and improved user experience.

[Http Status Codes](https://www.npmjs.com/package/http-status-codes)

```sh
npm i http-status-codes@2.2.0

```

200 OK OK
201 CREATED Created

400 BAD_REQUEST Bad Request
401 UNAUTHORIZED Unauthorized

403 FORBIDDEN Forbidden
404 NOT_FOUND Not Found

500 INTERNAL_SERVER_ERROR Internal Server Error

Trong forder middlewares tạo catchAsync.middleware.js, errors.middleware.js, responses.middleware.js

catchAsync.middleware.js
```js
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
export default catchAsync;
```

errors.middleware.js
```js
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthenticatedError';
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong, try again later';
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;

```

responses.middleware.js

```js
const StatusCode = {
	OK: 200,
	CREATED: 201
};

const ReasonStatusCode = {
	CREATED: 'Created',
	OK: 'Success'
};

export class SuccessResponse {
	constructor({ message, statusCode = StatusCode.OK, reasonStatusCode = ReasonStatusCode.OK, metadata = {} }) {
		this.message = !message ? reasonStatusCode : message
		this.status = statusCode,
			this.metadata = metadata
	}

	send(res, header = {}) {
		return res.status(this.status).json(this)
	}
}

export class OK extends SuccessResponse {
	constructor({ message, metadata }) {
		super({ message, metadata })
	}
}

export class CREATED extends SuccessResponse {
	constructor({ options = {}, message, statusCode = StatusCode.CREATED, reasonStatusCode = ReasonStatusCode.CREATED, metadata }) {
		super({ message, statusCode, reasonStatusCode, metadata })
		this.options = options
	}
}


```

- Thêm phần xử lí errorHandlerMiddleware vào app.js

app.js

```js
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';

app.use(errorHandlerMiddleware);
```

current app.js
```js
import express from 'express';
import router from './routers/index.js';
import errorHandlerMiddleware from './middlewares/errors.middleware.js';

const app = express();

app.use(express.json());

//Init Rourte

app.use('', router)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

export default app;


```

- Thêm phần xử lí catchAsync vào tour/index.js

tour/index.js
```js
import { Router } from "express";
import tourController from "../../controllers/tour.controller.js";
import catchAsync from "../../middlewares/catchAsync.middleware.js";


const router = Router();

router
  .route("/")
  .get(catchAsync(tourController.getAllTours))
  .post(catchAsync(tourController.createTour));
router
  .route("/:id")
  .get(catchAsync(tourController.getTourById))
  .patch(catchAsync(tourController.updateTourById))
  .delete(catchAsync(tourController.deleteTourById));

export default router;

```

- Thêm phần xử lí responses.middleware.js vào tour.controller.js

tour.controller.js
```js
import { SuccessResponse } from "../middlewares/responses.middleware.js";
import TourService from "../services/tour.service.js";

class TourController {
  getAllTours = async (req, res, next) => {
    new SuccessResponse({
      message: "getAllTours success!",
      metadata: await TourService.getAllTours()
    }).send(res)
  };

  createTour = async (req, res, next) => {
    new SuccessResponse({
      message: "createTour success!",
      metadata: await TourService.createTour(req.body)
    }).send(res)
  };

  getTourById = async (req, res, next) => {
    new SuccessResponse({
      message: "getTourById success!",
      metadata: await TourService.getTourById(req.params.id)
    }).send(res)
  };

  updateTourById = async (req, res, next) => {
    new SuccessResponse({
      message: "updateTourById success!",
      metadata: await TourService.updateTourById(req.params.id, req.body)
    }).send(res)
  };

  deleteTourById = async (req, res, next) => {
    new SuccessResponse({
      message: "deleteTourById success!",
      metadata: await TourService.deleteTourById(req.params.id)
    }).send(res)
  };
}

export default new TourController();



```

- Thêm config trên Postman và dùng thử API vừa tạo


#### Mongose vs Connection DB

#### MongoDB

[MongoDb](https://www.mongodb.com/)

MongoDB is a popular NoSQL database that provides a flexible and scalable approach to storing and retrieving data. It uses a document-oriented model, where data is organized into collections of JSON-like documents. MongoDB offers high performance, horizontal scalability, and easy integration with modern development frameworks, making it suitable for handling diverse data types and handling large-scale applications.

MongoDB Atlas is a fully managed cloud database service provided by MongoDB, offering automated deployment, scaling, and monitoring of MongoDB clusters, allowing developers to focus on building their applications without worrying about infrastructure management.

#### Mongoosejs

[Mongoose](https://mongoosejs.com/)

Mongoose is an Object Data Modeling (ODM) library for Node.js that provides a straightforward and elegant way to interact with MongoDB. It allows developers to define schemas and models for their data, providing structure and validation. Mongoose also offers features like data querying, middleware, and support for data relationships, making it a powerful tool for building MongoDB-based applications.

```sh
npm i mongoose@7.0.5
```

server.js

```js
import mongoose from 'mongoose';

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

```

file server.js hiện tại

```js
// server.js
import app from './src/app.js';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 5100;

try {
  console.log("process.env.MONGO_URL:",process.env.MONGO_URL)
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
```


- Thêm MONGO_URL vào env : link lấy 2 cách theo 2 mô hình triển khai đầu tiên, cài đặt mongo
- Require DOC Monggo đã được gửi
- Trong folder models tạo tour.model.js

```sh
npm i slugify
```

tour.model.js
```js
import mongoose from 'mongoose';
import slugify from 'slugify';

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],
      minlength: [10, 'A tour name must have more or equal then 10 characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size']
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult'
      }
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0']
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model('Tour', tourSchema);

```

- thực hiện 1 vài truy vấn bên trong service

- create some obj bằng chat GPT
```js
{
  "imageCover": "path/to/cover/image.jpg",
  "summary": "An exciting adventure through the mountains.",
  "price": 199.99,
  "difficulty": "medium",  // Corrected value
  "maxGroupSize": 10,
  "duration": 5,  // Duration in hours or days, depending on your application's context
  "name": "Mountain Adventure Tour"
}

```
tour.service.js

```js
import tourModel from "../models/tour.model.js";

export default class TourService {
  constructor() { }

  static async getAllTours() {
    return await tourModel.find();
  }

  static async createTour(tour) {
    return await tourModel.create(tour);
  }

  static async getTourById(id) {
    return await tourModel.findById(id)
  }

  static async updateTourById(id, tour) {
    return await tourModel.findByIdAndUpdate(id,tour)
  }

  static async deleteTourById(id) {
    return await tourModel.findByIdAndRemove(id)
  }
}


```

- Query Addvanced
- trong folder utils tạo apiFeatures.js


```js
export class APIFeatures {
	constructor(query, queryString) {
		this.query = query;
		this.queryString = queryString;
	}

	filter() {
		const queryObj = { ...this.queryString };
		const excludedFields = ['page', 'sort', 'limit', 'fields'];
		excludedFields.forEach(el => delete queryObj[el]);

		// 1B) Advanced filtering
		let queryStr = JSON.stringify(queryObj);
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

		this.query = this.query.find(JSON.parse(queryStr));

		return this;
	}

	sort() {
		if (this.queryString.sort) {
			const sortBy = this.queryString.sort.split(',').join(' ');
			this.query = this.query.sort(sortBy);
		} else {
			this.query = this.query.sort('-createdAt');
		}

		return this;
	}

	limitFields() {
		if (this.queryString.fields) {
			const fields = this.queryString.fields.split(',').join(' ');
			this.query = this.query.select(fields);
		} else {
			this.query = this.query.select('-__v');
		}

		return this;
	}

	paginate() {
		const page = this.queryString.page * 1 || 1;
		const limit = this.queryString.limit * 1 || 100;
		const skip = (page - 1) * limit;

		this.query = this.query.skip(skip).limit(limit);

		return this;
	}
}
```

- Sử dụng để truy vấn nâng cao áp dụng với các trường hợp getAll

tour.service.js

```js
  static async getAllTours(query) {
    const features = new APIFeatures(tourModel.find(), query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
    return await features.query;
  }
```
tour.service.js hiện tại

```js
import tourModel from "../models/tour.model.js";
import { APIFeatures } from "../utils/apiFeatures.js";

export default class TourService {
  constructor() { }

  static async getAllTours(query) {
    const features = new APIFeatures(tourModel.find(), query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
    return await features.query;
  }

  static async createTour(tour) {
    return await tourModel.create(tour);
  }

  static async getTourById(id) {
    return await tourModel.findById(id)
  }

  static async updateTourById(id, tour) {
    return await tourModel.findByIdAndUpdate(id,tour)
  }

  static async deleteTourById(id) {
    return await tourModel.findByIdAndRemove(id)
  }
}


```
- nhớ thêm params trong hàm bên tour.controller.js

```js
  getAllTours = async (req, res, next) => {
    new SuccessResponse({
      message: "getAllTours success!",
      metadata: await TourService.getAllTours(req.query)
    }).send(res)
  };
```

```js
{
    new: true, //trả về tài liệu mới đã được cập nhập
    runValidators: true //validate data nếu cập nhập
  }
  ```
check các trường hợp không tìm thấy bản ghi trong db và báo lỗi
  ```js
    if (!tour) {
   throw new NotFoundError('No tour found with that ID', 404);
  }
  ```


Trong Mongoose, các phương thức exec() và lean() thường được sử dụng khi thực hiện các truy vấn để kiểm soát cách dữ liệu được trả về và để tối ưu hóa hiệu suất.

- exec()
Phương thức exec() được sử dụng để thực thi một truy vấn. Nó trả về một Promise, cho phép bạn sử dụng cú pháp async/await hoặc .then().catch() để xử lý kết quả của truy vấn.
- lean()
Phương thức lean() được sử dụng để trả về các tài liệu MongoDB như các đối tượng JavaScript thuần thay vì các đối tượng Mongoose. Điều này có thể cải thiện hiệu suất, đặc biệt là khi bạn không cần các tính năng bổ sung của Mongoose như getters/setters, virtuals, và methods.

tour.service.js final part 1

```js
import { NotFoundError } from '../middlewares/errors.middleware.js';
import tourModel from '../models/tour.model.js';
import { APIFeatures } from '../utils/apiFeatures.js';

export default class TourService {
  constructor() { }

  static async getAllTours(query) {
    const features = new APIFeatures(tourModel.find(), query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    return await features.query;
  }

  static async createTour(tour) {
    return await tourModel.create(tour);
  }

  static async getTourById(id, next) {
    const tour = await tourModel.findById(id);
    // Tour.findOne({ _id: req.params.id })
    if (!tour) {
      throw new NotFoundError('No tour found with that ID', 404);
    }
    return tour;
  }

  static async updateTourById(id, tour) {

    const tourUpdate = await tourModel.findByIdAndUpdate(id, tour, {
      new: true,
      runValidators: true
    });

    if (!tourUpdate) {
      throw new NotFoundError('No tour found with that ID', 404);
    }
    return tourUpdate;
  }

  static async deleteTourById(id) {
    const tour = await tourModel.findByIdAndDelete(id);
    if (!tour) {
      throw new NotFoundError('No tour found with that ID', 404);
    }
    return tour
  }
}

```



Có thể thực hiện thêm 1 số phương thức trước khi làm 1 việc gì đó liên quan đến thao tác database
- tour.model.js

```js
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
// QUERY MIDDLEWARE
// tourSchema.pre('find', function(next) {
tourSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});
tourSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  console.log(this.pipeline());
  next();
});
```

```js
import mongoose from 'mongoose';
import slugify from 'slugify';

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],
      minlength: [10, 'A tour name must have more or equal then 10 characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size']
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult'
      }
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0']
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
// QUERY MIDDLEWARE
// tourSchema.pre('find', function(next) {
tourSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});
tourSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  console.log(this.pipeline());
  next();
});

export default mongoose.model('Tour', tourSchema);

```



Advanced Query
- Tạo các router theo tên chuẩn và thêm các đoạn code trong file controller, service như bt

```js
//  lấy 5 tour theo theo giá thấp -> cao
const aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

```


```js
  // thống kê các tour theo độ khó
 const stats = await tourModel.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' }, // Nhóm theo giá trị của trường difficulty, chuyển thành chữ hoa
        numTours: { $sum: 1 },             // Tổng số tour trong mỗi nhóm
        numRatings: { $sum: '$ratingsQuantity' }, // Tổng số lượng đánh giá trong mỗi nhóm
        avgRating: { $avg: '$ratingsAverage' },   // Trung bình đánh giá trong mỗi nhóm
        avgPrice: { $avg: '$price' },           // Trung bình giá tour trong mỗi nhóm
        minPrice: { $min: '$price' },           // Giá thấp nhất trong mỗi nhóm
        maxPrice: { $max: '$price' }            // Giá cao nhất trong mỗi nhóm
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);

```

```js
// thống kê các Tour theo từng tháng trong năm
  const year = req.params.year * 1; // 2021

  const plan = await tourModel.aggregate([
    {
      $unwind: '$startDates'
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' }, //Nhóm theo tháng từ trường startDates
        numTourStarts: { $sum: 1 }, // Đếm số lượng tour trong mỗi tháng
        tours: { $push: '$name' } // Tạo mảng chứa tên của các tour
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { numTourStarts: -1 }
    },
    {
      $limit: 12
    }
  ]);
```

- Interview : khi nhận được chỉ thị next() nhưng bên dưới còn có code nữa thì sao?
- Interview : save() vs create()?
- Interview : exec(), lean() để làm gì?
- Interview : matching router như thế nào ?!, thứ tự sắp xếp router?

# PART 2 : Authen, Author
- Model User
Trong folder models tạo file user.model.js
user.model.js

```js
import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name!']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    role: {
      type: String,
      enum: ['user', 'guide', 'lead-guide', 'admin'],
      default: 'user'
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        // Chỉ hoạt động khi CREATE and SAVE!!!
        validator: function(el) {
          return el === this.password;
        },
        message: 'Passwords are not the same!'
      }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false
    }
  }
);

userSchema.pre('save', async function(next) {
  // Chỉ chạy khi password được thay đổi, isModified là một method của mongoose để kiểm tra xem field có được thay đổi hay không
  // Nếu mật khẩu không bị thay đổi, hàm sẽ gọi next() để tiếp tục quá trình lưu mà không làm gì thêm
  // Lần đầu save data isModified sẽ trả về true
  if (!this.isModified('password')) return next();

  // Hash password với giá trị là 12
  this.password = await bcrypt.hash(this.password, 12);

  // Xóa passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next(); 
  // kiểm tra xem password có được thay đổi hay không && có phải là tạo mới không
  // nếu đúng sẽ k làm gì tiếp theo
  //  this.isNew Nó trả về true nếu tài liệu đang được lưu là tài liệu mới, và false nếu tài liệu đang được cập nhật.
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

// Hàm tạo token reset password

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

export default mongoose.model('User', userSchema);

```

- Tạo các file user.controller.js, auth.controller.js trong folder controllers
- Tạo folder user trong folder routers, tạo file user/index.js
- Tạo các file user.service.js, auth.service.js trong folder services

auth.service.js với các service cơ bản như signup, login, logout, forgotPassword, resetPassword...

```js
import userModel from '../models/user.model.js';

export default class AuthService {
  constructor() { }

  static async signup(user) {
    return await userModel.create(user);
  }

  static async accountActivation() {
    return {
      msg: "accountActivation success!"
    }
  }

  static async login() {
    return {
      msg: "login success!"
    }
  }

  static async signup() {
    return {
      msg: "signup success!"
    }
  }

  static async logout() {
    return {
      msg: "logout success!"
    }
  }
  
  static async forgotPassword() {
    return {
      msg: "forgotPassword success!"
    }
  }

  static async resetPassword() {
    return {
      msg: "resetPassword success!"
    }
  }

  static async updatePassword() {
    return {
      msg: "updatePassword success!"
    }
  }
}


```

auth.controller.js với các controller cơ bản như signup, login, logout, forgotPassword, resetPassword...

```js
import { SuccessResponse } from "../middlewares/responses.middeware.js";
import AuthService from "../services/auth.service.js";

class AuthController {
  signup = async (req, res, next) => {
    new SuccessResponse({
      message: "signup success!",
      metadata: await AuthService.signup(req.body)
    }).send(res)
  };

  accountActivation = async (req, res, next) => {
    new SuccessResponse({
      message: "signup success!",
      metadata: await AuthService.accountActivation()
    }).send(res)
  };

  login = async (req, res, next) => {
    new SuccessResponse({
      message: "login success!",
      metadata: await AuthService.login()
    }).send(res)
  };

  logout = async (req, res, next) => {
    new SuccessResponse({
      message: "logout success!",
      metadata: await AuthService.logout()
    }).send(res)
  };

  forgotPassword = async (req, res, next) => {
    new SuccessResponse({
      message: "forgotPassword success!",
      metadata: await AuthService.forgotPassword()
    }).send(res)
  };

  resetPassword = async (req, res, next) => {
    new SuccessResponse({
      message: "resetPassword success!",
      metadata: await AuthService.resetPassword()
    }).send(res)
  }
  
  updatePassword = async (req, res, next) => {
    new SuccessResponse({
      message: "updatePassword success!",
      metadata: await AuthService.updatePassword()
    }).send(res)
  }

}

export default new AuthController();






```

user/index.js
```js
import { Router } from "express";
import authController from "../../controllers/auth.controller.js";
import catchAsync from "../../middlewares/catchAsync.middleware.js";

const router = Router();

// Auth Flow

router.post('/signup', catchAsync(authController.signup));
router.post('/accountActivation ', catchAsync(authController.accountActivation));
router.post('/login', catchAsync(authController.login));
router.get('/logout', catchAsync(authController.logout));
router.post('/forgotPassword', catchAsync(authController.forgotPassword));
router.patch('/resetPassword/:token', catchAsync(authController.resetPassword));
router.patch('/updateMyPassword', catchAsync(authController.updatePassword));

// User Flow

export default router;


```
Đừng quên thêm vào file index trong routers\index.js

```js
import userRouter from './user/index.js'; 
...
router.use('/v1/api/user', userRouter);
```

File routes/index.js hiện tại

```js
import { Router } from "express";
import tourRouter from './tour/index.js'; // Provide the correct path to tourController.js
import userRouter from './user/index.js'; // Provide the correct path to userController.js
const router = Router();
router.use('/v1/api/tour', tourRouter);
router.use('/v1/api/user', userRouter);
export default router;
```
### Luồng signup
- Lấy thông tin từ body : name, email, password, passwordConfirm
- Kiểm tra xem email đã tồn tại chưa,có thì bào lỗi, chưa có tạo user mới
- Tạo user mới
- Tạo luồng hash password trước khi lưu vào db
- Thêm luồng cong việc gửi email xác nhận tài khoản
- Gửi email xác nhận tài khoản(nếu làm luồng này làm thêm 1 api active-bt về nhà) || Hoặc chào mừng tới ứng dụng
- Viết hàm Send Token, lưu token vào cookie, gửi token về client
- Trả kết quả về client trước đó đã được remove password

utils/email.js

```js
import nodemailer from 'nodemailer';

export class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `D1 NodeJS Team <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    // if (process.env.NODE_ENV === 'production') {
    //   // Sendgrid
    //   return nodemailer.createTransport({
    //     service: 'SendGrid',
    //     auth: {
    //       user: process.env.SENDGRID_USERNAME,
    //       pass: process.env.SENDGRID_PASSWORD
    //     }
    //   });
    // }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }


  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template


    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: 'Hello',
      html: '<h2>Sending Emails with Node.js</h2>',
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }
};
```

auth.controller.js

```js
  signup = async (req, res, next) => {
    new SuccessResponse({
      message: "signup success!",
      metadata: await AuthService.signup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
      }, req, res)
    }).send(res)
  };
```
services/auth.service.js

```js
  static async signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  }

  static async createSendToken(user, statusCode, req, res) {
    const token = await this.signToken(user._id);

    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });

    // Remove password from output
    user.password = undefined;

    return {
      token,
      data: {
        user
      }
    };

  }

  static async signup(user, req, res) {
    // Lấy thông tin từ body : name, email, password, passwordConfirm
    // Kiểm tra xem email đã tồn tại chưa,có thì bào lỗi, chưa có tạo user mới

    const existingUser = await userModel.findOne({ email: user.email }).exec();
    if (existingUser) {
      throw new EmailAlreadyExistsError('Email is taken');
    }

    // Tạo user mới
    const newUser = await userModel.create(user);

    // Gửi email xác nhận tài khoản(nếu làm luồng này làm thêm 1 api active-bt về nhà) || Hoặc chào mừng tới ứng dụng
    const url = `/me`;
    await new Email(newUser, url).sendWelcome();

    // Viết hàm Send Token, lưu token vào cookie, gửi token về client
    return await this.createSendToken(newUser, 201, req, res);

  }
```

env

```sh
EMAIL_USERNAME=b7fee33bc02201
EMAIL_PASSWORD=3b6fa604c35d2b
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_FROM=d1nodejsteam.com
JWT_SECRET=secret
JWT_EXPIRES_IN=60d
JWT_COOKIE_EXPIRES_IN=60
```

# PART 3 : Advanced Mongo
# PART 4 : Payment Striple/Api Doc
# PART 5 : Docker/Deployment
# Bonus: Testing or Microservices
