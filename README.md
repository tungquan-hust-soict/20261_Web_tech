# tungquan.id.vn - Minimalist Personal Portfolio

Trang web portfolio cá nhân của **Tùng Quân**, được thiết kế theo phong cách Tối giản (Minimalism), tối ưu hóa tốc độ tải trang, trải nghiệm người dùng và chuẩn SEO.

## 🌟 Tính năng nổi bật

- **Thiết kế Tối giản & Hiện đại (Minimalism)**: Trực quan, tinh tế, loại bỏ chi tiết rườm rà, tập trung vào nội dung chính.
- **Hỗ trợ Giao diện Sáng/Tối (Light/Dark Mode)**: Tự động nhận diện thiết lập hệ thống và lưu trạng thái vào `localStorage`.
- **Tương thích mọi thiết bị (Responsive)**: Hiển thị hoàn hảo trên điện thoại, máy tính bảng và màn hình lớn.
- **Hiệu năng cao & Tải tức thì**: Thuần HTML5, CSS3 và Vanilla JavaScript – không phụ thuộc thư viện nặng nề.
- **Sẵn sàng triển khai Custom Domain**: Đi kèm tệp `CNAME` cấu hình cho tên miền `tungquan.id.vn`.

---

## 📁 Cấu trúc thư mục

```text
tungquan-portfolio/
├── CNAME               # Tệp ánh xạ tên miền custom (tungquan.id.vn) cho GitHub Pages
├── index.html          # Cấu trúc nội dung chính
├── style.css           # Toàn bộ mã định kiểu CSS (hỗ trợ Light/Dark mode, responsive)
├── script.js           # Xử lý đổi theme, cuộn trang mượt mà, menu mobile
├── favicon.svg         # Biểu tượng website (favicon)
└── assets/
    └── avatar.svg      # Ảnh đại diện cá nhân (có thể thay bằng ảnh profile.jpg/png)
```

---

## 🚀 Hướng dẫn tùy chỉnh nội dung

1. **Thay ảnh đại diện**:
   - Thêm ảnh của bạn vào thư mục `assets/` (ví dụ `profile.jpg`).
   - Mở `index.html`, tìm đến thẻ `<img src="assets/avatar.svg" ...>` và đổi đường dẫn thành `assets/profile.jpg`.
2. **Cập nhật thông tin liên hệ**:
   - Mở `index.html`, tìm đến phần `<!-- Contact Section -->`.
   - Cập nhật địa chỉ Email, đường dẫn GitHub, LinkedIn hoặc số điện thoại.
3. **Cập nhật dự án & kỹ năng**:
   - Chỉnh sửa trực tiếp tên dự án, mô tả và công nghệ tương ứng trong `index.html`.
