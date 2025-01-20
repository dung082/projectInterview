package interview.projectInterview.Models;

import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
@RedisHash("RedisLop")
public class RedisLopModel implements Serializable {
    @Id
    private Long id;

//    @NotBlank(message ="Mã lớp không được để trống")
    private String maLop;

//    @NotBlank(message ="Mã lớp không được để trống")
    private String tenLop;

    public RedisLopModel(Long id, String maLop, String tenLop) {
        this.id = id;
        this.maLop = maLop;
        this.tenLop = tenLop;
    }

    public RedisLopModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
}
