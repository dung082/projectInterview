package interview.projectInterview.Services.Interface;

import interview.projectInterview.Models.NguoiDungTrongLop;
import interview.projectInterview.ResponseDto.NguoiDungTrongLopResponseDto;
import interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface INguoiDungTrongLopService {
    public List<NguoiDungTrongLopViewDto> getAllNguoiDungTrongLop(int pageNumber, int pageSize  );
    public NguoiDungTrongLop createNguoiDungTrongLop(NguoiDungTrongLop nguoiDungTrongLop) throws Exception;
    public NguoiDungTrongLopResponseDto<NguoiDungTrongLopViewDto> getNguoiDungTrongLopByNamHoc(int pageNumber, int pageSize, int namHoc, long lopId);
    public NguoiDungTrongLop updateNguoiDungTrongLop (NguoiDungTrongLop nguoiDungTrongLop)  throws  Exception;
    public void deleteNguoiDungTrongLop(long id);
}
