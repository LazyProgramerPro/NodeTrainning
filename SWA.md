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
- Là để cân bằng tải lưu lượng giữa 1 nhóm máy chủ, giúp chúng ta tăng hiệu suất và sự ổn định của hệ thống
- Cách tốt nhất để đạt được tính sẵn sàng cao và khả năng mở rộng theo chiều ngang là chạy nhiều máy chủ giống hệt nhau cho ứng dụng của bạn và sử dụng load balancer để phân phối lưu lượng giữa chúng
- Load balancer có thể phân phối lưu lượng dựa trên nhiều yếu tố như round-robin, least connections, least response time, ...
- Các thuộc tính chất lượng
    - Khả năng mở rộng cao: Bằng cách đặt thêm nhiều máy chủ + Load balancer có thể mở rộng theo chiều ngang
    - Tính sẵn sàng cao: Đáp ứng được nhiều request cùng 1 lúc, đảm bảo hệ thống luôn hoạt động
    - Performance cao: Phân phối lưu lượng giữa các máy chủ, giúp tăng hiệu suất và sự ổn định của hệ thống
    - Khả năng bảo trì cao: Dễ dàng bảo trì và nâng cấp hệ thống, có thể thêm và gỡ các máy chủ mà không ảnh hưởng đến hệ thống
- Các loại load balancer:
    - DNS-based load balancer: Phân phối lưu lượng dựa trên DNS, giúp chúng ta phân phối lưu lượng giữa các máy chủ. Là một phần cơ sở hạ tầng internet 
    - Hardware load balancer: Là phần cứng mà chúng ta sử dụng để phân phối lưu lượng, giúp chúng ta phân phối lưu lượng giữa các máy chủ
    - Software load balancer: Là phần mềm mà chúng ta sử dụng để phân phối lưu lượng, giúp chúng ta phân phối lưu lượng giữa các máy chủ
    - Hardware vs Software có thể chủ động theo dõi tình trạng máy chủ của chúng ta, để phát hiện xem có máy chủ nào đang gặp vấn đề và chuyển lưu lượng sang máy chủ khác

    
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

## SA & System Design
- Đầu tiên sẽ đặt những câu hỏi thu thập yêu cầu của người dùng
- Các ràng buộc về mặt chức năng và phi chức năng
- Những hạn chế của người dùng
- Xác định rõ các API của mình
- Create Diagram cho các chức năng theo yêu cầu
- Tinh chỉnh Diagram để giải quyết các yêu cầu phi chức năng
- Vì là thiết kế hệ thống nên không có nghĩa là ai đúng ai sai cả tham khảo mô hình Triple Diamon
- Vấn đề quan trọng là phỉa đưa ra sự đánh đổi chính xác tùy theo yêu cầu mà chúng ta thu thập được

VD: Xây dựng 1 diễn đàn thảo luận 1 vấn đề gì đó công khai (Reddit,Quora, Stack Overflow ...) có khả năng mở rộng cao, nơi mọi người có thể đăng câu hỏi cập nhập tin tức bài đăng hoặc nhận xét, có thể upvote, downvote post comment, có dữ liệu về những bài viết được tương tác nhiều của họ
- Việt thiết kế một hệ thống rất lớn như thế này từ con số 0, đặc biệt là hệ thống cần mở rộng quy mô ra cho hàng triệu người dùng trên toàn thế giới là rất khó khăn
- Đầu tiên là đặt câu hỏi và nắm bắt tất cả các yêu cầu chức năng
    - Bất kì ai cũng có thể xem các bài đăng và cmt hay chỉ những người dùng đã được đăng nhập
    - Một bài viết có thể chứa những gì (text, image , video)
    - Việc hiển thị các bài đăng phổ biến nhất có ý nghĩa gì, làm thế nào để chúng ta xác nhận chúng là phổ biến
    - Cấu trúc của các cmt trong bài viết là gì? (Flat or Tree)
- Sau khi đặt ra những yêu cầu đó chúng ta có các yêu cầu chức năng sau
    - Người dùng có thể đăng kí và đăng nhập vào hệ thống để đăng bài hoặc cmt
    - Người dùng có thể đăng 1 bài viết mới với tiêu đề, nội dung, image
    - Người dùng có thể cmt bất kì bài đăng nào hiện có và các cmt phải được sắp xếp theo thời gian
    - Cmt được sắp xếp thao dạng flatlist
    - Cũng cho phép người dùng có thể xóa bài hoặc cmt của họ
    - Người dùng phải đăng nhập thì mới có quyền upvote hoặc downvote 1 bài đăng hoặc 1 nhận xét đang có
    - Người dùng mới login sẽ thấy những bài viết phổ biến trong 24h qua
    - Phổ biến = Số lượng upvotes - downvotes chỉ trong 24h qua
- Sau đó liệt kê các yc phi chức năng
    - Điều đầu tiên và quan trọng nhất là khả năng mở rộng : hàng triệu người 1 ngày, những đột biến mà chúng ta cần có khả năng xử lí
    - Performance: Mọi người dùng tương tác đều nhân được phản hồi dưới 1s
    - Khả năng chịu lỗi và tính sẵn sàng cao, thời gian downtime thấp (99,9%)
    - Đánh đổi giữa tính nhất quán và tính sẵn có
    - Người dùng, bài đăng, cmt hoặc vote sẽ không bao giờ biến mất khỏi hệ thống trừ khi chúng bị xóa rõ ràng
    - Ngoài ra sẽ có 1 số hạn chế về ngôn ngữ, Cloud
- Thiết kế API
    - Rest API
        - Xác định các thực thể trong hệ thống của mình :
         user, post, image, comment, vote
        - Mapping các thực thể đó đến URL : image here
        - Xác định cách biểu diễn của từng tài nguyên (Model)
        - Gán các METHOD cho resource
    - Limit, paginate resource
    


# Microservices and Event-Driven Architecture
## Microservices
- Là phong cách kiến trúc hiện đại và phổ biến nhất trong ngành công nghiệp phần mềm hiện nay
- Theo phong cách này toàn bộ hệ thống được tổ chức như 1 tập hợp cách dịch vụ độc lập
- Được nhiều công ty lớn sử dụng như Amazon, Netflix, Uber, ...
- Khi được thực hiện 1 cách chính xác:
    - Kiến trúc MS cho phép các tổ chức mở rộng quy mô lên đến hàng nghìn hoặc trăm nghìn kĩ sư để chia thành các nhóm nhỏ để hoạt động độc lập
    - Điều này cho phép các tổ chức xây dựng các hệ thống có khả năng mở rộng cao, tiếp cận hàng tỷ người dùng
    - Duy trì chi phí thấp, giảm thiểu rủi ro và tăng cường khả năng mở rộng
- MS rất thú vị, tuy nhiên nó không phải là viên đạn bạc giải quyết được tất cả các vấn đề. Khi áp dụng không đúng cách nó có thể gây ra nhiều chi phí không cần thiết và không thể giải quyết được vấn đề

## Event-Driven Architecture
- Thường được sử dụng cùng MS bằng cách thiết lập các giao tiếp dựa trên các sự kiện không đồng bộ

## Những vấn đề của kiến trúc Monolithic
- Monolithic là kiến trúc truyền thống, tất cả các thành phần của hệ thống được xây dựng trong 1 ứng dụng duy nhất Backend, Frontend, Database
- Lợi ích:
    - Dễ dàng thiết kế và phát triển
        - Phù hợp với hầu hết mọi hệ thống Web: Tin tức, Blog, Ngân hàng, ...
    - Dễ thực hiện với 1 nhóm nhỏ gồm các nhà phát triển Fullstack và 1 số web Framework và các CSDL tiêu chuẩn
    - Nhanh chóng đưa sản phẩm đến tay người dùng phù hợp với các STARTUP và các team nhỏ
- Vấn đề:
    - Có quá nhiều kĩ sư làm việc trên cùng 1 codebase, conflict code trở thành 1 vấn đề nghiêm trọng
    - Complex Codebase: Codebase trở nên phức tạp và khó bảo trì:
        - Mỗi lần thay đổi phải test lại toàn bộ hệ thống
        - Khó tìm lỗi
        - Khó mở rộng
        - Deploy mất nhiều thời gian hơn
        - Khó tiếp cận với những kĩ sư mới
    - Khả năng mở rộng kém: Mỗi version chứa toàn bộ logic nghiệp vụ của chúng ta, yêu cầu rất nhiều CPU và RAM => Cần những máy tính cao cấp và đắt tiền
    - Hạn chế rẩ nhiều về công nghệ: Khó để chuyển đổi sang công nghệ mới, bạn nghĩ sao về việc sử dụng 1 công nghệ từ 10 năm trước? và không thể tận dụng được những công nghệ mới nhất
    - Khó để scale: Khó để scale hệ thống lên hàng triệu người dùng
![alt text](image-189.png)

## Kiến trúc MS
- Không giống như kiến trúc 3 tầng mà trong đó toàn bộ logic nghiệp vụ được xây dựng trong 1 ứng dụng duy nhất, kiến trúc MS chia nhỏ toàn bộ hệ thống thành các dịch vụ nhỏ độc lập
- Tổ chức logic nghiệp vụ thành 1 tập hợp các thành phần được liên kết với nhau 1 cách lỏng lẻo và độc lập
- Mỗi dịch vụ đều thuộc về 1 nhóm nhỏ kĩ sư, họ có thể tự quyết định công nghệ và cách triển khai và có phạm vi trách nhiệm hẹp
- Lợi ích : 
    - Khả năng mở rộng cao hơn, vì mỗi dịch vụ chỉ chứa 1 tập con của chức năng tổng thể, codebase trở nên đơn giản và dễ bảo trì, codebase load nhanh hơn trên IDE
    - Thời gian bulid và deploy nhanh hơn
    - Dễ dàng test và dễ dàng để hiểu
    - Với monolithic thì khi 1 dịch vụ bị lỗi thì toàn bộ hệ thống sẽ bị ảnh hưởng, nhưng với MS thì chỉ 1 dịch vụ bị lỗi thì chỉ 1 dịch vụ đó bị ảnh hưởng
    - Các máy tính không cao cấp cũng có thể chạy được => có thể tiết kiệm chi phí
    - Sử dụng các công nghệ khác nhau cho từng dịch vụ => Đáp ứng được các công nghệ nhanh hơn bằng cách tái cấu trúc codebase nhỏ hoặc thậm trí viết lại từ đầu
    - Ít gặp lỗi liên quan đến rò rỉ bộ nhớ hoặc các vấn đề về performance
    - Dễ dàng mở rộng và scale hệ thống
- Nhược điểm:
    - Những thách thức về kĩ thuật: Cần phải xử lý các vấn đề về giao tiếp giữa các dịch vụ, bảo mật, ...
    - Chúng ta sử dụng kiến trúc với độ phân tán cao: Việc gọi 1 yc từ service A sang service B có thể mất nhiều thời gian hơn so với việc gọi 1 hàm trong cùng 1 ứng dụng
    - Việc Testing từng dịch vụ riêng lẻ có thể nhanh hơn và dễ dàng hơn, nhưng việc test toàn bộ hệ thống có thể mất nhiều thời gian hơn? Điều gì sẽ xảy ra nếu version của 1 dịch vụ không tương thích với version của dịch vụ khác?
    - Việc khắc phục lỗi có thể trở nên khó khăn hơn, vì chúng ta cần phải xác định lỗi ở đâu và làm thế nào để fix nó
    - VD: Yc của người dùng cần phải gọi 3 dịch vụ khác nhau, nếu 1 trong 3 dịch vụ đó bị lỗi thì sẽ ảnh hưởng đến toàn bộ hệ thống vì người dùng có thể nhận được lỗi hoặc không nhận được đúng thông tin của mình, làm thế nào để chúng ta biết service nào chịu trách nhiệm cho vấn đề này? Làm thế nào để thiết lập các phạm vi trách nhiệm cho từng dịch vụ? Nếu có bất cứ thay đổi gì trong 1 dịch vụ mà ảnh hưởng đến cách dịch vụ khác thì chúng ta tách biệt ra để làm gì ?! Mất nhiều thời gian để đọc code của các team khác ?!
    - Có quá nhiều thứ cần giải quyết, nhưng tin tốt là có nhiều công cụ và framework giúp chúng ta giải quyết vấn đề này và những lỗi phổ biến như: Service Discovery, Load Balancing, API Gateway, Circuit Breaker, Distributed Tracing, ...đã đc giải quyết
![alt text](image-190.png)

## Thiết lập các ranh giới giữa các dịch vụ
- Sự phân chia rõ ràng giữa các dịch vụ là rất quan trọng, nó giúp chúng ta xác định rõ ràng trách nhiệm của từng dịch vụ
- Có nhiều cách để phân chia dịch vụ, nhưng phân chia dịch vụ theo chức năng là cách phổ biến nhất
- VD: 1 ứng dụng có thể chia thành các dịch vụ sau:
    - User Service: Quản lý thông tin người dùng
    - Post Service: Quản lý bài viết
    - Comment Service: Quản lý bình luận
    - Vote Service: Quản lý vote
    - Notification Service: Gửi thông báo
    - Search Service: Tìm kiếm
    - Image Service: Quản lý ảnh
    - Auth Service: Xác thực người dùng
    - Analytics Service: Phân tích dữ liệu
    - Payment Service: Thanh toán
    - Email Service: Gửi email
    - Chat Service: Chat
    - Video Service: Quản lý video
    - ...
- Sự gắn kết: Các yếu tố dẫn đến sự thay đổi cùng nhau phải nằm trong ranh giời của cùng 1 dịch vụ (KO thế để việc thay đổi 1 dịch vụ ảnh hưởng đến dịch vụ khác)
![alt text](image-191.png)
- SRP (Single Responsibility Principle): Mỗi dịch vụ chỉ nên chịu trách nhiệm cho 1 chức năng cụ thể
![alt text](image-192.png)
- Loose Coupling: Các dịch vụ không nên phụ thuộc vào nhau, mà nên phụ thuộc vào 1 giao diện chung, giảm thiểu giao tiếp giữa các dịch vụ
![alt text](image-193.png)
- Size của mỗi dịch vụ không cần nhỏ nhất có thể, mà cần phải đủ lớn để chứa toàn bộ logic nghiệp vụ của nó

## Các phương pháp để phân tách 1 hệ thống thành MS tuân thủ 3 nguyên tắc chính
### Decomposition by business capability(Phân tách theo khả năng kinh doanh)
- Phân tách dịch vụ theo khả năng kinh doanh, mỗi dịch vụ chịu trách nhiệm cho 1 khả năng kinh doanh cụ thể
![alt text](image-194.png)
### Decomposition by domain-driven design(Phân tách theo thiết kế hướng tới miền)
- Phân tách dịch vụ theo thiết kế hướng tới miền, mỗi dịch vụ chịu trách nhiệm cho 1 miền cụ thể
- Core Domain: Là những miền quan trọng nhất của hệ thống, chúng ta cần phải chú trọng phát triển và bảo vệ chúng
- Supporting Domain
- Generic Domain
![alt text](image-195.png)
### Decomposition by data ownership(Phân tách theo quyền sở hữu dữ liệu)
- Phân tách dịch vụ theo quyền sở hữu dữ liệu, mỗi dịch vụ chịu trách nhiệm cho 1 tập dữ liệu cụ thể
### Decomposition by functional decomposition(Phân tách theo phân rã chức năng)
- Phân tách dịch vụ theo chức năng, mỗi dịch vụ chịu trách nhiệm cho 1 chức năng cụ thể 
### Decomposition by Action
### Decomposition by Entities

## Chuyển đổi từ Monolithic sang Microservices

### Big Bang Approach(Phương pháp Big Bang)
- Chuyển đổi toàn bộ hệ thống từ Monolithic sang MS trong 1 lần
- Plan:
    - Vạch ra các ranh giới giữa các dịch vụ
    - Thuyết phục quản lí về việc sẽ không phát triển thêm tính năng mới
    - Chuyển đổi toàn bộ hệ thống sang MS
- Suface:
    - Ý tưởng đơn giản và dễ thực hiện
- Thực tế :
    - Phương pháp này là phương pháp tồi tệ nhất về năng suất cũng như tác động đến doanh nghiệp
    - Có quá nhiều kĩ sư trong cùng 1 dự án, mỗi người 1 ý kiến, dẫn đến việc không thống nhất về cách phân chia dịch vụ
    - Việc ước tính chi phí và thời gian thực hiện là không chính xác vì chúng ta có thể gặp các vấn đề về kĩ thuật, vấn đề về dữ liệu, vấn đề về giao tiếp giữa các dịch vụ, ...
    - Có thể bị bỏ rơi giữa chừng
    - Không thể đảm bảo rằng hệ thống sẽ hoạt động đúng cách sau khi chuyển đổi
    - Dừng mọi hoạt động sẽ ảnh hưởng đến doanh nghiệp, người quản lí có thể thấy nhàm chán và không muốn tiếp tục
### Strangler Fig Approach(Phương pháp Strangler Fig)
- Chuyển đổi từ Monolithic sang MS dần dần
- Plan:
    - Chọn 1 chức năng trong codebase của mình cái mà nó có thể hưởng lợi nhiều nhất từ việc chuyển đổi sang MS
    - Khu vực thường xuyên có sự thay đổi và phát triển
    - Cách thành phần có yêu cầu mở rộng cao
    - Các thành phần có ít nợ kĩ thuật và khả năng phân tách logic tốt
- Lợi ích:
    - Không phải đặt thời hạn cứng để hoàn thành
    - Chúng ta không ngừng phát triển hệ thống và các kết quả có thể nhìn thấy được
    - Việc kinh doanh của chúng ta không bị dán đoạn
### Cách để chuẩn bị cho việc Migration
- Sau khi chúng ta đã chọn phương pháp chuyển đổi, chúng ta cần phải chuẩn bị cho việc chuyển đổi
- Xác định các thành phần chúng ta muốn di chuyển, chúng ta phải đảm bảo chúng ta có thử nghiệm. Nếu không toàn bộ sẽ bị hỏng trong quá trình chuyển đổi
- Define các API 
- Cố gắng tách biệt với các thành phần khác của ứng dụng
![alt text](image-196.png)

### Smooth Migration
- Giữ các công nghệ cũ và mới chạy song song với nhau