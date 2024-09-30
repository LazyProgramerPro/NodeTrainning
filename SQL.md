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


## Aggregate Functions
- Aggregate Functions:
  - COUNT: Đếm số lượng dòng.Vd:
    ```sql
    SELECT COUNT(*) FROM photos;
    ```
  - SUM: Tính tổng giá trị.Vd:
  - AVG: Tính trung bình giá trị.Vd:
  - MIN: Tìm giá trị nhỏ nhất.Vd:
  - MAX: Tìm giá trị lớn nhất.Vd:
- Combining Aggregate Functions:
  ```sql
  SELECT
    user_id, MAX(id)
  FROM
    COMMENTS
  GROUP BY
    user_id;
  ```
  Check user_id nào có nhiều comment nhất:
  ```sql
  SELECT
    user_id, COUNT(id) as num_comments_created
  FROM
    COMMENTS
  GROUP BY
    user_id;
  ```
- Khi chúng ta dếm thì cột đó phải là cột không chứa giá trị NULL, nếu không sẽ bị lỗi không trả ra đúng kết quả. Bản ghi sẽ không được đếm nếu cột đó chứa giá trị NULL. Chúng ta có thể sử dụng `COUNT(*)` để đếm tất cả các bản ghi kể cả NULL.
- Đếm số lượng comment của mỗi bức ảnh:
  ```sql
  SELECT
    photo_id, COUNT(id) as num_comments
  FROM
    COMMENTS
  GROUP BY
    photo_id;
  ```
- Filtering Grouped with HAVING:
  - Để lọc dữ liệu sau khi đã nhóm, chúng ta sử dụng câu lệnh `HAVING`:
    ```sql
    SELECT
      user_id, COUNT(id) as num_comments
    FROM
      COMMENTS
    GROUP BY
      user_id
    HAVING
      COUNT(id) > 20;
    ```
  - Alalyzing SELECT statement:
    - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
    - `user_id`, `COUNT(id) as num_comments`: Tên của các cột
    - `FROM`: Tên của bảng
    - `COMMENTS`: Tên của bảng
    - `GROUP BY`: Nhóm dữ liệu
    - `user_id`: Nhóm dữ liệu theo cột `user_id`
    - `HAVING`: Lọc dữ liệu sau khi đã nhóm
    - `COUNT(id) > 1`: Lọc các dòng có số lượng comment lớn hơn 1
    - Thứ tự thực hiện: `FROM` -> `GROUP BY` -> `HAVING` -> `SELECT`
  - Sự khác biệt giữa `WHERE` và `HAVING`:
    - `WHERE` lọc dữ liệu trước khi nhóm
    - `HAVING` lọc dữ liệu sau khi nhóm
    - Thứ tự thực hiện: `FROM` -> `JOINS` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `SELECT`
    - Bạn không thể sử dụng `HAVING` mà không có `GROUP BY`

  -  ```sql
      SELECT
        photo_id,
        COUNT(*)
      FROM
        comments
      WHERE
        photo_id < 3
      GROUP BY
        photo_id
      HAVING
        COUNT(*) > 2;
      ```
## Sorting Data
- Sorting Data:
  - Để sắp xếp dữ liệu, chúng ta sử dụng câu lệnh `ORDER BY`:
    ```sql
    SELECT * FROM products ORDER BY id;
    SELECT * FROM products ORDER BY id DESC;
    SELECT * FROM products ORDER BY id ASC;
    SELECT * FROM products ORDER BY id DESC, user_id ASC;
    ```
  - Alalyzing SELECT statement:
    - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
    - `*`: Lấy tất cả các cột
    - `FROM`: Tên của bảng
    - `products`: Tên của bảng
    - `ORDER BY`: Sắp xếp dữ liệu
    - `id`: Sắp xếp dữ liệu theo cột `id`
    - `DESC`: Sắp xếp dữ liệu theo thứ tự giảm dần
    - `ASC`: Sắp xếp dữ liệu theo thứ tự tăng dần
    - `id DESC, user_id ASC`: Sắp xếp dữ liệu theo cột `id` giảm dần, sau đó sắp xếp theo cột `user_id` tăng dần
    - Thứ tự thực hiện: `FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `ORDER BY` -> `SELECT`
  - Trường hợp sắp xếp 2 biến
    ```sql
    SELECT * FROM products ORDER price, weight;
    ```
    Alalyzing SELECT statement:
    - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
    - `*`: Lấy tất cả các cột
    - `FROM`: Tên của bảng
    - `products`: Tên của bảng
    - `ORDER BY`: Sắp xếp dữ liệu
    - `price, weight`: Sắp xếp dữ liệu theo cột `price`, sau đó sắp xếp theo cột `weight`
  - Offset and Limit:
    - Để phân trang dữ liệu, chúng ta sử dụng câu lệnh `OFFSET` và `LIMIT`:
    ```sql
    SELECT * FROM products ORDER BY id OFFSET 5 LIMIT 5;
    ```
    Alalyzing SELECT statement:
    - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
    - `*`: Lấy tất cả các cột
    - `FROM`: Tên của bảng
    - `products`: Tên của bảng
    - `ORDER BY`: Sắp xếp dữ liệu
    - `id`: Sắp xếp dữ liệu theo cột `id`
    - `OFFSET 5`: Bỏ qua 5 dòng đầu tiên
    - `LIMIT 5`: Lấy 5 dòng tiếp theo
    - Thứ tự thực hiện: `FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `ORDER BY` -> `OFFSET` -> `LIMIT` -> `SELECT`
## Union and Intersection with Sets
- Union:
  - Để kết hợp dữ liệu từ nhiều bảng, chúng ta sử dụng câu lệnh `UNION`:
  ```sql
  (SELECT * FROM products ORDER BY price DESC limit 5)
  UNION
  (SELECT * FROM products ORDER BY price/weight DESC limit 5);
  ```
  - Alalyzing SELECT statement:
    - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
    - `*`: Lấy tất cả các cột
    - `FROM`: Tên của bảng
    - `products`: Tên của bảng
    - `ORDER BY`: Sắp xếp dữ liệu
    - `price DESC`: Sắp xếp dữ liệu theo cột `price` giảm dần
    - `price/weight DESC`: Sắp xếp dữ liệu theo cột `price/weight` giảm dần
    - `LIMIT 5`: Lấy 5 dòng
    - `UNION`: Kết hợp dữ liệu từ 2 bảng
    - Thứ tự thực hiện: `FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `ORDER BY` -> `OFFSET` -> `LIMIT` -> `UNION` -> `SELECT`
    - Trả về tất cả dòng dữ liệu từ cả 2 bảng, loại bỏ các dòng trùng lặp
  - Nếu 2 query khác nhau về cấu trúc, chúng ta cần sử dụng `UNION ALL` thay vì `UNION`
- Intersection:
  - Để lấy dữ liệu chung từ 2 bảng, chúng ta sử dụng câu lệnh `INTERSECT`:
  ```sql
  (SELECT * FROM products ORDER BY price DESC limit 5)
  INTERSECT
  (SELECT * FROM products ORDER BY price/weight DESC limit 5);
  ```
  - Alalyzing SELECT statement:
    - `SELECT`: Lấy dữ liệu từ bảng( Keyword)
    - `*`: Lấy tất cả các cột
    - `FROM`: Tên của bảng
    - `products`: Tên của bảng
    - `ORDER BY`: Sắp xếp dữ liệu
    - `price DESC`: Sắp xếp dữ liệu theo cột `price` giảm dần
    - `price/weight DESC`: Sắp xếp dữ liệu theo cột `price/weight` giảm dần
    - `LIMIT 5`: Lấy 5 dòng
    - `INTERSECT`: Lấy dữ liệu chung từ 2 bảng
    - Thứ tự thực hiện: `FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `ORDER BY` -> `OFFSET` -> `LIMIT` -> `INTERSECT` -> `SELECT`
    - Trả về các dòng dữ liệu chung từ cả 2 bảng
## Subqueries

## ACID Properties
- ACID Properties:
  - Atomicity: Tất cả các thao tác trong một giao dịch phải được thực hiện hoặc không được thực hiện.
  - Consistency: Dữ liệu phải luôn ổn định sau khi thực hiện một giao dịch.
  - Isolation: Một giao dịch không bị ảnh hưởng bởi các giao dịch khác.
  - Durability: Dữ liệu đã được lưu trữ phải được bảo vệ khỏi sự mất mát.
- Transactions:
  - Là 1 tập hợp các câu truy vấn SQL, mỗi câu truy vấn được coi là 1 đơn vị công việc vì đôi khi 1 câu truy vấn rất khó để đạt được kêt quả mong muốn, có đôi lúc điều đó là không thể
    - VD: Chuyển tiền từ tài khoản A sang tài khoản B, cần thực hiện 2 câu truy vấn: Trừ tiền từ tài khoản A và cộng tiền vào tài khoản B và trước đó cần kiểm tra xem tài khoản A có đủ tiền không, kiểm tra tài khoản B có tồn tại không,....
  - Để bắt đầu 1 giao dịch, chúng ta sử dụng câu lệnh `BEGIN` hoặc `START TRANSACTION`
    - Nếu bạn có 1000 câu truy vấn, tất cả 1000 thay đổi này sẽ được ghi vào bộ nhớ đệm và không được lưu vào cơ sở dữ liệu cho đến khi bạn sử dụng câu lệnh `COMMIT` hay sẽ lưu luôn sau mỗi câu truy vấn ???
  - Để kết thúc 1 giao dịch, chúng ta sử dụng câu lệnh `COMMIT` hoặc `ROLLBACK`
    - Nếu bạn sử dụng câu lệnh `COMMIT`, tất cả các thay đổi sẽ được lưu vào cơ sở dữ liệu
    - Nếu bạn sử dụng câu lệnh `ROLLBACK`, tất cả các thay đổi sẽ bị hủy và không được lưu vào cơ sở dữ liệu
    - Trường hợp transaction unexpected error = `ROLLBACK`
  - Thông thường các transaction được dùng để thay đổi và sửa đổi dữ liệu ?!? Trong trường hợp đọc dữ liệu thì không cần dùng transaction nhưng nếu dùng thì chúng ta đang làm việc với 1 bản sao của dữ liệu và không phải dữ liệu thật sự, nếu có điều gì đó thay đổi đồng thời với transaction thì bạn không quan tâm.
  - VD: Acount 1 có 1000$ và Account 2 có 2000$, chuyển 500$ từ Account 1 sang Account 2.
    - Bắt đầu 1 giao dịch
    ```sql
    BEGIN;
    ```
    - Lấy ra số dư của Account 1
    ```sql
    SELECT balance FROM accounts WHERE id = 1;
    ```
    - So sánh số dư của Account 1 với số tiền cần chuyển
    - Trừ số tiền cần chuyển từ Account 1
    ```sql
    UPDATE accounts SET balance = balance - 500 WHERE id = 1;
    ```
    - Cộng số tiền cần chuyển vào Account 2
    ```sql
    UPDATE accounts SET balance = balance + 500 WHERE id = 2;
    ```
    - Commit transaction
    ```sql
    COMMIT;
    ```
- Atomicity:
  - Atomicity đảm bảo rằng tất cả các thao tác trong một transaction phải được thực hiện hoặc không được thực hiện.
    - VD: Chuyển tiền từ tài khoản A sang tài khoản B, nếu một trong các thao tác thất bại, tất cả các thao tác khác cũng sẽ bị hủy.
  - Nếu trong trường hợp Database bị mất điện(hỏng), thì tất cả các thao tác chưa được lưu vào cơ sở dữ liệu sẽ bị hủy. Trong trường hợp đang commit dở thì sẽ rollback lại.
  - CSDL sẽ tự động phát hiện và rollback lại các thao tác chưa được lưu vào cơ sở dữ liệu.
  - VD: 
      ```sql
      UPDATE accounts SET balance = balance - 500 WHERE id = 1;
      -- Database crash
      ```
    - Nếu trường hợp làm kém (không dùng transaction) thì số tiền sẽ bị trừ nhưng không được cộng vào tài khoản B ==> Đó là 1 điều cực kỳ nguy hiểm. Đây là 1 hành động không nhất quán, bạn không thể kiểm soát được dữ liệu của mình.
    - Một actomicity transaction sẽ rollback lại toàn bộ thao tác nếu có bất kỳ lỗi nào xảy ra.
- Isolation:
  - Isolation đảm bảo rằng một transaction không bị ảnh hưởng bởi các transaction khác.
  - Khi chúng ta thực hiện nhiều transaction cùng 1 lúc, chúng ta cần đảm bảo rằng mỗi transaction không bị ảnh hưởng bởi các transaction khác.
  - Điều gì sẽ xảy ra nếu tôi đang thực hiện 1 transaction và đang truy vấn đọc, đọc và 1 số transaction đã đc `COMMIT` ? Câu hỏi là chúng ta sẽ đọc được dữ liệu mới hay dữ liệu cũ ? Điều này sẽ tạo ra 1 số vấn đề như:
    - Dirty Read: Đọc dữ liệu chưa được commit của transaction khác.
    - Non-Repeatable Read: Đọc dữ liệu đã bị thay đổi bởi transaction khác.
    - Phantom Read: Đọc dữ liệu mới được thêm vào bởi transaction khác.
  - Có 4 cấp độ cô lập:
    - Read Uncommitted: Một transaction có thể đọc dữ liệu chưa được commit của transaction khác.
    - Read Committed: Một transaction chỉ có thể đọc dữ liệu đã được commit của transaction khác.
    - Repeatable Read: Một transaction không thể đọc dữ liệu đã bị thay đổi bởi transaction khác.
    - Serializable: Một transaction không thể đọc hoặc thay đổi dữ liệu đã bị thay đổi bởi transaction khác.
    - Snapshot: Một transaction không thể đọc hoặc thay đổi dữ liệu đã bị thay đổi bởi transaction khác.
  - VD:
    - Transaction 1: Chuyển 500$ từ tài khoản A sang tài khoản B
    - Transaction 2: Chuyển 100$ từ tài khoản A sang tài khoản B
    - Nếu Transaction 1 chưa hoàn thành, Transaction 2 không được thực hiện cho đến khi Transaction 1 hoàn thành.
  - Database Implementations:
    - PostgreSQL: Sử dụng cấp độ cô lập `Read Committed` mặc định.
    - MySQL: Sử dụng cấp độ cô lập `Repeatable Read` mặc định.
    - Oracle: Sử dụng cấp độ cô lập `Serializable` mặc định.
    - SQL Server: Sử dụng cấp độ cô lập `Read Committed` mặc định.
- Consistency(Tính nhất quán):
  - Consistency đảm bảo rằng dữ liệu phải luôn ổn định sau khi thực hiện một transaction.
  - Consistency in Data: Thể hiện trạng thái dữ liệu sau khi thực hiện một transaction.
  - Consistency in reads: Dữ liệu có thể nhất quán trên data, nhưng có thê không nhất quán trên reads do chúng có nhiều phiên bản và chúng hơi không đồng bộ (VD như data và data cache, có thể mất do dùng transaction nhưng server bị lỗi mà chưa kịp rollback).
  - VD: Chuyển 500$ từ tài khoản A sang tài khoản B, nếu tài khoản A có 1000$ thì tài khoản B phải có 500$.
  - Nếu một transaction thất bại, dữ liệu phải được rollback lại.
  - Nếu một transaction thành công, dữ liệu phải được commit.
- Durability:
  - Durability đảm bảo rằng dữ liệu đã được lưu trữ phải được bảo vệ khỏi sự mất mát.
## Database Internals
- Table là 1 cấu trúc dữ liệu chứa dữ liệu, mỗi table chứa nhiều dòng và mỗi dòng chứa nhiều cột.
- RowID: Là 1 cột ẩn mà mỗi dòng trong table có 1 giá trị duy nhất.
- Page: Là 1 phần của table, mỗi page chứa nhiều dòng.
## Database Indexes
## Database Normalization
## Database Denormalization
## Database Sharding
## Concurency Control
## Database Replication
## Database Partitioning
## Database Backup and Recovery
## Database Security
## Database Performance Tuning
## Database Monitoring
## Database Design Patterns
## Database Design Tools
## Database Migration
## Database Version Control
## Database Deployment
