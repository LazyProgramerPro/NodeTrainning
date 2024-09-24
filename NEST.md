# TypeORM
- TypeORM là một thư viện ORM (Object-Relational Mapping) cho TypeScript và JavaScript (ES7, ES6, ES5). Nó hỗ trợ nhiều cơ sở dữ liệu như MySQL, MariaDB, PostgreSQL, SQLite, MS SQL Server, Oracle, WebSQL.
- TypeORM cho phép bạn tạo các entity (đối tượng) để tương tác với cơ sở dữ liệu mà không cần viết các truy vấn SQL trực tiếp. Thay vào đó, bạn có thể sử dụng các phương thức của TypeORM để thực hiện các thao tác CRUD (Create, Read, Update, Delete) trên cơ sở dữ liệu.
- TypeORM cũng hỗ trợ các mối quan hệ giữa các entity, các truy vấn phức tạp, và các tính năng như eager loading, lazy loading, transaction, migration, và nhiều tính năng khác.
- TypeORM cung cấp một cách tiếp cận linh hoạt và dễ sử dụng để làm việc với cơ sở dữ liệu trong ứng dụng TypeScript hoặc JavaScript của bạn.
# Cách cài đặt TypeORM vs NestJS
- Để sử dụng TypeORM trong NestJS, bạn cần cài đặt các gói sau:
  1. TypeORM: `npm install typeorm`
  2. @nestjs/typeorm: `npm install @nestjs/typeorm`
  3. mysql: `npm install mysql`
- Bạn cũng cần cài đặt các gói khác nếu sử dụng cơ sở dữ liệu khác như PostgreSQL, SQLite, hoặc MS SQL Server.
- Sau khi cài đặt các gói, bạn cần cấu hình TypeORM trong tệp `app.module.ts` của NestJS để kết nối với cơ sở dữ liệu.
- Dưới đây là một ví dụ về cách cấu hình TypeORM trong NestJS để kết nối với cơ sở dữ liệu MySQL:
  ```typescript
  import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  import { User } from './user.entity';

  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'test',
        entities: [User],
        synchronize: true,
      }),
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
  ```
- Trong ví dụ trên, chúng ta đã import `TypeOrmModule` từ `@nestjs/typeorm` và cấu hình nó trong phần `imports` của `@Module`. Chúng ta đã chỉ định các thông số kết nối cho cơ sở dữ liệu MySQL, bao gồm `host`, `port`, `username`, `password`, `database`, `entities`, và `synchronize`.
- `entities` là một mảng chứa các entity (đối tượng) mà chúng ta muốn sử dụng trong ứng dụng. Trong trường hợp này, chúng ta đã import `User` từ tệp `user.entity.ts`.
- `synchronize` là một cờ để tự động tạo bảng trong cơ sở dữ liệu nếu chúng không tồn tại. Điều này hữu ích trong quá trình phát triển, nhưng không nên sử dụng trong môi trường sản xuất.
- Sau khi cấu hình TypeORM, bạn có thể sử dụng các entity và các phương thức của TypeORM để tương tác với cơ sở dữ liệu trong ứng dụng NestJS của bạn.

# CRUD Operations with TypeORM in NestJS
- Để thực hiện các thao tác CRUD (Create, Read, Update, Delete) với TypeORM trong NestJS, bạn có thể sử dụng các phương thức của TypeORM như `getRepository`, `save`, `find`, `update`, `delete`, và nhiều phương thức khác.
- Dưới đây là một ví dụ về cách thực hiện các thao tác CRUD với TypeORM trong NestJS:
  ```typescript
  import { Injectable } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { User } from './user.entity';

  @Injectable()
  export class UserService {
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
    ) {}

    async createUser(user: User): Promise<User> {
      return this.userRepository.save(user);
    }

    async getUsers(): Promise<User[]> {
      return this.userRepository.find();
    }

    async getUserById(id: number): Promise<User> {
      return this.userRepository.findOne(id);
    }

    async updateUser(id: number, user: User): Promise<User> {
      await this.userRepository.update(id, user);
      return this.userRepository.findOne(id);
    }

    async deleteUser(id: number): Promise<void> {
      await this.userRepository.delete(id);
    }
  }
  ```
# So sánh Save vs Create trong TypeORM
- Trong TypeORM, có hai phương thức để tạo một bản ghi mới trong cơ sở dữ liệu: `save` và `create`. Dưới đây là sự khác biệt giữa chúng:
  - `save`: Phương thức `save` được sử dụng để lưu một bản ghi đã tồn tại hoặc tạo một bản ghi mới nếu nó chưa tồn tại. Nếu bản ghi đã tồn tại, nó sẽ cập nhật bản ghi đó với dữ liệu mới. Nếu bản ghi chưa tồn tại, nó sẽ tạo một bản ghi mới.
  - `create`: Phương thức `create` được sử dụng để tạo một bản ghi mới mà không lưu nó vào cơ sở dữ liệu. Bạn cần gọi phương thức `save` sau khi sử dụng phương thức `create` để lưu bản ghi vào cơ sở dữ liệu.
  - Các hook trước và sau lưu (beforeInsert, afterInsert) chỉ hoạt động với phương thức `save`, không hoạt động với phương thức `create`.
# Migrations trong TypeORM
- Migration là quá trình tạo và quản lý các phiên bản cơ sở dữ liệu. Trong TypeORM, bạn có thể sử dụng migrations để tạo các phiên bản cơ sở dữ liệu, thay đổi cấu trúc cơ sở dữ liệu, và chuyển đổi dữ liệu giữa các phiên bản.
- Để tạo một migration trong TypeORM, bạn có thể sử dụng lệnh `typeorm migration:create` với các tùy chọn như `--name` để chỉ định tên của migration và `--dir` để chỉ định thư mục lưu trữ migration.
- Dưới đây là một ví dụ về cách tạo một migration trong TypeORM:
  ```bash
  npx typeorm migration:create -n CreateUsersTable
  ```
- Sau khi tạo migration, bạn có thể sử dụng lệnh `typeorm migration:run` để chạy migration và áp dụng các thay đổi vào cơ sở dữ liệu.
- Dưới đây là một ví dụ về cách chạy migration trong TypeORM:
  ```bash
  npx typeorm migration:run
  ```
- Migration là một công cụ hữu ích để quản lý cấu trúc cơ sở dữ liệu trong ứng dụng của bạn và đảm bảo rằng các phiên bản cơ sở dữ liệu được duy trì và cập nhật một cách an toàn.
# findOne vs find trong TypeORM
- Trong TypeORM, có hai phương thức để truy vấn dữ liệu từ cơ sở dữ liệu: `findOne` và `find`. Dưới đây là sự khác biệt giữa chúng:
  - `findOne`: Phương thức `findOne` được sử dụng để truy vấn một bản ghi duy nhất từ cơ sở dữ liệu dựa trên một điều kiện. Nếu không tìm thấy bản ghi này, nó sẽ trả về `undefined`.
  - `find`: Phương thức `find` được sử dụng để truy vấn tất cả các bản ghi từ cơ sở dữ liệu dựa trên một điều kiện. Nếu không tìm thấy bản ghi nào, nó sẽ trả về một mảng rỗng.
# update 
- Phương thức `update` trong TypeORM được sử dụng để cập nhật một hoặc nhiều bản ghi trong cơ sở dữ liệu dựa trên một điều kiện. Nó trả về một số nguyên thể hiện số lượng bản ghi đã được cập nhật.
- Dưới đây là một ví dụ về cách sử dụng phương thức `update` trong TypeORM:
  ```typescript
  await this.userRepository.update({ id: 1 }, { name: 'John Doe' });
  ```
  ```typescript 
  // use hooks
  async updateUser(id: number, attrs: Partial<User>):{
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.assign(user, attrs);
    return this.userRepository.save(user);
  }
  ```
# remove
- Phương thức `remove` trong TypeORM được sử dụng để xóa một bản ghi từ cơ sở dữ liệu. Bạn có thể truyền một bản ghi hoặc một ID của bản ghi để xóa.
- Dưới đây là một ví dụ về cách sử dụng phương thức `remove` trong TypeORM:
  ```typescript
  await this.userRepository.remove(user);
  ```
  ```typescript
    // use hooks
  async deleteUser(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.userRepository.remove(user);
  }
  ```
  