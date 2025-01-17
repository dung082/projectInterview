package interview.projectInterview.ViewDto;

import java.util.Date;

public class NguoiDungTrongLopViewDto {
    public long id;
    public long nguoiDungId;
    public long lopId;
    public String hoTen;
    public String maLop;
    public String tenLop;
    public String diaChi;
    public int gioiTinh;
    public int role;
    public Date ngaySinh;
    public int namhoc;

    public NguoiDungTrongLopViewDto(long id, long nguoiDungId, long lopId, String hoTen, String maLop, String tenLop, String diaChi, int gioiTinh, int role, Date ngaySinh , int namhoc) {
        this.id = id;
        this.nguoiDungId = nguoiDungId;
        this.lopId = lopId;
        this.hoTen = hoTen;
        this.maLop = maLop;
        this.tenLop = tenLop;
        this.diaChi = diaChi;
        this.gioiTinh = gioiTinh;
        this.role = role;
        this.ngaySinh = ngaySinh;
        this.namhoc = namhoc;
    }

    public NguoiDungTrongLopViewDto() {
    }

    public int getNamhoc() {
        return namhoc;
    }

    public void setNamhoc(int namhoc) {
        this.namhoc = namhoc;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getLopId() {
        return lopId;
    }

    public void setLopId(long lopId) {
        this.lopId = lopId;
    }

    public long getNguoiDungId() {
        return nguoiDungId;
    }

    public void setNguoiDungId(long nguoiDungId) {
        this.nguoiDungId = nguoiDungId;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public String getMaLop() {
        return maLop;
    }

    public void setMaLop(String maLop) {
        this.maLop = maLop;
    }

    public String getTenLop() {
        return tenLop;
    }

    public void setTenLop(String tenLop) {
        this.tenLop = tenLop;
    }

    public int getGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(int gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public Date getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(Date ngaySinh) {
        this.ngaySinh = ngaySinh;
    }
}
