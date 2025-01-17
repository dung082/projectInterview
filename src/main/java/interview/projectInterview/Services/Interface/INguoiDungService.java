package interview.projectInterview.Services.Interface;

import interview.projectInterview.Models.NguoiDung;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface INguoiDungService {
    public List<NguoiDung> getAllNguoiDung();

    public NguoiDung createNguoiDung(NguoiDung nguoiDung);
}
