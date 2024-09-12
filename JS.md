# JS DOM và Events
## JS DOM
### What is DOM?
- DOM là viết tắt của Document Object Model. Nó là sự trình bày có cấu trúc của tài liệu HTML và cho phép truy cập và thay đổi nó.
  - Chúng ta có thể thay đổi văn bản, thay đổi màu sắc, thêm hoặc xóa các phần tử HTML, thay đổi các thuộc tính của các phần tử HTML, thêm hoặc xóa các sự kiện HTML, thay đổi phong cách CSS và thay đổi các thuộc tính của các phần tử HTML.
  - DOM được khởi tạo khi trình duyệt tải tài liệu HTML và tạo ra một cấu trúc DOM của tài liệu.
  - Tree DOM: Mỗi phần tử HTML được biểu diễn như một đối tượng trong DOM. Các đối tượng này có các thuộc tính và phương thức, cho phép truy cập và thay đổi các phần tử HTML.
  ```js
  document.getElementById("demo").innerHTML = "Hello World!";
  document.getElementById("demo").style.fontSize = "35px";
  document.querySelector("p")
  ```
  - Image: https://www.w3schools.com/js/pic_htmltree.gif
- DOM và các method chúng ta có thể sử dụng để thao tác DOM(getElementById,querySelector)... không phải là một phần của JavaScript, mà nó là một phần của các trình duyệt web.
- Web API và JS có thể tương tác với nhau.
### DOM Methods
- getElementById(id): Trả về một tham chiếu đến phần tử bằng id.
- getElementsByClassName(class): Trả về một danh sách các phần tử trong tài liệu có một lớp cụ thể.
- getElementsByTagName(tag): Trả về một danh sách các phần tử trong tài liệu với một thẻ cụ thể.
- querySelector(selector): Trả về phần tử đầu tiên trong tài liệu mà khớp với một bộ chọn CSS cụ thể.
- querySelectorAll(selector): Trả về tất cả các phần tử trong tài liệu mà khớp với một bộ chọn CSS cụ thể.
- createElement(element): Tạo một phần tử HTML.
- appendChild(element): Thêm một phần tử vào cuối phần tử cha.
- removeChild(element): Xóa một phần tử con khỏi phần tử cha.
- replaceChild(element): Thay thế một phần tử con trong phần tử cha.
- insertBefore(element): Chèn một phần tử con vào phần tử cha trước một phần tử con khác.
- getAttribute(name): Lấy giá trị của thuộc tính.
- setAttribute(name, value): Đặt giá trị của thuộc tính.
- removeAttribute(name): Xóa thuộc tính.
- style.property: Đặt hoặc trả về giá trị của phong cách.
- addEventListener(event, function): Gắn một sự kiện vào một phần tử.
- removeEventListener(event, function): Xóa một sự kiện từ một phần tử.
- preventDefault(): Ngăn chặn hành động mặc định.
- stopPropagation(): Ngăn chặn sự kiện từ sự lan truyền.
- ................
### Handling Events
### Change HTML Content
### Change CSS Style
### DOM Navigation
### Handle Keyboard Input
## JS là gì?
- JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED, 
MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED, 
DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING 
LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING 
EVENT LOOP CONCURRENCY MODEL.
  - High-level: 
    - Mọi chương trình chạy trên máy tính của bạn đều cần một số tài nguyên phần cứng chẳng hạn như RAM, CPU, ổ cứng, v.v.
    - Các ngôn ngữ bậc thấp như C,C ++ phải quản lý tài nguyên phần cứng một cách thủ công.
    - Ngôn ngữ bậc cao như JavaScript không cần phải quản lý tài nguyên phần cứng.
  - Garbage-collected: 
    - JavaScript có một bộ thu gom rác tự động.
    - Bộ thu gom rác tự động sẽ tự động xác định các đối tượng không còn được sử dụng và giải phóng bộ nhớ của chúng.
    - Về cơ bản đó là 1 thuật toán trong công cụ JS
  - Interpreted or Just-in-time compiled:
    - JavaScript là một ngôn ngữ thông dịch.
    - Một số trình duyệt web hiện đại sử dụng một trình biên dịch JIT để biên dịch mã JavaScript thành mã máy trước khi thực thi nó.
    - Để có thể biên dịch mã JavaScript, trình duyệt cần phải tải mã JavaScript từ máy chủ, phân tích mã và biên dịch nó thành mã máy.(JS engine)
  - Multi-paradigm:
    - JavaScript hỗ trợ nhiều phong cách lập trình khác nhau.
    - Có thể viết mã JavaScript theo phong cách lập trình hướng đối tượng, lập trình hàm hoặc lập trình cấu trúc.
    - Procedural programming: Lập trình cấu trúc
    - Functional programming: Lập trình hàm
    - Object-oriented programming: Lập trình hướng đối tượng
  - Prototype-based object-oriented:
    - JavaScript là một ngôn ngữ lập trình hướng đối tượng dựa trên nguyên mẫu.
    - Mọi đối tượng trong JavaScript là một thể hiện của một nguyên mẫu.
    - Một nguyên mẫu là một đối tượng mà các đối tượng khác có thể kế thừa các thuộc tính và phương thức từ đó.
  - First-class functions:
    - JavaScript hỗ trợ hàm đầu tiên.
    - Hàm đầu tiên có thể được truyền vào hàm khác dưới dạng đối số, được trả về từ một hàm và được gán cho một biến.
  - Dynamic:
    - JavaScript là một ngôn ngữ động.
    - Các biến trong JavaScript không cần phải được khai báo với một kiểu cụ thể.
    - Kiểu của một biến có thể thay đổi trong quá trình thực thi của chương trình.
  - Single-threaded:
    - JavaScript là một ngôn ngữ lập trình đơn luồng.
    - Điều này có nghĩa là JavaScript thực thi mã theo một luồng duy nhất.
    - Điều này có thể tạo ra vấn đề với hiệu suất khi thực thi mã phức tạp.
  - Non-blocking event loop concurrency model:
    - JavaScript sử dụng một mô hình lập lịch sự kiện không chặn.
    - Điều này có nghĩa là JavaScript có thể thực thi mã mà không chặn luồng chính.
    - Điều này giúp tránh tình trạng chương trình bị treo khi thực thi mã phức tạp.
    - Concurrency model: Mô hình đồng thời có nghĩa là JavaScript có thể thực thi nhiều tác vụ cùng một lúc, nhưng không phải là đa luồng.
    - Thread: Luồng là một đơn vị nhỏ nhất của một chương trình có thể thực thi độc lập.
    - Event loop: Vòng lặp sự kiện là một cơ chế trong JavaScript để xử lý các sự kiện và gọi lại.
## JS Engine and Runtime
### JS Engine
- JS engine là một chương trình chạy mã JavaScript.
- JS engine thực thi mã JavaScript trên trình duyệt web.
- Một số trình duyệt web phổ biến như Chrome, Firefox, Safari, Opera và Edge đều có một JS engine riêng.
- Ví dụ: Chrome có V8 engine, Firefox có SpiderMonkey engine, Safari có JavaScriptCore engine, Opera có Carakan engine và Edge có Chakra engine.
- JS engine bao gồm 2 phần chính:
  - Memory heap: Là nơi lưu trữ tất cả các biến, đối tượng và hàm.Là một bộ nhớ không có cấu trúc lưu trữ những đối tượng mà chúng ta cần trong chương trình.
  - Call stack: Là nơi lưu trữ các hàm được gọi và các biến cục bộ của chúng.Là nơi thực sự mà mã JS được thực thi và sử dụng những thứ gọi là Context Execution.
- Cách mã JS được thực thi:
  - Compilation: Mã JS được biên dịch thành mã máy.
  - Interpretation: Mã máy được thực thi.
  - Just-in-time compilation: Mã JS được biên dịch thành mã máy ngay trước khi thực thi.
  - Quá trình: Mã JS -> Parser: Phân tích cú pháp -> AST: Abstract Syntax Tree: Chia nhỏ từng dòng mã thành các phần có ý nghĩa như từ khóa const, function: Bước này cũng sẽ kiểm tra xem có lỗi cú pháp nào không để còn tạo mã máy(Add Image) -> Interpreter -> Profiler -> Optimizer(Tối ưu) -> Compiler(Lấy AST sau đó biên dịch thành mã máy) -> Exicution(Call stack) -> Machine code
  - Khi trình duyệt tải mã JS, JS engine bắt đầu thực thi mã từ đầu đến cuối.
  - JS engine sẽ đọc từng dòng mã và thực thi nó.
  - Nếu JS engine gặp một hàm, nó sẽ thêm hàm đó vào call stack và thực thi hàm.
  - Khi hàm thực thi xong, nó sẽ bị xóa khỏi call stack.
  - Nếu JS engine gặp một hàm khác, nó sẽ thêm hàm đó vào call stack và thực thi hàm đó.
  - Quá trình này tiếp tục cho đến khi mã JS được thực thi hoàn toàn.
### JS Runtime
- JS runtime như 1 chiếc hộp lớn hoặc 1 thùng chứa lớn bao gồm tất cả những thứ chúng ta cần để chạy mã JS : JS engine, Web APIs, Callback Queue, Event Loop, Task Queue, Microtask Queue, Macrotask Queue ,Heap, Call stack.
- JS runtime bao gồm:
  - JS engine: Thực thi mã JS.
  - Web APIs: Cung cấp các API để tương tác với DOM, AJAX, setTimeout, setInterval, v.v.
  - Callback Queue: Chứa các hàm callback được thêm vào bởi Web APIs.
  - Event Loop: Kiểm tra call stack và callback queue để xem có hàm nào cần thực thi không.
  - Task Queue: Chứa các hàm callback được thêm vào bởi Web APIs.
  - Microtask Queue: Chứa các hàm callback được thêm vào bởi Promise.
  - Macrotask Queue: Chứa các hàm callback được thêm vào bởi setTimeout, setInterval, v.v.
  - Heap: Là nơi lưu trữ tất cả các biến, đối tượng và hàm.
  - Call stack: Là nơi lưu trữ các hàm được gọi và các biến cục bộ của chúng.
### Execution Context and Call Stack

