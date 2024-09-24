# PostgreSQL
## Cơ sở dữ liệu là gì?
- Về cơ bản, cơ sở dữ liệu là một tập hợp các dữ liệu có tổ chức, được lưu trữ trên máy chủ và được truy cập thông qua mạng hoặc máy chủ cục bộ. Cơ sở dữ liệu giúp chúng ta lưu trữ và truy xuất dữ liệu một cách dễ dàng và nhanh chóng.
- SQL (Structured Query Language) là ngôn ngữ truy vấn cơ sở dữ liệu phổ biến nhất, được sử dụng để truy vấn, cập nhật và quản lý cơ sở dữ liệu.
## Những thứ cần chú ý khi học PostgreSQL
- Cách viết truy vấn hiệu quả để lấy thông tin từ cơ sở dữ liệu.
- Thiết kế lược đồ cơ sở dữ liệu một cách hợp lý.
- Hiểu khi nào nên sử dụng các loại tính năng advanced của PostgreSQL như Index, Trigger, Function, ...
- Quản lí dữ liệu của chúng ta trên môi trường production.
## Database Design
- Có 3 câu hỏi lớn:
  - Chúng ta đang lưu trữ những dữ liệu gì?
  - Có những property nào của dữ liệu đó?
  - Loại dữ liệu nào sẽ được lưu trữ?
=> Câu trả lời cho 3 câu hỏi trên sẽ giúp chúng ta thiết kế lược đồ cơ sở dữ liệu một cách hợp lý: Bảng, Cột, Ràng buộc, ...
## Create Table
- Để tạo một bảng trong PostgreSQL, chúng ta sử dụng câu lệnh `CREATE TABLE`:
```sql
CREATE TABLE cities (
  name VARCHAR(50),
  country VARCHAR(50),
  population Integer,
  area Integer
);
```
- Alalyzing CREATE TABLE statement:
  - `CREATE TABLE`: Tạo một bảng mới( Keyword)
  - `table_name`: Tên của bảng( Identifier)
  - `name`, `country`, `population`, `area`: Tên của các cột
  - `VARCHAR(50)`, `Integer`: Kiểu dữ liệu của các cột. VARCHAR(50) là kiểu dữ liệu chuỗi với độ dài tối đa là 50 ký tự, Integer là kiểu dữ liệu số nguyên.
## Insert Data
- Để chèn dữ liệu vào bảng, chúng ta sử dụng câu lệnh `INSERT INTO`:
```sql
INSERT INTO cities (name, country, population, area)
VALUES ('Vietnam', 'Vietnam', 100000000, 331212);
```
- Alalyzing INSERT INTO statement:
  - `INSERT INTO`: Chèn dữ liệu vào bảng( Keyword)
  - `table_name`: Tên của bảng( Identifier)
  - `name`, `country`, `population`, `area`: Tên của các cột
  - `VALUES`: Giá trị của các cột
## Insert Multiple Rows
- Để chèn nhiều dòng dữ liệu vào bảng, chúng ta sử dụng câu lệnh `INSERT INTO` với nhiều giá trị:
```sql
INSERT INTO cities (name, country, population, area)
VALUES ('Vietnam', 'Vietnam', 100000000, 331212),
       ('USA', 'USA', 331000000, 9833520),
       ('China', 'China', 1400000000, 9596961);
```
## Select Data
- Để lấy dữ liệu từ bảng, chúng ta sử dụng câu lệnh `SELECT`:
```sql
SELECT * FROM cities;
SELECT name, country FROM cities;
```
- Alalyzing SELECT statement:
  - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
  - `*`: Lấy tất cả các cột
  - `FROM`: Tên của bảng
  - `name`, `country`: Tên của các cột
## Caculate Columns
- Để tính toán các cột trong bảng, chúng ta sử dụng các toán tử như `+`, `-`, `*`, `/`:
```sql
SELECT name, population, area, population / area AS population_density
FROM cities;
```
- Alalyzing SELECT statement:
  - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
  - `name`, `population`, `area`: Tên của các cột
  - `population / area AS population_density`: Tính toán cột `population_density` bằng cách chia cột `population` cho cột `area`
  - `AS`: Đặt tên cho cột tính toán
  - Math operators: `+`, `-`, `*`, `/`
  - String operators: `||`,CONCAT(),LENGTH(),LOWER(),UPPER(),TRIM(),... VD: `SELECT name || ' ' || country AS full_name FROM cities;`
## Filter Data
- Để lọc dữ liệu từ bảng, chúng ta sử dụng câu lệnh `WHERE`:
```sql
SELECT * FROM cities WHERE population > 100000000;
SELECT * FROM cities WHERE country = 'Vietnam';
```
- Alalyzing SELECT statement:
  - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
  - `*`: Lấy tất cả các cột
  - `FROM`: Tên của bảng
  - `WHERE`: Lọc dữ liệu
  - `population > 100000000`: Lọc các dòng có cột `population` lớn hơn 100000000
  - `country = 'Vietnam'`: Lọc các dòng có cột `country` bằng 'Vietnam'
  - Thứ tự thực hiện: `FROM` -> `WHERE` -> `SELECT`
  - Comparison operators: `=`, `>`, `<`, `>=`, `<=`, `<>`
  - Logical operators: `AND`, `OR`, `NOT`
  - Pattern matching: `LIKE`, `ILIKE`, `SIMILAR TO`, `~`, `~*`, `!~`, `!~*`
  - Range: `BETWEEN`, `NOT BETWEEN`, `IN`, `NOT IN`
  - Caculations in WHERE: `SELECT * FROM cities WHERE population / area > 10000;`
## Update Data
- Để cập nhật dữ liệu trong bảng, chúng ta sử dụng câu lệnh `UPDATE`:
```sql
UPDATE cities
SET population = 100000000
WHERE country = 'Vietnam';
```
- Alalyzing UPDATE statement:
  - `UPDATE`: Cập nhật dữ liệu trong bảng( Keyword)
  - `table_name`: Tên của bảng( Identifier)
  - `SET`: Cập nhật giá trị của cột
  - `WHERE`: Lọc dữ liệu
  - `population = 100000000`: Cập nhật cột `population` thành 100000000
  - `country = 'Vietnam'`: Lọc các dòng có cột `country` bằng 'Vietnam'
## Delete Data
- Để xóa dữ liệu trong bảng, chúng ta sử dụng câu lệnh `DELETE`:
```sql
DELETE FROM cities WHERE country = 'Vietnam';
```
- Alalyzing DELETE statement:
  - `DELETE`: Xóa dữ liệu trong bảng( Keyword)
  - `FROM`: Tên của bảng
  - `WHERE`: Lọc dữ liệu
  - `country = 'Vietnam'`: Lọc các dòng có cột `country` bằng 'Vietnam'
## Working with Tables
- Create Database For A Photo Sharing App:
  - users: id, username, email, password
  - photos: id, user_id, url, description
  - comments: id, user_id, photo_id, content
  - likes: id, user_id, photo_id
- Note:
  - Chúng ta nên tạo những bảng nào cho bất kỳ 1 ứng dụng nào dựa vào yêu cầu của ứng dụng đó.
  - Có rất nhiều tài liệu hướng dẫn về cách thiết kế cơ sở dữ liệu, nhưng không có cách nào là đúng hoặc sai, tất cả đều phụ thuộc vào yêu cầu của ứng dụng.
  - Tìm hiểu về các loại ràng buộc như `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK`, `NOT NULL`, ...
  - Mối quan hệ giữa các bảng: `One-to-One`, `One-to-Many`, `Many-to-Many`
- Các mối quan hệ giữa các bảng:
  - One-to-One: Một người dùng chỉ có một thông tin cá nhân, một thông tin cá nhân chỉ thuộc về một người dùng.
  - One-to-Many: Một người dùng có thể có nhiều ảnh, một ảnh chỉ thuộc về một người dùng.
  - Many-to-One: Một ảnh chỉ thuộc về một người dùng, một người dùng có thể có nhiều ảnh.
  - Many-to-Many: Một người dùng có thể thích nhiều ảnh, một ảnh có thể được thích bởi nhiều người dùng.
- Foreign Key:
  - Foreign key là một cột hoặc một tập hợp các cột trong bảng, tham chiếu đến một cột hoặc tập hợp các cột khác trong bảng khác.
  - Foreign key giúp chúng ta xác định mối quan hệ giữa các bảng.
  - Foreign key giúp chúng ta thực hiện các thao tác như JOIN, UPDATE, DELETE giữa các bảng.
  - Foreign key giúp chúng ta đảm bảo tính toàn vẹn dữ liệu giữa các bảng.
- Primary Key:
  - Primary key là một cột hoặc một tập hợp các cột trong bảng, giúp chúng ta xác định mỗi dòng dữ liệu trong bảng một cách duy nhất.
  - Primary key giúp chúng ta xác định mỗi dòng dữ liệu trong bảng một cách duy nhất.
  - Primary key giúp chúng ta thực hiện các thao tác như JOIN, UPDATE, DELETE giữa các bảng.
  - Primary key giúp chúng ta đảm bảo tính toàn vẹn dữ liệu giữa các bảng.
- Foreign Key của bảng này sẽ là Primary Key của bảng khác.
- Auto-Geneated Primary Key:
  - Chúng ta có thể sử dụng kiểu dữ liệu SERIAL để tạo một cột tự động tăng.VD:
  ```sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
  );
  ```
- Create Foreign Key:
  - Để tạo một Foreign Key trong PostgreSQL, chúng ta sử dụng câu lệnh `FOREIGN KEY`:
  ```sql
  CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id)
  );
  ```
  - Alalyzing CREATE TABLE statement:
    - `CREATE TABLE`: Tạo một bảng mới( Keyword)
    - `table_name`: Tên của bảng( Identifier)
    - `id`, `user_id`, `url`, `description`: Tên của các cột
    - `SERIAL`, `INTEGER`, `VARCHAR(255)`, `TEXT`: Kiểu dữ liệu của các cột
    - `PRIMARY KEY`: Đặt cột `id` làm Primary Key
    - `FOREIGN KEY (user_id)`: Tạo một Foreign Key với cột `user_id`
    - `REFERENCES users (id)`: Tham chiếu đến cột `id` của bảng `users`
- Add some data to the tables:
  ```sql
   INSERT INTO users (username, email, password)
    VALUES ('admin', 'admin@gmail.com', '123456'),
          ('user1', 'user1@gmail.com', '123456'),
          ('user2', 'user2@gmail.com', '123456')
  ```
  ```sql
  INSERT INTO photos (user_id, url, description)
    VALUES (1, 'https://example.com/photo1.jpg', 'This is photo 1'),
          (2, 'https://example.com/photo2.jpg', 'This is photo 2'),
          (3, 'https://example.com/photo3.jpg', 'This is photo 3')
  ```
- Join Tables:
  - Để kết hợp dữ liệu từ nhiều bảng, chúng ta sử dụng câu lệnh `JOIN`:
  ```sql
  SELECT photos.url, photos.description, users.username
  FROM photos
  JOIN users ON photos.user_id = users.id;
  ```
  - Alalyzing SELECT statement:
    - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
    - `photos.url`, `photos.description`, `users.username`: Tên của các cột
    - `FROM`: Tên của bảng
    - `JOIN`: Kết hợp dữ liệu từ nhiều bảng (Join ở đây là `INNER JOIN`)
    - `ON`: Điều kiện kết hợp
    - `photos.user_id = users.id`: Kết hợp dữ liệu từ bảng `photos` với bảng `users` dựa trên cột `user_id` của bảng `photos` và cột `id` của bảng `users`
    - Số lượng dòng trả về sẽ bằng số lượng dòng của bảng `photos` nhưng mỗi dòng sẽ chứa thông tin từ cả 2 bảng `photos` và `users`
- Data Consistency:
  - Để đảm bảo tính toàn vẹn dữ liệu giữa các bảng, chúng ta cần sử dụng các ràng buộc như `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK`, `NOT NULL`, ...
  - Ràng buộc `PRIMARY KEY`: Đảm bảo mỗi dòng dữ liệu trong bảng là duy nhất
  - Ràng buộc `FOREIGN KEY`: Đảm bảo mối quan hệ giữa các bảng
  - Ràng buộc `UNIQUE`: Đảm bảo mỗi giá trị trong cột là duy nhất
  VD:
  ```sql
  INSERT INTO photos (user_id, url, description)
    VALUES (NULL, 'https://example.com/photo1.jpg', 'This is photo 111'),
          (1, 'https://example.com/photo2.jpg', 'This is photo 2111'),
          (1, 'https://example.com/photo3.jpg', 'This is photo 311')
  ```
- Ràng buộc Foreign Key:
  - Ràng buộc `FOREIGN KEY` giúp chúng ta xác định mối quan hệ giữa các bảng.
  - NOT NULL: Chúng ta không thể chèn giá trị NULL vào cột `user_id` của bảng `photos` vì cột `user_id` là một Foreign Key tham chiếu đến cột `id` của bảng `users`.
- Delete Data Consistently:
  - Để xóa dữ liệu một cách an toàn, chúng ta cần xóa dữ liệu từ các bảng theo đúng thứ tự.
  - VD: Để xóa một người dùng, chúng ta cần xóa tất cả ảnh và bình luận của người dùng đó trước.
- Cascade Delete:
  - Để xóa dữ liệu từ các bảng một cách tự động, chúng ta sử dụng `ON DELETE CASCADE`:
  ```sql
  CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
  );
  ```
  - Alalyzing CREATE TABLE statement:
    - `CREATE TABLE`: Tạo một bảng mới( Keyword)
    - `table_name`: Tên của bảng( Identifier)
    - `id`, `user_id`, `url`, `description`: Tên của các cột
    - `SERIAL`, `INTEGER`, `VARCHAR(255)`, `TEXT`: Kiểu dữ liệu của các cột
    - `PRIMARY KEY`: Đặt cột `id` làm Primary Key
    - `FOREIGN KEY (user_id)`: Tạo một Foreign Key với cột `user_id`
    - `REFERENCES users (id)`: Tham chiếu đến cột `id` của bảng `users`
    - `ON DELETE CASCADE`: Xóa tất cả ảnh của người dùng khi người dùng đó bị xóa
- On Delete Restrict:
  - Để ngăn chặn việc xóa dữ liệu từ các bảng, chúng ta sử dụng `ON DELETE RESTRICT`:
  ```sql
  CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE RESTRICT
  );
  ```
  - Alalyzing CREATE TABLE statement:
    - `CREATE TABLE`: Tạo một bảng mới( Keyword)
    - `table_name`: Tên của bảng( Identifier)
    - `id`, `user_id`, `url`, `description`: Tên của các cột
    - `SERIAL`, `INTEGER`, `VARCHAR(255)`, `TEXT`: Kiểu dữ liệu của các cột
    - `PRIMARY KEY`: Đặt cột `id` làm Primary Key
    - `FOREIGN KEY (user_id)`: Tạo một Foreign Key với cột `user_id`
    - `REFERENCES users (id)`: Tham chiếu đến cột `id` của bảng `users`
    - `ON DELETE RESTRICT`: Ngăn chặn việc xóa ảnh của người dùng khi người dùng đó bị xóa

- On Delete Set Null:
  - Để đặt giá trị NULL cho cột tham chiếu khi dòng dữ liệu được tham chiếu bị xóa, chúng ta sử dụng `ON DELETE SET NULL`:
  ```sql
  CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL
  );
  ```
  - Alalyzing CREATE TABLE statement:
    - `CREATE TABLE`: Tạo một bảng mới( Keyword)
    - `table_name`: Tên của bảng( Identifier)
    - `id`, `user_id`, `url`, `description`: Tên của các cột
    - `SERIAL`, `INTEGER`, `VARCHAR(255)`, `TEXT`: Kiểu dữ liệu của các cột
    - `PRIMARY KEY`: Đặt cột `id` làm Primary Key
    - `FOREIGN KEY (user_id)`: Tạo một Foreign Key với cột `user_id`
    - `REFERENCES users (id)`: Tham chiếu đến cột `id` của bảng `users`
    - `ON DELETE SET NULL`: Đặt giá trị NULL cho cột `user_id` của bảng `photos` khi người dùng bị xóa

- On Delete No Action:
  - Để không thực hiện bất kỳ hành động nào khi dòng dữ liệu được tham chiếu bị xóa, chúng ta sử dụng `ON DELETE NO ACTION`:
  ```sql
  CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION
  );
  ```
- On Delete Set Default:
  - Để đặt giá trị mặc định cho cột tham chiếu khi dòng dữ liệu được tham chiếu bị xóa, chúng ta sử dụng `ON DELETE SET DEFAULT`:
  ```sql
  CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET DEFAULT
  );
  ```
- Create Table Comments:
  ```sql
  CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    photo_id INTEGER,
    content TEXT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (photo_id) REFERENCES photos (id) ON DELETE CASCADE
  );
  ```
  - Add some data to the tables:
  ```sql
  INSERT INTO comments (user_id, photo_id, content)
    VALUES (1, 1, 'This is comment 1'),
          (2, 1, 'This is comment 2'),
          (3, 2, 'This is comment 3')
  ``` 
## Relating Records With Joins
- Joins:
  - JOIN: Kết hợp dữ liệu từ nhiều bảng
  - INNER JOIN: Kết hợp dữ liệu từ nhiều bảng dựa trên điều kiện kết hợp
  - LEFT JOIN: Kết hợp dữ liệu từ bảng bên trái và bảng bên phải, bảng bên trái sẽ là bảng chính
  - RIGHT JOIN: Kết hợp dữ liệu từ bảng bên trái và bảng bên phải, bảng bên phải sẽ là bảng chính
  - FULL JOIN: Kết hợp dữ liệu từ cả 2 bảng
  - CROSS JOIN: Kết hợp mọi dòng từ bảng bên trái với mọi dòng từ bảng bên phải