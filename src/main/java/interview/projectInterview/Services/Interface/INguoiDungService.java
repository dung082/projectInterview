package interview.projectInterview.Services.Interface;

import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.ResponseDto.NguoiDungResponseDto;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface INguoiDungService {
    public List<NguoiDung> getAllNguoiDung();
    public NguoiDungResponseDto<NguoiDung> getAllNguoiDungPagnition(String searchString ,int pageNumber, int pageSize);
    public NguoiDung createNguoiDung(NguoiDung nguoiDung);
    public NguoiDung updateNguoiDung(NguoiDung nguoiDung);
    public void deleteNguoiDung(long id);
}
