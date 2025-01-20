package interview.projectInterview.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="lop")
@EntityListeners(AuditingEntityListener.class)
public class Lop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "malop", nullable = false)
    @NotBlank(message ="Mã lớp không được để trống")
    private String maLop;

    @Column(name = "tenlop", nullable = false)
    @NotBlank(message ="Mã lớp không được để trống")
    private String tenLop;

    public Lop() {
    }

    public Lop(long id, String maLop, String tenLop) {
        this.id = id;
        this.maLop = maLop;
        this.tenLop = tenLop;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "Lop{" +
                "id=" + id +
                ", maLop='" + maLop + '\'' +
                ", tenLop='" + tenLop + '\'' +
                '}';
    }
}
