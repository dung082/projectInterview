package interview.projectInterview.Services;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Repository.NguoiDungTrongLopRepository;
import interview.projectInterview.ResponseDto.LopResponseDto;
import interview.projectInterview.ResponseDto.NguoiDungResponseDto;
import interview.projectInterview.Services.Interface.ILopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LopService implements ILopService {

    @Autowired
    private LopRepository lopRepository;

    public LopService(LopRepository lopRepository) {
        this.lopRepository = lopRepository;
    }

    public LopService() {
    }

    @Override
    public List<Lop> getAllLop() {
        return lopRepository.findAll();
    }

    @Override
    public LopResponseDto<Lop> getAllLopPagnition(String searchString , int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        if(searchString == null || searchString.trim().isEmpty()) {
            Page<Lop> page = lopRepository.findAll(pageable);
            return new LopResponseDto<Lop>(page.getTotalElements(), page.getContent());
        }
        else {
            Page<Lop> page = lopRepository.findByTenLopContainingIgnoreCase(searchString,pageable);
            return new LopResponseDto<Lop>(page.getTotalElements(), page.getContent());

        }
    }

    @Override
    public Lop createLop(Lop lop) {
        return lopRepository.save(lop);
    }

    @Override
    public Lop updateLop(Lop lop) {
        Lop lopCheck = lopRepository.findById(lop.getId()).orElseThrow(() -> new RuntimeException("Không tìm thấy thông tin lớp cần sửa dữ liệu") );

        lop.setMaLop(lop.getMaLop());
        lop.setTenLop(lop.getTenLop());
        return lopRepository.save(lop);
    }

    @Override
    public void deleteLop(long id) {
        if (!lopRepository.existsById(id)) {
            throw new RuntimeException("Không tìm thấy người dùng cần xóa " );
        }
        lopRepository.deleteById(id);
    }
}
