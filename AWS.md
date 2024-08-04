# AWS
### IAM
- Identity and Access Management là viết tắt của IAM, là dịch vụ quản lý quyền truy cập của AWS. IAM cho phép bạn quản lý người dùng và quyền truy cập vào các tài nguyên AWS của bạn thông qua các chính sách quyền truy cập.
- Root account: là tài khoản mặc định khi bạn tạo tài khoản AWS. Tài khoản này có toàn quyền truy cập vào tất cả các tài nguyên của bạn. Do đó, bạn không nên sử dụng tài khoản root để quản lý tài nguyên AWS của mình.
- User: là người dùng được tạo ra từ tài khoản root hoặc từ một user khác. User có thể được gán các quyền truy cập vào các tài nguyên AWS thông qua chính sách quyền truy cập.
- Group: là một nhóm các user, mỗi group có thể chứa nhiều user. Group có thể được gán các quyền truy cập vào các tài nguyên AWS thông qua chính sách quyền truy cập và không chứa các nhóm khác.
- Role: là một cách để bạn cung cấp quyền truy cập vào các tài nguyên AWS cho các user hoặc các service khác. Role không chứa các user hoặc group.
- Policy: là một tập hợp các quyền truy cập được gán cho user, group hoặc role. Policy có thể được gán cho user, group hoặc role.
- IAM là global service, nghĩa là bạn có thể sử dụng chung một tài khoản IAM cho tất cả các region của AWS.
- Một số chính sách quyền truy cập:
    - Allow: cho phép user thực hiện một hành động nào đó.
    - Deny: không cho phép user thực hiện một hành động nào đó.
    - Resource: xác định tài nguyên mà user được phép thực hiện hành động.
    - Condition: xác định điều kiện để user được phép thực hiện hành động.
- Tạo user:
    - Bước 1: Đăng nhập vào tài khoản AWS.
    - Bước 2: Chọn dịch vụ IAM.
    - Bước 3: Chọn Users.
    - Bước 4: Chọn Add user.
    - Bước 5: Nhập tên user và chọn quyền truy cập.
    - Bước 6: Chọn Attach existing policies directly.
    - Bước 7: Chọn quyền truy cập cho user.
    - Bước 8: Chọn Next: Tags.
    - Bước 9: Chọn Next: Review.
    - Bước 10: Chọn Create user.

- IAM Policy:
    - Bước 1: Đăng nhập vào tài khoản AWS.
    - Bước 2: Chọn dịch vụ IAM.
    - Bước 3: Chọn Policies.
    - Bước 4: Chọn Create policy.
    - Bước 5: Chọn JSON.
    - Bước 6: Nhập nội dung policy.
    - Bước 7: Chọn Review policy.
    - Bước 8: Nhập tên policy và chọn Create policy.
- IAM policy example:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": "*"
        }
    ]
}
```
- IAM Password Policy:
    - Bước 1: Đăng nhập vào tài khoản AWS.
    - Bước 2: Chọn dịch vụ IAM.
    - Bước 3: Chọn Account settings.
    - Bước 4: Chọn Edit.
    - Bước 5: Chỉnh sửa password policy.
    - Bước 6: Chọn Apply password policy.

- MFA:
    - Bước 1: Đăng nhập vào tài khoản AWS.
    - Bước 2: Chọn dịch vụ IAM.
    - Bước 3: Chọn Users.
    - Bước 4: Chọn user cần kích hoạt MFA.
    - Bước 5: Chọn Security credentials.
    - Bước 6: Chọn Edit.
    - Bước 7: Chọn Assigned MFA device.
    - Bước 8: Chọn Virtual MFA device hoặc Hardware MFA device.
    - Bước 9: Chọn Next: Review.
    - Bước 10: Chọn Activate MFA.

