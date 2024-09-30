# Redis
## Redis là gì?
- Redis là một hệ thống cơ sở dữ liệu mã nguồn mở, dùng để lưu trữ dữ liệu dạng key-value. Redis hỗ trợ nhiều kiểu dữ liệu như strings, hashes, lists, sets, sorted sets với các operations tương ứng.
- Redis được thiết kế để giải quyết các vấn đề về hiệu suất, độ tin cậy và khả năng mở rộng.
- Redis là một hệ thống cơ sở dữ liệu in-memory, nghĩa là dữ liệu được lưu trữ trong bộ nhớ chính của máy chủ, giúp tăng tốc độ truy xuất dữ liệu.
- Redis hỗ trợ các phương thức lưu trữ dữ liệu khác nhau như: lưu trữ dữ liệu trên ổ đĩa, lưu trữ dữ liệu trên bộ nhớ, lưu trữ dữ liệu trên bộ nhớ và ổ đĩa.
- Có thể lưu trữ thông tin cho bất kì loại ứng dụng nào,
## Lí do sử dụng Redis
- Nhanh
## Lí do redis nhanh
- Tất cả dữ liệu được lưu trữ trong bộ nhớ chính, giúp tăng tốc độ truy xuất dữ liệu.
  - Hầu hết các database lưu trữ tất cả các thông tin của chúng trong bộ nhớ của máy tính và ổ cứng.Truy cập dữ liệu trong bộ nhớ nhanh nhưng lấy dữ liệu trên ổ đĩa tương đối chậm => Redis cũng lưu trữ tất cả thông tin của nó trong bộ nhớ của máy tính, nhưng không lưu trữ trên ổ cứng. Điều này giúp Redis truy cập dữ liệu nhanh hơn so với các database khác.
  - Điều này cũng có thể gây cho chúng ta những khó khăn khi làm việc với dữ liệu lớn, vì bộ nhớ của máy tính có giới hạn.( VD: Nếu bạn có tập dữ liệu lớn 100 GB nhưng bộ nhớ máy tính của bạn chỉ có 16 GB, Redis sẽ không thể lưu trữ tất cả dữ liệu của bạn trong bộ nhớ của máy tính)
- Redis lưu trữ tất cả các dữ liệu của mình hoặc sắp xếp dữ liệu của mình dưới dạng dữ liệu đơn giản, có cấu trúc
- Redis có một bộ tính năng đơn giản
## Cài đặt Redis
- Create 1 instance Redis từ redis.com (Recommended)
  - npx rbook 
  - rbook.cloud
- Install + run in local
## Commands for Adding and Querying Data
- Basic String
  - SET message "Hello, World!" : Set a key-value pair
  - GET message : Get the value of a key
  - Quá trình chi tiết: 
    - Redis sẽ tạo một key-value pair với key là message và value là Hello, World! và trả về OK nếu thành công.
    - Khi bạn gọi GET message, Redis sẽ trả về giá trị của key message, là Hello, World!
    - Về cơ bản chúng ta có thể coi message là một biến và Hello, World! là giá trị của biến đó.