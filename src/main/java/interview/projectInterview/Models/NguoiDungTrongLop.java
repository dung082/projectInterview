package interview.projectInterview.Models;

import jakarta.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="nguoidungtronglop")
@EntityListeners(AuditingEntityListener.class)
public class NguoiDungTrongLop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "lopid", nullable = false)
    private long lopId;

    @Column(name = "nguoidungid", nullable = false)
    private long nguoiDungId;

    @Column(name = "namhoc", nullable = false)
    private int namhoc;


    public NguoiDungTrongLop() {
    }

    public NguoiDungTrongLop(long id, long lopId, long nguoiDungId, int namhoc) {
        this.id = id;
        this.lopId = lopId;
        this.nguoiDungId = nguoiDungId;
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

    public int getNamhoc() {
        return namhoc;
    }

    public void setNamhoc(int namhoc) {
        this.namhoc = namhoc;
    }

    @Override
    public String toString() {
        return "NguoiDungTrongLop{" +
                "id=" + id +
                ", lopId=" + lopId +
                ", nguoiDungId=" + nguoiDungId +
                ", namhoc=" + namhoc +
                '}';
    }
}
