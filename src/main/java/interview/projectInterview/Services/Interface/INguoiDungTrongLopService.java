package interview.projectInterview.Services.Interface;

import interview.projectInterview.Models.NguoiDungTrongLop;
import interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface INguoiDungTrongLopService {
    public List<NguoiDungTrongLopViewDto> getAllNguoiDungTrongLop();
    public NguoiDungTrongLop createNguoiDungTrongLop(NguoiDungTrongLop nguoiDungTrongLop) throws Exception;
    public List<NguoiDungTrongLopViewDto> getNguoiDungTrongLopByNamHoc(int namHoc, long lopId);
}
