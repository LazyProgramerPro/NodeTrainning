# NextJS
## NextJs là gì?
- NextJS là một framework ReactJS, giúp chúng ta xây dựng các ứng dụng ReactJS một cách dễ dàng và nhanh chóng. NextJS giúp chúng ta xây dựng các ứng dụng ReactJS với các tính năng như SSR (Server Side Rendering), SSG (Static Site Generation), API Routes, và nhiều tính năng khác.
## Cài đặt NextJS
- Để cài đặt NextJS, chúng ta sử dụng lệnh sau:
```bash
  npx create-next-app@latest my-app
  cd my-app
  npm run dev
```
- Trong quá trình chạy bạn sẽ phải trả lời 1 số câu hỏi
- Sau khi chạy lệnh trên, chúng ta sẽ có một ứng dụng NextJS mới được tạo ra.
## Tạo một trang mới
## Link component
## Nested Routing
## CSS
## Layout Component
## Optimizing Images
## API Routes
## Handle Error
## Using hooks
## Middleware
## Cache
## Server Action
## Metadata

# Routing && Page Rendering
## Routing
- Setup routing như bình thường
- Handle dynamic routing, layout, nested routing
- Sử dụng `Link` component để chuyển trang mà không cần load lại trang
- Sử dụng `useRouter` để lấy thông tin về routing
- Parallel routing: default page
- Nested routing: nested page
- Intercept routing là một tuyến đường thay thế cách để chúng ta kiểm soát việc chuyển trang cùng 1 đuờng dẫn nhưng nội với các điều kiện khác nhau ( load, redirect, error, ...)
- Nếu không xuất phát từ các đường link hoặc reload page thì sẽ k chạy đến trang chứa Intercept routing
- Group routing: chia nhóm các route có cùng đường dẫn, có thể chia layout theo từng mục đích sử dụng : chia ra kiểu như login/register không có phần header, footer, ...nhưng những trang sau khi login thì có header, footer, ...
- Middleware: chúng ta có thể sử dụng middleware để kiểm soát việc chuyển trang, có thể sử dụng để kiểm tra quyền truy cập, kiểm tra xem người dùng đã đăng nhập chưa, ...
- Middleware không nhận config dạng destructuring, nếu muốn sử dụng thì phải truyền vào 1 object

