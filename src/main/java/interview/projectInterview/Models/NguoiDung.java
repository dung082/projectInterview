package interview.projectInterview.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@Entity
@Table(name = "nguoidung")
@EntityListeners(AuditingEntityListener.class)

public class NguoiDung {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "hoten", nullable = false)
    private String hoTen;

    @Column(name = "gioitinh", nullable = false)
    private int gioiTinh;

    @Column(name = "diachi")
    private String diaChi;

    @Column(name = "ngaysinh", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date ngaySinh;

    @Column(name = "role", nullable = false)
    private int role;

    public NguoiDung() {
    }

    public NguoiDung(long id, String hoTen, int gioiTinh, String diaChi, Date ngaySinh, int role) {
        this.id = id;
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
        this.ngaySinh = ngaySinh;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
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

    public Date getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(Date ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "NguoiDung{" +
                "id=" + id +
                ", hoTen='" + hoTen + '\'' +
                ", gioiTinh=" + gioiTinh +
                ", diaChi='" + diaChi + '\'' +
                ", ngaySinh=" + ngaySinh +
                ", role=" + role +
                '}';
    }
}
