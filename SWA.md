# Kiến trúc phần mềm
- Mọi thức chúng ta xây dựng đều có kiến trúc dù chúng ta có biết về nó hay không và chúng ta có nghĩ về nó trước hay chúng đến với chúng ta 1 cách tự nhiên
- Chúng ta càng đầu tư vào việc xây dựng 1 sản phẩm thì việc thay đổi và tái cấu trúc nó càng khó khăn
- Câu hỏi được đặt ra là tầm quan trọng của 1 cấu trúc là gì và tại sao chúng ta lại muốn thay đổi nó trong tương lai ? Vấn đề về hệ thống mô tả cả mục đích và chất lượng sản phẩm của chúng ta
VD: Nếu chúng ta nhìn vào hệ thống của 1 nhà hát chúng ta đều thấy mục đích của nó là tổ chức những buổi biểu diễn, nếu chúng là cần sinh hoạt học tập thì ở nhà hát sẽ vô cùng khó chịu và bất tiện và ngược lại
### Áp dụng kiến trúc phần mềm vào hệ thống Software:
- Gần như chúng ta có vô số cách để tổ chức mã code của mình để đạt được chức năng của hệ thống
- Những cách tổ chức khác nhau sẽ cho những đặc tính khác nhau
- Nói cách khác kiến trúc phần mềm sẽ tác động đến việc sản phẩm của chúng ta hoạt động như thế nào và việc mở rộng quy mô dễ dàng hay thêm những tính năng mới
- Tác động đến việc xử lí các lỗi và bảo trì sản phẩm hay những cuộc tấn công từ bên ngoài
- Và nếu chúng ta tổ chức kiến trúc phần mềm chưa được tối ưu thì chi phí cho việc thiết kế lại thực sự tăng lên hoặc nếu không thau đổi sẽ ảnh hưởng đến khả năng bảo trì và mở rộng sản phẩm(cả tiền bạc và thời gian) đặc biệt là khi chúng ta làm việc trên 1 hệ thống quy mô lớn
### Kiến trúc phần mềm là gì ?
- Có rất nhiều cách để định nghĩa về 1 kiến trúc phần mềm và mọi người cũng đã tranh cãi rất nhiều về nó
- Cách định nghĩa phổ biến là kiến trúc phần mềm là sự tổ chức của các thành phần phần mềm và cách chúng tương tác với nhau
- Có thể hiểu đơn giản là kiến trúc phần mềm là cách chúng ta tổ chức mã code của mình
- KIẾN TRÚC PHẦN MỀM CỦA 1 HỆ THỐNG LÀ MÔ TẢ Ở MỨC ĐỘ CAO NHẤT VỀ CẤU TRÚC CỦA HỆ THỐNG, NÓ LÀ NHỮNG THÀNH PHẦN KHÁC NHAU VÀ CHÚNG TƯƠNG TÁC VỚI NHAU NHƯ THẾ NÀO ĐỂ ĐÁP ỨNG CÁC YÊU CẦU VÀ RÀNG BUỘC CỦA HỆ THỐNG
#### Là mô tả cấp cao nhất về cấu trúc của hệ thống
- Cho chúng ta thấy những thành phần quan trọng của hệ thống
- Giúp chúng ta có thể suy luận về hệ thống
- Ngụ ý những quyết định quan trọng về hệ thống, như về ngôn ngữ lập trình hoặc công nghệ sử dụng
#### Là mô tả về cách các thành phần tương tác với nhau
- Các thành phần mà chúng ta đang nói đến có thể coi là các "black box" và chúng được xác định bởi hành vi và API của chúng
- Bản thân các thành phần đó có thể là những hệ thống phức tạp được mô tả tả thông qua kiến trúc phần mềm của riêng nó
- Đệ quy
#### Đáp ứng các yêu cầu và ràng buộc của hệ thống
- Mô tả những gì hệ thống phải làm và những gì hệ thống không được phép làm
### Software Development Life Cycle
- Mô hình phát triển phần mềm là 1 quy trình mà chúng ta sử dụng để xây dựng phần mềm
- Design -> Implementation -> Testing -> Deployment-> Loop
- Software Architecture là 1 đầu ra của quá trình Design
### Thách thức
- Thách thức về việc xác định 1 kiến trúc phần mềm tốt cho hệ thống: hoạt động đúng, tối ưu, dễ bảo trì và mở rộng
- Chúng ta có thể tuân theo 1 quy trình thiết kế phần mềm có phương pháp
- Áp dụng các Atrchitectural Patterns đã được chứng minh trong ngành và áp dụng các phương pháp hay nhất tùy từng trường hợp cụ thể

## Thu thập, phân loại và phân tích yêu cầu
- Là bước đầu tiên trong quá trình phát triển phần mềm đặc biệt là những hệ thống lớn
- Requirement: Là mô tả về những gì hệ thống cần phải làm và những gì hệ thống không được phép làm, nó giúp chúng ta thu hẹp chính xác những gì chúng ta cần để xây dựng hệ thống
- Là 1 kĩ sư chúng ta không nên mới nhận được yêu cầu và bắt đầu code ngay mà cần phải hiểu rõ vấn đề và xác định rõ yêu cầu thậm chí là 1 yêu cầu không chính thức
- Đối với các hệ thống lớn thì thường y/c về 1 phương thức, thuật toán, 1 class, 1 module, 1 hệ thống con, 1 hệ thống lớn
- Method -> Class -> Module ->Lib-> Subsystem -> System
- Thường thường chúng ta sẽ bị choáng ngợp bởi scope của nó quá lớn (VD: 1 hệ thống quản lý bệnh viện, hệ thống quản lý tài chính, hệ thống quản lý nhà hàng, video streaming, ...)
- Khó khăn trong việc xác định yêu cầu và phân tích yêu cầu: Yêu cầu được đưa ra mơ hồ (không chính xác , không đủ, không đúng ...), khách hàng cũng không phải lúc nào cũng biết chính xác cái họ cần điều duy nhất họ biết là vấn đề họ cần giải quyết. VD(thiết kế 1 hệ thống giảm giá: giảm giá cho ai, giảm giá bao nhiêu, giảm giá như thế nào, giảm khi nào, trừ thẳng hay theo % ...)
- Đó là lí do hầu hết trong những cuộc phỏng vấn về thiết kế hệ thống, một trong những khả năng của chúng là cần là phải làm rõ những câu hỏi như thế để xác định rõ yêu cầu
- Làm thử, đưa khách hàng vào vòng lặp phản hồi để xác định rõ yêu cầu (Cách này cũng khác tốn chi phí và thời gian)
- Có 3 loại yêu cầu: Functional, Non-Functional, System contraints(Hạn chế và ranh rới của hệ thống). ***Functional*** :Những yêu cầu này cơ bản mô tả hành vi của hệ thống hay nói cách khác hệ thống của chúng ta thực sự làm được gì, những yếu tố dễ dàng bị ràng buộc tới mục tiêu của hệ thống (VD: HỆ thống đặt xe: bật nên sẽ hiển thị bản đồ, danh sách các tài xế đang bật app mà chưa có khách trong phạm vi 5km, chọn 1 tài xế và đặt xe, sau khi đặt xe thì sẽ hiển thị thông tin của tài xế và xe, ...).***Non-Functional*** là những yêu cầu không phải là hành vi của hệ thống mà là những yêu cầu khác như hiệu suất, bảo mật, sự mở rộng, sự dễ bảo trì.***System contraints*** là những ràng buộc của hệ thống như ngôn ngữ lập trình, công nghệ sử dụng, hệ điều hành, tiền bạc, số lượng nhân sự ...
- Atrchitectural Drivers: Là những yêu cầu quan trọng nhất của hệ thống, những yêu cầu này sẽ ảnh hưởng lớn đến kiến trúc của hệ thống( thường là 3 loại bên trên)

## Yêu cầu về tính năng
- Có thể trao đổi trực tiếp với khách hàng để hiểu rõ yêu cầu và chúng ta có thể hi vọng họ nắm chắc và không quên chi tiết nào
- Tuy nhiên đối với những dự án lớn mà có nhiều người tham gia thì việc trao đổi trực tiếp với khách hàng là không khả thi và không phải là 1 cách tiếp cận tốt
- Một trong những cách mạnh mẽ và hiệu quả hơn là thông qua các trường hợp sử dụng (Use Case) và luồng sử dụng (User Flow)
- Use Case: Là 1 kỹ thuật phân tích yêu cầu phần mềm, nó mô tả cách mà hệ thống sẽ được sử dụng bởi người dùng
- User Flow: Là 1 kỹ thuật phân tích yêu cầu phần mềm, nó mô tả cách mà người dùng sẽ tương tác với hệ thống, làm và mô tả theo các bước
- Use Case và User Flow giúp chúng ta hiểu rõ hơn về yêu cầu của hệ thống và giúp chúng ta xác định rõ hơn về yêu cầu của hệ thống

**Các bước để nắm rõ yc của hệ thống:**
- Xác đính tất cả các tác nhân và các loại người dùng trong hệ thống của chúng ta
- Mô tả các trường hợp hoặc tình huống có thể xảy ra
- Xem xét từng trường hợp sử dụng và mở rộng chúng thông qua dòng sự kiện. Và trong mỗi sự kiện chúng ta cần xác định rõ các bước cần thực hiện và chúng ta cũng phải chú ý đến các Action và Data của hệ thống

VD: Hệ thống đặt xe : Các tác nhân: Khách hàng, tài xế, quản lý, hệ thống. Các trường hợp sử dụng: Đặt xe, hủy xe, xem thông tin tài xế, xem thông tin xe, đánh giá tài xế, đánh giá xe, ...Tài xế nhận cuốc, tài xế hủy cuốc, tài xế xác nhận cuốc, tài xế hoàn thành cuốc,Người quản lý thêm tài xế, xóa tài xế, sửa tài xế, thêm xe, xóa xe, sửa xe, xem báo cáo, ...Khách hàng đặt xe, hủy xe, xem thông tin tài xế, xem thông tin xe, đánh giá tài xế, đánh giá xe, ...

- Chúng ta có thể thực hiện chúng qua sơ đồ sequence diagram, activity diagram, flow chart, ...
- Sequence Diagram: Mô tả các tương tác giữa các đối tượng trong hệ thống theo thời gian và theo thứ tự (UML) và nó là 1 tiêu chuẩn xác định các tương tác giữa các đối tượng trong hệ thống

## Yêu cầu phi tính năng
- Các nghiên cứu chỉ ra rằng những hệ thống thường xuyên được thiết kế và tái cấu trúc lại hầu hết không phải là chúng thiếu chức năng hoặc vì các yêu cầu về chức năng mới nhưng bởi hệ thống như hiện tại hoặc là không đủ nhanh hoặc là không thể đủ mở rộng tốt, code cũ khó bảo trì và phát triển tính năng bị chậm hoặc tính bảo mật thông tin không đủ
- Yc phi chức năng mô tả những phẩm chất, yc chức năng của hệ thống hoặc các thuộc tính tổng thể của hệ thống

VD:Khi người dùng nhập vào ô tìm kiếm  1 sp nào đó các sp sẽ được hiện ta trong thời gian 100ms

VD:Hệ thống phải đảm bảo hoạt động 24/7, chịu đc bn request mỗi giây, dữ liệu phải được sao lưu hàng ngày, ...
- Các y/c nên có:
    - Đo lường được
    - Có thể kiểm tra được
- Không có 1 quy chuẩn cụ thể nào cho việc thiểt kế yc phi chức năng nhưng có thể tham khảo các quy chuẩn như ISO 25010, ISO 9126, ...
- Chúng cũng có thể bị conflict với nhau : VD như việc chúng ta muốn yc dưới 100 ms nhưng lại muốn yc về bảo mật thông tin nó lại cần thời gian xử lí lâu hơn ...
- Còn phụ thuộc vào tính khả thi của hệ thống, nguồn lực, ...(Khách hàng không thể yc 1 cái gì đó không khả thi Vd: khách hàng từ khắp nơi trên thế giới truy cập đều có độ trễ nhỏ nhất)

## Các ràng buộc hệ thống
- Khi chúng ta đi đến kiến trúc cuối cùng chúng ta cần phải đưa ra rất nhiều những quyết định bởi vì chúng ta có rất nhiều cách để đạt được chất lượng của thuộc tính và chức năng chúng ta mong muốn
- Tất nhiên nó cũng đi kèm những sự đánh đổi
- Có 3 sự ràng buộc chính
    - Ràng buộc kỹ thuật: Là những ràng buộc về công nghệ, ngôn ngữ lập trình, framework, device ...
    - Ràng buộc kinh tế: Là những ràng buộc về nguồn lực, tiền bạc, thời gian, mục tiêu kinh doanh ...
    - Ràng buộc hệ thống: Là những ràng buộc về hệ thống, cơ sở dữ liệu, hệ điều hành, ...
    - Ràng buộc pháp lý: Là những ràng buộc về pháp lý, bảo mật thông tin, ...

## Các thuộc tính về chất lượng
### Performance
- Response time: Là thời gian mà hệ thống phản hồi lại cho người dùng sau khi họ thực hiện 1 hành động, là một thước đo hiệu suất quan trọng, lí do là người dùng sẽ cảm thấy lâu và nhanh chóng cảm thấy không hài lòng
- Response time = Processing time + Waiting time (Delay time). Processing time là thời gian mà hệ thống xử lí yêu cầu của người dùng, Waiting time là thời gian mà người dùng phải chờ đợi cho đến khi hệ thống xử lí xong (liên quan nhiều đến hệt thống mạng)
- Throughput: Là số lượng request mà hệ thống có thể xử lí trong 1 khoảng thời gian nhất định, là 1 thước đo hiệu suất quan trọng khác, nó cho chúng ta biết được hệ thống của chúng ta có thể xử lí được bao nhiêu request trong 1 khoảng thời gian nhất định

**Cách đo lường hiệu suất:**
- Đo lường thời gian xử lí của hệ thống
- Đo lường thời gian phản hồi của hệ thống
- Đo lường số lượng request mà hệ thống có thể xử lí trong 1 khoảng thời gian nhất định
- Đo lường số lượng người dùng mà hệ thống có thể hỗ trợ
- Đo lường số lượng người dùng mà hệ thống có thể hỗ trợ cùng 1 lúc
- Đo lường số lượng người dùng mà hệ thống có thể hỗ trợ trong 1 khoảng thời gian nhất định
- Đo lường số lượng người dùng mà hệ thống có thể hỗ trợ cùng 1 lúc trong 1 khoảng thời gian nhất định
- .....
### Scalability
- Scalability: Là khả năng của hệ thống mở rộng, tăng cường
- Load/Traffic: Là số lượng request mà hệ thống nhận được trong 1 khoảng thời gian nhất định và chúng luôn tuôn thay đổi (VD : Khi có khuyến mãi hoặc sự kiện lớn thì số lượng request sẽ tăng lên => Response time sẽ tăng lên,  throughput sẽ giảm xuống=> Suy giảm hiệu suất của hệ thống)
- Vertical Scalability: Là khả năng của hệ thống mở rộng theo chiều dọc, nghĩa là chúng ta có thể tăng cường hiệu suất của hệ thống bằng cách tăng cường tài nguyên của hệ thống (VD: Tăng cường CPU, RAM, Disk, ...)
- Horizontal Scalability: Là khả năng của hệ thống mở rộng theo chiều ngang, nghĩa là chúng ta có thể tăng cường hiệu suất của hệ thống bằng cách thêm máy chủ vào hệ thống (VD: Thêm máy chủ, thêm server, thêm node, ...)
- Có thể kết hợp cả 2 cách để tăng cường hiệu suất của hệ thống
### Availability
- Availability: Là khả năng của hệ thống hoạt động mà không bị gián đoạn, là 1 trong những yêu cầu quan trọng nhất của hệ thống bởi vì nó tác động đến người dùng và doanh nghiệp (VD như khi người dùng đang cần mua hàng mà hệ thống bị lỗi không thể hiển thị thông tin thì họ sẽ cố gắng chuyển sang dùng dịch vụ khác => Mất cả tiền và người dùng)
- Downtime: Là thời gian mà hệ thống không hoạt động, là 1 trong những thước đo quan trọng nhất của hiệu suất của hệ thống
- Downtime = Total time - Uptime
- Uptime: Là thời gian mà hệ thống hoạt động
- Availability = Uptime / Total time
- MTBF (Mean Time Between Failures): Là thời gian trung bình giữa 2 lần hệ thống bị lỗi
- MTTR (Mean Time To Repair): Là thời gian trung bình để sửa lỗi của hệ thống
- Availability = MTBF / (MTBF + MTTR)
### Fault Tolerance vs High Availability
- Fault Tolerance: Là khả năng của hệ thống tiếp tục hoạt động mà không bị gián đoạn khi có lỗi xảy ra, nghĩa là hệ thống vẫn hoạt động bình thường mà không cần phải dừng lại
- High Availability: Là khả năng của hệ thống hoạt động mà không bị gián đoạn, nghĩa là hệ thống vẫn hoạt động bình thường mà không cần phải dừng lại
- Human Error: Là nguyên nhân chính gây ra lỗi cho hệ thống, nó có thể xảy ra bất cứ lúc nào và bất cứ ai
- Software Error: Là nguyên nhân chính gây ra lỗi cho hệ thống, nó có thể xảy ra khi chúng ta viết code, thiết kế hệ thống, triển khai hệ thống, ...
- Hardware Error: Là nguyên nhân chính gây ra lỗi cho hệ thống, nó có thể xảy ra khi chúng ta sử dụng máy chủ, thiết bị, ...
### SLA (Service Level Agreement), SLO (Service Level Objective), SLI (Service Level Indicator)
- SLA: Là hợp đồng giữa nhà cung cấp dịch vụ và khách hàng, nó mô tả về những dịch vụ mà nhà cung cấp dịch vụ sẽ cung cấp cho khách hàng, nó cũng mô tả về những yêu cầu về chất lượng của dịch vụ
- SLO: Là mục tiêu về chất lượng của dịch vụ, nó mô tả về những mục tiêu mà nhà cung cấp dịch vụ sẽ cung cấp cho khách hàng
- SLI: Là chỉ số đo lường chất lượng của dịch vụ, nó mô tả về những chỉ số mà nhà cung cấp dịch vụ sẽ cung cấp cho khách hàng

## API Design
- API: Là 1 giao diện mà chúng ta sử dụng để tương tác với hệ thống, nó giúp chúng ta tương tác với hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
- API Design: Là quá trình thiết kế API, nó giúp chúng ta xác định rõ những gì chúng ta cần để tương tác với hệ thống
- API Design Principles: Là những nguyên tắc cơ bản mà chúng ta cần tuân theo khi thiết kế API
- API Design Best Practices: Là những thực tiễn tốt nhất mà chúng ta cần tuân theo khi thiết kế API
- API Design Patterns: Là những mẫu thiết kế mà chúng ta có thể sử dụng khi thiết kế API
- API Design Tools: Là những công cụ mà chúng ta có thể sử dụng khi thiết kế API
- API Design Process: Là quá trình thiết kế API, nó giúp chúng ta xác định rõ những gì chúng ta cần để tương tác với hệ thống
### RPC (Remote Procedure Call)
- RPC: Là 1 giao thức mà chúng ta sử dụng để tương tác với hệ thống, nó giúp chúng ta tương tác với hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
### REST (Representational State Transfer)
- REST: Là 1 kiến trúc mà chúng ta sử dụng để tương tác với hệ thống, nó giúp chúng ta tương tác với hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
- RESTful: Là 1 kiến trúc mà chúng ta sử dụng để tương tác với hệ thống, nó giúp chúng ta tương tác với hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
- REST API: Là 1 giao diện mà chúng ta sử dụng để tương tác với hệ thống, nó giúp chúng ta tương tác với hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống

## Large Scale System Design Building Blocks
- Large Scale System Design Building Blocks: Là những khối xây dựng hệ thống quy mô lớn, nó giúp chúng ta xác định rõ những gì chúng ta cần để xây dựng hệ thống
### DNS (Domain Name System)
- DNS: Là 1 hệ thống mà chúng ta sử dụng để tìm kiếm tên miền, nó giúp chúng ta tìm kiếm tên miền mà không cần phải biết cách hoạt động bên trong của hệ thống
### Load Balancer
- Load Balancer: Là 1 hệ thống mà chúng ta sử dụng để phân phối tải, nó giúp chúng ta phân phối tải mà không cần phải biết cách hoạt động bên trong của hệ thống
### Reverse Proxy
- Reverse Proxy: Là 1 hệ thống mà chúng ta sử dụng để bảo vệ hệ thống, nó giúp chúng ta bảo vệ hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
### CDN (Content Delivery Network)
- CDN: Là 1 hệ thống mà chúng ta sử dụng để phân phối nội dung, nó giúp chúng ta phân phối nội dung mà không cần phải biết cách hoạt động bên trong của hệ thống
### Cache
- Cache: Là 1 hệ thống mà chúng ta sử dụng để lưu trữ dữ liệu, nó giúp chúng ta lưu trữ dữ liệu mà không cần phải biết cách hoạt động bên trong của hệ thống
### Database
- Database: Là 1 hệ thống mà chúng ta sử dụng để lưu trữ dữ liệu, nó giúp chúng ta lưu trữ dữ liệu mà không cần phải biết cách hoạt động bên trong của hệ thống
### Message Queue
- Message Queue: Là 1 hệ thống mà chúng ta sử dụng để gửi tin nhắn, nó giúp chúng ta gửi tin nhắn mà không cần phải biết cách hoạt động bên trong của hệ thống
### Search Engine
- Search Engine: Là 1 hệ thống mà chúng ta sử dụng để tìm kiếm dữ liệu, nó giúp chúng ta tìm kiếm dữ liệu mà không cần phải biết cách hoạt động bên trong của hệ thống
### Monitoring
- Monitoring: Là 1 hệ thống mà chúng ta sử dụng để giám sát hệ thống, nó giúp chúng ta giám sát hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
### Logging
- Logging: Là 1 hệ thống mà chúng ta sử dụng để ghi lại dữ liệu, nó giúp chúng ta ghi lại dữ liệu mà không cần phải biết cách hoạt động bên trong của hệ thống
### Configuration Management
- Configuration Management: Là 1 hệ thống mà chúng ta sử dụng để quản lý cấu hình, nó giúp chúng ta quản lý cấu hình mà không cần phải biết cách hoạt động bên trong của hệ thống
### Security
- Security: Là 1 hệ thống mà chúng ta sử dụng để bảo mật hệ thống, nó giúp chúng ta bảo mật hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
### CI/CD (Continuous Integration/Continuous Deployment)
- CI/CD: Là 1 hệ thống mà chúng ta sử dụng để triển khai hệ thống, nó giúp chúng ta triển khai hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
### Microservices
- Microservices: Là 1 kiến trúc mà chúng ta sử dụng để xây dựng hệ thống, nó giúp chúng ta xây dựng hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
### Serverless
- Serverless: Là 1 kiến trúc mà chúng ta sử dụng để xây dựng hệ thống, nó giúp chúng ta xây dựng hệ thống mà không cần phải biết cách hoạt động bên trong của hệ thống
### API Gateway
- API Gateway: Là 1 hệ thống mà chúng ta sử dụng để quản lý API, nó giúp chúng ta quản lý API mà không cần phải biết cách hoạt động bên trong của hệ thống

# Usecase


