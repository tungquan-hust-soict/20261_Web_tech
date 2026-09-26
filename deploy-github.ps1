param(
    [Parameter(Mandatory=$false)]
    [string]$RepoUrl
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " HƯỚNG DẪN ĐẨY MÃ NGUỒN LÊN GITHUB & DEPLOY TUNGQUAN.ID.VN " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

if (-not $RepoUrl) {
    $RepoUrl = Read-Host "Nhập URL kho lưu trữ GitHub của bạn (ví dụ: https://github.com/<tai-khoan>/tungquan.id.vn.git)"
}

if ($RepoUrl) {
    Write-Host "`nĐang kết nối kho lưu trữ từ xa: $RepoUrl..." -ForegroundColor Green
    git branch -M main
    git remote remove origin -ErrorAction SilentlyContinue
    git remote add origin $RepoUrl
    Write-Host "Đang đẩy mã nguồn lên nhánh main..." -ForegroundColor Green
    git push -u origin main
    Write-Host "`n✅ Đã đẩy mã nguồn thành công lên GitHub!" -ForegroundColor Green
} else {
    Write-Host "`nBạn chưa nhập URL. Hãy tạo repository trên GitHub rồi chạy lại script này." -ForegroundColor Red
}
