/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

// F1. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem.
const boDem = document.getElementById("bo-dem");
const danhSachTin = document.getElementById("list");

function capNhatBoDem() {
	// Lấy tất cả các tin (thẻ <li>) bên trong #list
	const tatCaTin = danhSachTin.querySelectorAll("li");
	// Đếm số tin đang hiển thị (các thẻ <li> KHÔNG chứa class "an")
	let soTinHien = 0;
	tatCaTin.forEach((tin) => {
		if (!tin.classList.contains("an")) {
			soTinHien++;
		}
	});

	// Cập nhật nội dung hiển thị vào thẻ #bo-dem
	boDem.textContent = `Đang hiển thị ${soTinHien}/${tatCaTin.length} tin`;
}

// F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay.
const oTimKiem = document.getElementById("o-tim-kiem");
const khongThay = document.getElementById("khong-thay");

function locTin() {
	const tuKhoa = oTimKiem.value.toLowerCase();
	const tatCaTin = danhSachTin.querySelectorAll("li");
	let soTinHien = 0;

	tatCaTin.forEach((tin) => {
		const h3 = tin.querySelector("h3");
		const p = tin.querySelector("p");
		const tieuDe = h3 ? h3.textContent.toLowerCase() : "";
		const noiDung = p ? p.textContent.toLowerCase() : "";

		// Khớp khi từ khoá rỗng hoặc có trong tiêu đề hay nội dung
		const khop = tuKhoa === "" || tieuDe.includes(tuKhoa) || noiDung.includes(tuKhoa);
		if (khop) {
			tin.classList.remove("an");
			soTinHien++;
		} else {
			tin.classList.add("an");
		}
	});

	// Xử lý thông báo không tìm thấy
	if (soTinHien === 0) {
		khongThay.classList.remove("an");
		khongThay.textContent = `Không tìm thấy tin nào cho "${oTimKiem.value}"`;
	} else {
		khongThay.classList.add("an");
	}

	// Cập nhật lại bộ đếm sau khi lọc
	capNhatBoDem();
}

oTimKiem.addEventListener("keyup", locTin);

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.
danhSachTin.addEventListener("click", (e) => {
	// Chỉ xử lý khi người dùng nhấn vào nút có class "more"
	if (e.target && e.target.classList.contains("more")) {
		const tin = e.target.closest("li");
		if (tin) {
			const doanVan = tin.querySelector("p");
			if (doanVan) {
				doanVan.classList.toggle("day-du");
				if (doanVan.classList.contains("day-du")) {
					e.target.textContent = "Thu gọn <<";
				} else {
					e.target.textContent = "Read more >>";
				}
			}
		}
	}
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.
const oTieuDe = document.getElementById("tin-tieu-de");
const oNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

nutDang.addEventListener("click", () => {
	const tieuDe = oTieuDe.value.trim();
	const noiDung = oNoiDung.value.trim();

	// Kiểm tra nếu để trống một trong hai ô
	if (tieuDe === "" || noiDung === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	// Tạo thẻ <li> mới với cấu trúc chuẩn
	const liMoi = document.createElement("li");

	const spanTime = document.createElement("span");
	spanTime.className = "time";
	spanTime.textContent = homNay();

	const h3 = document.createElement("h3");
	h3.textContent = oTieuDe.value;

	const p = document.createElement("p");
	p.textContent = oNoiDung.value;

	const btnMore = document.createElement("button");
	btnMore.type = "button";
	btnMore.className = "more";
	btnMore.textContent = "Read more >>";

	liMoi.appendChild(spanTime);
	liMoi.appendChild(h3);
	liMoi.appendChild(p);
	liMoi.appendChild(btnMore);

	// Chèn tin mới vào ĐẦU danh sách #list
	danhSachTin.prepend(liMoi);

	// Xóa trắng form và xóa thông báo lỗi
	oTieuDe.value = "";
	oNoiDung.value = "";
	baoLoi.textContent = "";

	// Tự động lọc lại theo từ khoá đang gõ và cập nhật bộ đếm
	locTin();
});

// Khởi chạy bộ đếm ngay khi trang tải xong
capNhatBoDem();


