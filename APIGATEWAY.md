# API gateway để làm gì? Tại sao chúng ta cần sử dụng API gateway?
- API gateway là một dịch vụ trung gian, 1 điểm truy cập duy nhất từ Client đến các microservices. API gateway giúp chúng ta quản lý các request từ client, chuyển tiếp các request đến các microservices, và trả về kết quả cho client.
- API gateway thường cung cấp 1 số chức năng quan trọng:
  - Authentication: API gateway giúp chúng ta xác thực người dùng, đảm bảo rằng người dùng có quyền truy cập vào các API.
  - Load balancing: API gateway giúp chúng ta phân phối tải giữa các microservices.
  - Protocol translation: API gateway giúp chúng ta chuyển đổi giữa các giao thức khác nhau.
  - Monitoring: API gateway giúp chúng ta theo dõi các request, response, và lỗi từ các microservices.
  - Logging: API gateway giúp chúng ta ghi log các request, response, và lỗi từ các microservices.
  - Analytics: API gateway giúp chúng ta phân tích dữ liệu từ các request, response, và lỗi từ các microservices.
  - Billing: API gateway giúp chúng ta tính toán chi phí từ các request, response, và lỗi từ các microservices.
  - Caching: API gateway giúp chúng ta lưu trữ cache từ các request, response, và lỗi từ các microservices.
- Một quy trình thông thường khi sử dụng API gateway:
  - Client gửi request đến API gateway (Thường là HTTP request, RESTful API, GraphQL).
  - API gateway xác thực các yêu cầu HTTP
  - API gateway kiểm tra địa chỉ IP và các HTTP header, kiểm tra danh sách đen trắng, kiểm tra token, kiểm tra chữ ký số, kiểm tra mã xác thực, kiểm tra mật khẩu
  - API gateway Authentication và Authorization(Bản thân cái này cũng là 1 chủ đề khó)
  - API gateway Rate limiting số lượng request từ client, nếu quá nhiều request thì API gateway sẽ từ chối request.
  - API gateway Load balancing giữa các microservices.
  - API gateway protocol translation giữa các giao thức khác nhau.
  - API gateway chuyển tiếp request đến microservices.
  - Microservices xử lý request và trả về kết quả cho API gateway.
  - API gateway trả về kết quả cho client.
- Ngoài luồng chính nếu ok ra thì trả về kết quả cho client, nếu có lỗi thì trả về lỗi cho client, circuit breaker, retry, timeout, fallback, cache, logging, monitoring, analytics, billing, ...
- API gateway là 1 phần quan trọng của infrastructure, giúp chúng ta quản lý các request từ client, chuyển tiếp các request đến các microservices, và trả về kết quả cho client.

# System Design

- Vertical scaling: Thay đổi kích thước của máy chủ, thường là tăng RAM, CPU, hoặc ổ cứng. Nếu trường hợp có nhiều request đến, thì chúng ta cần tăng kích thước của máy chủ.Điều này rất dễ cũng như tiết kiệm chi phí nhưng có rất nhiều hạn chế.

- Horizontal scaling: Thêm máy chủ mới, thường là tăng số lượng máy chủ.Khi có nhiều request đến, chúng ta cần thêm máy chủ mới. Điều này khá phức tạp và tốn kém hơn so với vertical scaling nhưng nó cho phép chúng ta mở rộng hệ thống một cách linh hoạt và cũng không cần đến máy chủ quá mạnh và khả năng bổ sung của chúng gần như là vô hạn. Chúng bổ sung cho chúng ta khả năng dự phòng( Redundancy ) và khả năng chịu lỗi( Fault tolerance ). Khi một máy chủ bị lỗi, chúng ta có thể chuyển request đến máy chủ khác.

- Load balancer: Load balancer giúp chúng ta phân phối tải giữa các máy chủ. Load balancer có thể phân phối tải dựa trên nhiều tiêu chí như round-robin, least connections, least response time, least bandwidth, least requests, và custom. Load balancer giúp chúng ta tăng hiệu suất, tăng khả năng chịu lỗi, và tăng khả năng mở rộng của hệ thống.

# CDN(Content Delivery Network)
- CDN là gì ? Tại sao các dev nên tận dụng CDN ?
- CDN là một mạng phân phối nội dung, giúp chúng ta phân phối nội dung đến người dùng một cách nhanh chóng và hiệu quả. CDN giúp chúng ta giảm độ trễ, tăng tốc độ tải trang, giảm tải cho máy chủ, giảm chi phí băng thông, và tăng khả năng chịu lỗi của hệ thống.
- Ban đầu nó được phát triển để tăng tốc độ phân phối nội dung HTML tĩnh cho người dùng trên toàn thế giới. Nhưng hiện nay, CDN đã phát triển rất nhiều và hỗ trợ nhiều loại nội dung khác nhau như ảnh, video, CSS, JavaScript, font, API, và nhiều loại nội dung khác.
- Ở cấp độ cơ bản, CDN mang content đến gần hơn với người dùng, điều này cải thiện hiệu suất của dịch vụ web theo cảm nhận của người dùng, điều này giúp tăng trải nghiệm người dùng, giữ chân khách hàng và giảm tải cho máy chủ.
- CDN triển khai máy chủ tại hàng trăm điểm trên toàn thế giới, các điểm này được gọi là điểm hiện diện (Point of Presence - PoP). Khi người dùng truy cập vào trang web, CDN sẽ phân phối nội dung từ máy chủ gần nhất với người dùng, điều này giúp giảm độ trễ và tăng tốc độ tải trang.
- CDN khác nhau dùng các cách khác nhau để chuyển yêu cầu đến các PoP gần nhất với người dùng như: Anycast, Unicast, Multicast, và Broadcast. Hai cách phổ biến nhất là DNS và Anycast.Với DNS mỗi PoP có địa chỉ IP riêng, khi người dùng tra cứu địa chỉ IP cho CDN, DNS sẽ trả về địa chỉ IP của PoP gần nhất với người dùng. Với Anycast, mỗi PoP có cùng địa chỉ IP,khi có yêu cầu đến mạng Anycast cho địa chỉ IP đó, mạng sẽ chuyển yêu cầu đến PoP gần nhất với người dùng.
- Mỗi máy chủ hoạt động như 1 Reverse Proxy với nội dung Cache khổng lồ
- CDN hiện đại cũng có thể giúp chúng ta chuyển đổi nội dung tĩnh thành các định dạng khác nhau như WebP, AVIF, và Brotli để tăng tốc độ tải trang.
- Edge server: Máy chủ ở các PoP, giúp chúng ta phân phối nội dung đến người dùng một cách nhanh chóng và hiệu quả, chúng đóng 1 vai trò rất quan trọng trong modern HTTP Stack.
- CDN có tính bảo mật cao, giúp chúng ta bảo vệ trang web khỏi các cuộc tấn công như DDoS, SQL Injection, XSS, CSRF, và nhiều cuộc tấn công khác. Chúng sẽ giúp chúng ta chuyển hướng các cuộc tấn công đến máy chủ CDN thay vì máy chủ chính của chúng ta.
- CDN cũng giúp chúng ta cải thiện tính khả dụng.Về cơ bản CDN có tính phân tán cao và có thể chịu được nhiều lỗi phần cứng hơn so với máy chủ chính của chúng ta. Nếu một máy chủ CDN bị lỗi, chúng ta có thể chuyển yêu cầu đến máy chủ CDN khác.

# Caching
- Bộ nhớ đệm là 1 kĩ thuật phổ biến nhằm nâng cao hiệu suất của hệ thống và giảm thời gian phản hồi. Bộ nhớ đệm giúp chúng ta lưu trữ dữ liệu tạm thời, giảm thời gian truy cập dữ liệu từ ổ cứng hoặc từ mạng, giảm tải cho máy chủ, giảm chi phí băng thông, và tăng khả năng chịu lỗi của hệ thống.
- Có thể cache ở nhiều cấp độ khác nhau như: Client-side caching, CDN caching, Proxy caching, Web server caching, Database caching, Application caching, và Memory caching.
- Kiến trúc điển hình bao gồm nhiều lớp Cache, ở mỗi lớp có nhiều chiến lược và cơ chế lưu Cache khác nhau tùy thuộc vào yêu cầu và ràng buộc của ứng dụng cụ thể
- Bộ nhớ cache trong máy tính: L1, L2, L3 cache, RAM, ổ cứng SSD, ổ cứng HDD, ...L1 là cache nhỏ nhất và nhanh nhất, thường được tính hợp vào chính CPU, L2 là cache lớn hơn và chậm hơn, L3 là cache lớn nhất và chậm nhất. RAM nhanh hơn ổ cứng, ổ cứng SSD nhanh hơn ổ cứng HDD.
- TLB(Translation Lookaside Buffer): TLB là 1 cache nhỏ nằm trong CPU, giúp chúng ta dịch địa chỉ ảo thành địa chỉ vật lý nhanh hơn.
- Ở OS có hệ thống file system cache, page cache.
- Ở Clien App: Trình duyệt có thể lưu vào Cache các phản hồi HTTP để có thể truy xuất dữ liệu nhanh hơn
- Caching ở CDN: CDN có thể lưu trữ cache từ nhiều loại nội dung khác nhau như ảnh, video, CSS, JavaScript, font, API, và nhiều loại nội dung khác. CDN giúp chúng ta phân phối nội dung đến người dùng một cách nhanh chóng và hiệu quả.
- Caching ở Load Balancer
- Caching ở Proxy Server
- Caching ở Messaging infra:Cơ sở hạ tầng nhắn tin: Các nhà môi giới tin nhắn lưu trữ tin nhắn trên đĩa trước, sau đó người dùng sẽ truy xuất chúng theo tốc độ của riêng họ. Tùy thuộc vào chính sách lưu giữ, dữ liệu được lưu vào bộ nhớ đệm trong các cụm Kafka trong một khoảng thời gian nhất định.
- Fulltext Search: Cơ sở dữ liệu full-text search lưu trữ các kết quả tìm kiếm phổ biến trong bộ nhớ đệm để giảm thời gian truy cập dữ liệu từ ổ cứng.
- Cache ở Database: Database có thể lưu trữ cache từ các câu lệnh SQL, kết quả truy vấn, và dữ liệu khác. Database cache giúp chúng ta giảm thời gian truy cập dữ liệu từ ổ cứng, giảm tải cho máy chủ, giảm chi phí băng thông, và tăng khả năng chịu lỗi của hệ thống.

# Chiến lược và Cạm bẫy khi sử dụng Cache
Cache như 1 bộ nhớ lưu trữ bản sao của các dữ liệu được cập nhập thường xuyên, đó là 1 chiến lược để tăng tốc mọi thứ bắng cách giữ cho dữ liệu luôn sẵn có, giảm nhu cầu tìm nạp dữ liệu từ CSDL chậm hơn mỗi khi được yêu cầu
- Cache-Aside: Khi 1 request đến, trước khi trả về kết quả, chúng ta sẽ kiểm tra xem dữ liệu đã được cache chưa, nếu chưa thì chúng ta sẽ lấy dữ liệu từ CSDL, sau đó lưu vào cache, và trả về kết quả cho client. Nếu dữ liệu đã được cache, chúng ta sẽ trả về kết quả từ cache cho client.
- Read-Through: Khi 1 request đến, chúng ta sẽ kiểm tra xem dữ liệu đã được cache chưa, nếu chưa thì chúng ta sẽ lấy dữ liệu từ CSDL, sau đó lưu vào cache, và trả về kết quả cho client. Nếu dữ liệu đã được cache, chúng ta sẽ trả về kết quả từ cache cho client.
- Write-Through: Khi 1 request đến, chúng ta sẽ lưu dữ liệu vào cache, sau đó lưu dữ liệu vào CSDL, và trả về kết quả cho client.
- Write-Behind: Khi 1 request đến, chúng ta sẽ lưu dữ liệu vào cache, sau đó trả về kết quả cho client, và lưu dữ liệu vào CSDL sau đó.


# Cache Stampede
- Cache stampede là 1 hiện tượng xảy ra khi nhiều request đến cùng 1 lúc, và tất cả các request đều không tìm thấy dữ liệu trong cache, điều này dẫn đến tất cả các request đều phải truy cập vào CSDL, làm tăng tải cho CSDL, giảm hiệu suất của hệ thống, và tăng thời gian phản hồi cho người dùng => system down
- Để giải quyết vấn đề này:
  - Locking: Chúng ta có thể sử dụng locking để đảm bảo rằng chỉ có 1 request được phép truy cập vào CSDL, các request khác sẽ phải chờ đợi cho đến khi request đầu tiên hoàn thành.
  - Cache-Aside: Chúng ta có thể sử dụng cache-aside để đảm bảo rằng chỉ có 1 request được phép truy cập vào CSDL, các request khác sẽ truy cập vào cache, và chờ đợi cho đến khi cache được cập nhập.



# IP
- IP là gì? Tại sao chúng ta cần sử dụng IP?
- IP là Internet Protocol, là 1 giao thức mạng dùng để xác định địa chỉ của máy tính trên mạng. IP giúp chúng ta xác định địa chỉ của máy tính, giúp chúng ta truy cập vào máy tính từ xa, giúp chúng ta truyền dữ liệu giữa các máy tính trên mạng, và giúp chúng ta truyền dữ liệu giữa các mạng khác nhau.
- IP có 2 phiên bản chính là IPv4 và IPv6. IPv4 có 32 bit, và IPv6 có 128 bit. IPv4 có 4 phần, mỗi phần có giá trị từ 0 đến 255, và được phân cách bởi dấu chấm. IPv6 có 8 phần, mỗi phần có giá trị từ 0 đến FFFF, và được phân cách bởi dấu hai chấm.

# TCP/IP
- TCP/IP là gì? Tại sao chúng ta cần sử dụng TCP/IP? 
- TCP/IP là 1 bộ giao thức mạng, bao gồm 2 giao thức chính là TCP và IP. TCP/IP giúp chúng ta truyền dữ liệu giữa các máy tính trên mạng, giúp chúng ta truyền dữ liệu giữa các mạng khác nhau, và giúp chúng ta truyền dữ liệu giữa các máy tính sử dụng các hệ điều hành khác nhau.
- TCP/IP có 4 lớp chính là Application, Transport, Internet, và Network Interface. Ở mỗi lớp có nhiều giao thức khác nhau như HTTP, FTP, SMTP, POP3, IMAP, DNS, DHCP, TCP, UDP, IP, ARP, ICMP, IGMP, Ethernet, và nhiều giao thức khác.
- TCP/IP giúp chúng ta truyền dữ liệu giữa các máy tính trên mạng, giúp chúng ta truyền dữ liệu giữa các mạng khác nhau, và giúp chúng ta truyền dữ liệu giữa các máy tính sử dụng các hệ điều hành khác nhau.
- TCP phân chia dữ liệu thành các gói, gửi dữ liệu từ máy gửi đến máy nhận, và đảm bảo rằng dữ liệu được gửi đến đúng địa chỉ, đúng cổng, và đúng thứ tự. TCP cũng đảm bảo rằng dữ liệu được gửi đến đúng địa chỉ, đúng cổng, và đúng thứ tự.
# UDP
- UDP là gì? Tại sao chúng ta cần sử dụng UDP? 
- UDP là User Datagram Protocol, là 1 giao thức mạng dùng để truyền dữ liệu giữa các máy tính trên mạng. UDP giúp chúng ta truyền dữ liệu giữa các máy tính trên mạng, giúp chúng ta truyền dữ liệu giữa các mạng khác nhau, và giúp chúng ta truyền dữ liệu giữa các máy tính sử dụng các hệ điều hành khác nhau.
- UDP không đảm bảo rằng dữ liệu được gửi đến đúng địa chỉ, đúng cổng, và đúng thứ tự. UDP không đảm bảo rằng dữ liệu được gửi đến đúng địa chỉ, đúng cổng, và đúng thứ tự.
- UDP thường được sử dụng cho các ứng dụng cần truyền dữ liệu nhanh như video, audio, game, và nhiều ứng dụng khác. UDP không cần thiết cho các ứng dụng cần truyền dữ liệu chính xác như email, file, và nhiều ứng dụng khác.
- UDP không cần thiết cho các ứng dụng cần truyền dữ liệu chính xác như email, file, và nhiều ứng dụng khác.

# DNS
- DNS là gì? Tại sao chúng ta cần sử dụng DNS?
- DNS là Domain Name System, là 1 hệ thống dùng để chuyển đổi tên miền thành địa chỉ IP. DNS giúp chúng ta truy cập vào trang web từ tên miền, giúp chúng ta truy cập vào trang web từ địa chỉ IP, giúp chúng ta truy cập vào trang web từ máy tính, và giúp chúng ta truy cập vào trang web từ mạng.
- DNS có 2 loại là DNS server và DNS client. DNS server là máy chủ chứa dữ liệu DNS, và DNS client là máy tính truy cập vào dữ liệu DNS. DNS server có nhiều loại như: Root server, TLD server, Authoritative server, và Recursive server.