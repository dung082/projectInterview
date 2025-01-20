package interview.projectInterview.Services.Interface;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.ResponseDto.LopResponseDto;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ILopService {
    public List<Lop> getAllLop();
    public LopResponseDto<Lop> getAllLopPagnition(String searchString ,int pageNumber, int pageSize);
    public Lop createLop(Lop lop);
    public Lop updateLop(Lop lop);
    public void deleteLop(long id);
}
