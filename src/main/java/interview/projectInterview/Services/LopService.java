package interview.projectInterview.Services;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Models.RedisLopModel;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Repository.NguoiDungTrongLopRepository;
import interview.projectInterview.Repository.RedisLopRepository;
import interview.projectInterview.ResponseDto.LopResponseDto;
import interview.projectInterview.ResponseDto.NguoiDungResponseDto;
import interview.projectInterview.Services.Interface.ILopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LopService implements ILopService {

    @Autowired
    private LopRepository lopRepository;

    @Autowired
    private RedisLopRepository redisLopRepository;

    public LopService(LopRepository lopRepository,RedisLopRepository redisLopRepository) {
        this.lopRepository = lopRepository;
        this.redisLopRepository = redisLopRepository;
    }

    public LopService() {
    }

    @Override
    public List<Lop> getAllLop() {

        // lấy dữ liệu lớp từ redis
        List<RedisLopModel> redisLopModels = new ArrayList<RedisLopModel>();
        redisLopRepository.findAll().forEach(redisLopModels::add);

        // nếu dl redis có thì đưa về list lop và trả về kết quả
        if (!redisLopModels.isEmpty()) {
            return redisLopModels.stream()
                    .map(redisLopModel -> new Lop(
                            redisLopModel.getId(),
                            redisLopModel.getMaLop(),
                            redisLopModel.getTenLop()
                    ))
                    .toList();
        }

        //nếu dl từ redis rỗng thì lấy dl ừ db, lưu vào redis và trả về kết quả
        List<Lop> lops = lopRepository.findAll();
        lops.forEach(lop -> {
            RedisLopModel redisLopModel = new RedisLopModel();
            redisLopModel.setId(lop.getId());
            redisLopModel.setMaLop(lop.getMaLop());
            redisLopModel.setTenLop(lop.getTenLop());
            redisLopRepository.save(redisLopModel); // Lưu vào Redis
        });

        return lops;
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
