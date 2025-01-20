package interview.projectInterview.Services;

import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Models.NguoiDungTrongLop;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Repository.NguoiDungTrongLopRepository;
import interview.projectInterview.ResponseDto.NguoiDungResponseDto;
import interview.projectInterview.Services.Interface.INguoiDungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NguoiDungService implements INguoiDungService {
    @Autowired
    private NguoiDungRepository nguoiDungRepository;
    @Autowired
    private NguoiDungTrongLopRepository nguoiDungTrongLopRepository;

    public NguoiDungService(NguoiDungRepository nguoiDungRepository) {
        this.nguoiDungRepository = nguoiDungRepository;
    }

    public NguoiDungService() {
    }

    @Override
    public List<NguoiDung> getAllNguoiDung() {
        return nguoiDungRepository.findAll();
    }

    @Override
    public NguoiDungResponseDto<NguoiDung> getAllNguoiDungPagnition(String searchString,int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        if(searchString == null || searchString.trim().isEmpty()) {
            Page<NguoiDung> page = nguoiDungRepository.findAll(pageable);
            return new NguoiDungResponseDto<NguoiDung>(page.getTotalElements(), page.getContent());
        }
        else {
            Page<NguoiDung> page = nguoiDungRepository.findByHoTenContainingIgnoreCase(searchString,pageable);
            return new NguoiDungResponseDto<NguoiDung>(page.getTotalElements(), page.getContent());

        }

    }

    @Override
    public NguoiDung createNguoiDung(NguoiDung nguoiDung) {
        return nguoiDungRepository.save(nguoiDung);
    }

    @Override
    public NguoiDung updateNguoiDung(NguoiDung nguoiDung) {
        NguoiDung ngdung = nguoiDungRepository.findById(nguoiDung.getId()).orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng cần sửa dữ liệu") );

        //đổi lớp cho người dùng thuộc năm học này
        ngdung.setHoTen(nguoiDung.getHoTen());
        ngdung.setRole(nguoiDung.getRole());
        ngdung.setDiaChi(nguoiDung.getDiaChi());
        ngdung.setGioiTinh(nguoiDung.getGioiTinh());
        ngdung.setNgaySinh(nguoiDung.getNgaySinh());
        return nguoiDungRepository.save(ngdung);
    }

    @Override
    public void deleteNguoiDung(long id) {
        if (!nguoiDungRepository.existsById(id)) {
            throw new RuntimeException("Không tìm thấy người dùng cần xóa " );
        }
        nguoiDungRepository.deleteById(id);
    }
}
