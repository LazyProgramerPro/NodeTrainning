## The Full Stack

- **Full Stack** là một thuật ngữ dùng
  để mô tả hệ thống các ứng dụng giao
  tiếp với nhau qua mạng, thường bao gồm
  Front End, Client, Server và Database.
- **Front End** là tất cả những gì chúng
  ta có thể thấy trên một trang web. Nó
  là sự kết hợp giữa bố cục và style của
  tất cả các thành phần hiển thị trên
  màn hình. Front End được tạo nên từ
  HTML và CSS.
- **Client** là phần logic giúp một
  trang web trở nên “thông minh”. Nó xử
  lý các tương tác của người dùng và
  luồng dữ liệu giữa người dùng và máy
  chủ. Client chính là yếu tố biến một
  trang web thành một ứng dụng web.

## The Full Stack

- **Server** chịu trách nhiệm xử lý việc
  trao đổi dữ liệu giữa các Client và
  Databases. Người dùng sẽ có Client
  trên thiết bị của họ, vì vậy có rất
  nhiều Client. Các Client đó sẽ giao
  tiếp với cùng một Server cho mỗi ứng
  dụng.
- **Database** là nơi lưu trữ dữ liệu
  của một ứng dụng web trong thời gian
  dài. Trình duyệt chỉ có thể giữ thông
  tin trong một khoảng thời gian giới
  hạn. Dữ liệu trong Database là dữ liệu
  bền vững, không bị mất đi ngay cả khi
  cơ sở dữ liệu hoặc ứng dụng bị “tắt”.

## Version Control

- **Version Control** là công nghệ hỗ
  trợ quản lý phiên bản của phần mềm
  đang trong quá trình phát triển. Nó
  tiên tiến hơn việc chỉ lưu trữ các tệp
  thông thường. Version Control cung cấp
  cho các nhà phát triển sự linh hoạt để
  test an toàn và hợp tác hiệu quả với
  những nhà phát triển khác.
- **Developers can work together!**:
  - Làm việc trên cùng một source cùng
    một lúc.
  - Làm việc với các nhánh độc lập để
    test và phát triển.
  - Triển khai các version mới mà không
    ảnh hưởng đến version đang chạy.
- Version Control là cốt lõi của phát
  triển phần mềm hiện đại.

## Git

- **Git** là công nghệ quản lý version
  phổ biến nhất vào năm 2021. Git tích
  hợp với các nền tảng phổ biến như
  GitHub, Bitbucket, và GitLab. Git hỗ
  trợ tạo các nhánh (branching), giúp
  quản lý và phát triển mã nguồn hiệu
  quả.
- **Commit** là một “snapshot” của mã
  nguồn mà nhà phát triển có thể tạo ra
  khi họ muốn. Thông thường, họ thực
  hiện điều này khi đang triển khai một
  ý tưởng và đạt đến một điểm mà một
  phần hoặc toàn bộ ý tưởng của họ đã
  được hoàn thiện và hoạt động trong mã
  nguồn.
## Git

- **Branch** là một bản sao của mã nguồn
  từ một commit. Branch chứa bản sao của
  commit cuối cùng và tất cả các commit
  trước đó. Nó khởi đầu một “dòng thời
  gian” mới, cho phép nhà phát triển làm
  việc với mã nguồn trong một môi trường
  độc lập.
- **Merge** là quá trình kết hợp một
  branch vào một branch khác (hoặc tái
  hợp nhất). Thông thường, điều này xảy
  ra khi một branch phát triển tính năng
  mới đã hoàn thành và sẵn sàng được đưa
  trở lại branch chính của dự án để sử
  dụng.

## Programming Languages

- **Programming Languages** là các ngôn
  ngữ lập trình được sử dụng để tạo ra
  các ứng dụng web. Mỗi ngôn ngữ lập
  trình có cú pháp và cấu trúc riêng,
  nhưng tất cả đều có mục tiêu chung là
  tạo ra các ứng dụng web hoạt động hiệu
  quả.
- VD: HTML, CSS, JavaScript, Python,
  Ruby, PHP, Java, C#, C++, và nhiều
  ngôn ngữ khác.

## Frameworks and Libraries

- **Library** là một tập hợp mã nguồn
  dành cho Front End hoặc Back End, có
  tính chất **không áp đặt**. Các nhà
  phát triển có thể tích hợp Library vào
  dự án của mình và tự quyết định thời
  điểm sử dụng mã được cung cấp bởi
  Library. VD: React, JQuery, và
  Axios...
- **Framework** là một tập hợp mã nguồn
  dành cho Front End hoặc Back End
  (Server), có tính chất **có định
  hướng**. Các nhà phát triển viết mã
  của họ để hoạt động theo chu trình vận
  hành mà Framework cung cấp. VD:
  Angular, Django, và Ruby on Rails...

## Client/Server Communications

- **HTTP** là một tiêu chuẩn giao tiếp
  giữa Client và Server qua internet.
  Đây là một tiêu chuẩn quan trọng vì
  không phải tất cả công nghệ được sử
  dụng để xây dựng ứng dụng Client và
  Server đều giống nhau, nhưng tất cả
  các công nghệ đó đều có giải pháp tích
  hợp cho HTTP để tuân thủ tiêu chuẩn
  này.
- **API** (Application Programming
  Interface) là một tập hợp các quy tắc
  và cơ chế mà các ứng dụng sử dụng để
  giao tiếp với nhau.
- **RESTful API** là một kiểu API mà các
  ứng dụng sử dụng để giao tiếp với
  nhau. RESTful API sử dụng HTTP để giao
  tiếp giữa Client và Server, và tuân
  thủ các nguyên tắc của REST
  (Representational State Transfer).
## Client/Server Communications

- **WebSocket API** cho phép mở một
  phiên làm việc hai chiều, tương tác
  giữa client và server. Trình duyệt và
  server đều có thể **phát** các thông
  điệp để bên còn lại lắng nghe.
  WebSocket là nền tảng cho các ứng dụng
  có chức năng trò chuyện (chat).
- **GraphQL** là một “Ngôn ngữ truy vấn
  cho API”. GraphQL cho phép các nhà
  phát triển tạo các yêu cầu từ Client
  đến Server một cách chính xác hơn, chỉ
  lấy đúng dữ liệu cần thiết tại thời
  điểm gọi, thay vì một khối dữ liệu
  được định nghĩa trước như trong REST.
- Tương tự như REST, **RPC** (Remote
  Procedure Call) là một tiêu chuẩn
  tương tác API. Tuy nhiên, thay vì dựa
  trên tài nguyên như REST, RPC tập
  trung vào việc thực thi các quy trình.
  Nó giống như nói **execute this
  instruction**, thay vì **give me this
  resource**.

## Authentication & Authorization

- **Authentication** là quá trình xác
  minh danh tính của người dùng.
- **Authorization** là quá trình kiểm
  tra xem người dùng có quyền truy cập
  vào tài nguyên hay không.
- **OAuth** là một tiêu chuẩn xác thực
  mở được sử dụng rộng rãi. OAuth cho
  phép người dùng cấp quyền truy cập vào
  tài nguyên của họ cho một ứng dụng
  khác mà không cần chia sẻ mật khẩu của
  họ.
- **JWT** (JSON Web Token) là một chuẩn
  mở để tạo ra một cách an toàn để
  truyền thông tin giữa các bên dưới
  dạng JSON. JWT được sử dụng rộng rãi
  trong việc xác thực và truyền thông
  tin giữa Client và Server.

## Databases

- **SQL - Relational Databases**: Dữ
  liệu được tổ chức dưới dạng Hàng và
  Cột trong một Bảng. Các mục trong bảng
  có thể có mối quan hệ với các bảng
  khác, và nhà phát triển có thể xây
  dựng các cách để **truy vấn** hoặc
  nhóm dữ liệu đó lại. VD: MySQL,
  PostgreSQL, và SQLite.

## Databases

- **NoSQL - Document Databases**: Dữ
  liệu **không có cấu trúc**
  (schemaless) và được tổ chức dưới dạng
  các đối tượng tương tự JSON. Thay vì
  các hàng có thông tin được xác định
  trước cho mỗi mục, các mục có thể có
  dạng tự do hơn. Mỗi mục có thể chứa
  thông tin khác biệt so với các mục
  khác trong cùng một **bộ sưu tập**
  (collection). VD: MongoDB, Firebase,
  và CouchDB.
## Databases

- **In-Memory Databases**: Các cơ sở dữ
  liệu lưu trữ thông tin trong bộ nhớ
  máy tính (RAM) thay vì trên đĩa cứng
  hoặc ổ cứng (SSD).Dữ liệu trong loại
  cơ sở dữ liệu này có tốc độ truy cập
  cực nhanh, nhưng thường không được lưu
  trữ lâu dài giữa các phiên làm việc.
  VD: Redis, Memcached, và Hazelcast.

## Developer Tools

- **Code Editor** là một ứng dụng được
  các lập trình viên sử dụng để phát
  triển ứng dụng. Khác với trình soạn
  thảo văn bản đơn thuần, Code Editor
  được tối ưu hóa cho các ngôn ngữ lập
  trình thay vì ngôn ngữ tự nhiên.
- **IDE** (Integrated Development
  Environment) là một ứng dụng phát
  triển phần mềm chuyên nghiệp, cung cấp
  một loạt các công cụ để phát triển
  phần mềm hiệu quả. IDE thường bao gồm
  Code Editor, Compiler, Debugger, và
  nhiều công cụ khác.
- **Console** là một ứng dụng dòng lệnh
  mà các nhà phát triển sử dụng để tương
  tác với hệ thống máy tính. Console
  cung cấp một cách để chạy các lệnh và
  kiểm tra kết quả mà không cần sử dụng
  giao diện đồ họa.

## Developer Tools

- **Package Manager** là công cụ thường
  được thiết kế dành riêng cho một ngôn
  ngữ lập trình hoặc framework. Nó quản
  lý việc tải xuống và tổ chức mã nguồn
  hỗ trợ mà các lập trình viên cần, được
  tạo bởi những lập trình viên khác.
- **Build Automation Tools** là các công
  cụ hỗ trợ giúp tự động thực hiện nhiều
  tác vụ khác nhau cho lập trình viên
  khi phát triển ứng dụng(Tối ưu hóa mã
  bằng cách giảm kích thước file, Chuyển
  đổi mã từ ngôn ngữ hoặc phiên bản này
  sang ngôn ngữ hoặc phiên bản khác.)

- **Object Relational Mapper (ORM)**,
  phiên bản phổ biến trong lập trình, là
  một thư viện cho phép bạn thay đổi dữ
  liệu trong cơ sở dữ liệu thông qua
  ngôn ngữ lập trình, thay vì sử dụng
  ngôn ngữ truy vấn (SQL).
- **Postman** là một ứng dụng dùng để
  kiểm thử các API. Đây là một ứng dụng
  Client giúp kiểm tra các yêu cầu HTTP
  thông qua giao diện đồ họa.

## Developer Concepts

- **Software Design Patterns** là các
  giải pháp chung và có thể tái sử dụng
  để giải quyết các vấn đề phổ biến
  trong lập trình. Chúng là các ý tưởng
  trừu tượng, không phụ thuộc vào bất kỳ
  ngôn ngữ lập trình nào.
- **Software Testing** là quá trình đánh
  giá và xác minh rằng phần mềm hoặc ứng
  dụng hoạt động đúng như mong đợi. Quá
  trình này thường được thực hiện với sự
  hỗ trợ của các công nghệ và mã kiểm
  thử chuyên biệt, có thể chạy song song
  với quá trình phát triển ứng dụng.

## Developer Concepts

- **SOLID** là một từ viết tắt tượng
  trưng cho năm nguyên tắc thiết kế phần
  mềm, nhằm giúp các thiết kế phần mềm
  trở nên dễ dàng hiểu, linh hoạt và dễ
  bảo trì. SOLID bao gồm Single
  Responsibility, Open/Closed, Liskov
  Substitution, Interface Segregation,
  và Dependency Inversion.
- **Software Development Life Cycle
  (SDLC)** là quy trình mà ngành công
  nghiệp phần mềm sử dụng để tạo ra phần
  mềm: Planning-> Design-> Development->
  Testing-> Deployment-> Maintenance.
- **Single Page Architecture (SPA)** là
  một kiểu kiến trúc ứng dụng web phổ
  biến với sự ra đời của các framework
  như React và Angular. Thay vì sử dụng
  phương pháp cũ, nơi Server cung cấp
  toàn bộ trang web mới mỗi khi người
  dùng điều hướng, Client sẽ kiểm soát
  những gì hiển thị trên màn hình.

## Developer Concepts

- **Algorithm** là một chuỗi các hướng
  dẫn đã được lập trình.Thông thường,
  các thuật toán được thực thi để thực
  hiện các hành động như: Thu thập dữ
  liệu hoặc tương tác, Chuyển đổi dữ
  liệu, Tạo ra dữ liệu hoặc đầu ra trực
  quan.
- **Code Standards** là tập hợp các
  hướng dẫn dành cho một ngôn ngữ lập
  trình cụ thể, nhằm đề xuất:
  programming style, best practices, và
  conventions. Code Standards giúp mã
  nguồn dễ đọc, dễ bảo trì, và dễ hiểu
  hơn.

## Cloud Platforms

- How Applications Run
- Our Computer Hardware
- Key Hardware Components: Memory, CPU,
  Storage
- Cloud Platforms: AWS, Azure, Google
  Cloud
- Serverless
- Cloud Function
- Cloud Certifications
- ...and more!

## DevOps

- **DevOps** là một tập hợp các thực
  hành kết hợp giữa phát triển phần mềm
  (Development) và vận hành công nghệ
  thông tin (Operations). Mục tiêu của
  DevOps là:
  - Rút ngắn vòng đời phát triển hệ
    thống (systems development
    lifecycle).
  - Đảm bảo khả năng cung cấp liên tục
    các phần mềm chất lượng cao
    (continuous delivery of high-quality
    software).
- **DevOps Goals**:
  - Tăng tốc độ phát triển phần mềm
    (Accelerate software development).
  - Tăng khả năng triển khai phần mềm
    (Increase software deployment).
  - Tăng khả năng vận hành phần mềm
    (Improve software operations).
  - Tăng khả năng bảo mật phần mềm
    (Enhance software security).

## DevOps

- **Continuous Integration (CI)** là một
  phương pháp phát triển phần mềm mà các
  nhà phát triển thường sử dụng để kết
  hợp mã nguồn từ nhiều nhà phát triển
  vào một dự án chung. Mục tiêu của CI
  là giảm thời gian và rủi ro khi hợp
  nhất mã nguồn.
- **Continuous Deployment (CD)** là một
  phương pháp phát triển phần mềm mà các
  nhà phát triển thường sử dụng để tự
  động hóa quá trình triển khai phần
  mềm. Mục tiêu của CD là giảm thời gian
  và rủi ro khi triển khai phần mềm.
- Infrastructure as Code (IaC) là một
  phương pháp quản lý và cấu hình hạ
  tầng máy chủ thông qua mã nguồn. IaC
  giúp tự động hóa việc quản lý hạ tầng
  máy chủ, giảm thời gian và rủi ro khi
  triển khai hạ tầng máy chủ.
## DevOps

- **Docker** là một nền tảng phần mềm giúp
  tự động hóa việc triển khai, vận hành
  và quản lý ứng dụng trong môi trường
  container. Docker giúp giảm thời gian
  và rủi ro khi triển khai ứng dụng.
- **Kubernetes** là một nền tảng phần mềm
  giúp tự động hóa việc triển khai, vận
  hành và quản lý ứng dụng trong môi
  trường container. Kubernetes giúp giảm
  thời gian và rủi ro khi triển khai ứng
  dụng.
