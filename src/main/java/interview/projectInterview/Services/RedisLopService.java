package interview.projectInterview.Services;

import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Models.RedisLopModel;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Repository.NguoiDungTrongLopRepository;
import interview.projectInterview.Repository.RedisLopRepository;
import interview.projectInterview.ResponseDto.NguoiDungResponseDto;
import interview.projectInterview.ResponseDto.RedisLopResponseDto;
import interview.projectInterview.Services.Interface.IRedisLopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;

import java.util.List;

@Service
public class RedisLopService implements IRedisLopService {
    @Autowired
    private RedisLopRepository redisLopRepository;

//    public RedisLopService(RedisLopRepository redisLopRepository) {
//        this.redisLopRepository = redisLopRepository;
//    }

    @Override
    public RedisLopModel createRedisLop(RedisLopModel redisLopModel) {
        return redisLopRepository.save(redisLopModel);
    }

    @Override
    public RedisLopModel getRedisLopById(long id) {
        return redisLopRepository.findById(id).orElse(null);    }

    @Override
    public Iterable<RedisLopModel> getAllRedisLops() {
        return redisLopRepository.findAll();
    }

    @Override
    public RedisLopModel updateRedisLop(RedisLopModel user) {
        RedisLopModel redisLopModel = redisLopRepository.findById(user.getId()).orElse(null);
        redisLopModel.setTenLop(user.getTenLop());
        redisLopModel.setMaLop(user.getMaLop());
//        user.setTenLop(user.getTenLop());
        return redisLopRepository.save(user);
    }

    @Override
    public void deleteRedisLop(long id) {
    redisLopRepository.deleteById(id);
    }

    @Override
    public RedisLopResponseDto<RedisLopModel> searchRedisLop(String tenLop, int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);

//        Page<RedisLopModel> page = redisLopRepository.findByTenLopContainingIgnoreCase(tenLop,pageable);
        List<RedisLopModel> allLops = (List<RedisLopModel>) redisLopRepository.findAll();
        List<RedisLopModel> filteredLops = allLops.stream()
                .filter(lop -> tenLop == null || tenLop.isEmpty() || lop.getTenLop().toLowerCase().contains(tenLop.toLowerCase()))
                .collect(Collectors.toList());

        int start = (pageNumber - 1) * pageSize;
        int end = Math.min(start + pageSize, filteredLops.size());
        return new RedisLopResponseDto<RedisLopModel>(filteredLops.size(),filteredLops.subList(start, end));
    }


//    @Override
//    public List<RedisLopModel> searchLops(String name, int pageNumber, int pageSize) {
//        return redisLopRepository.searchByNameWithPagination(name, pageNumber, pageSize);
//    }
//
//    @Override
//    public void saveLop(RedisLopModel lop) {
//        redisLopRepository.save(lop);
//
//    }
//
//    @Override
//    public RedisLopModel getLopById(String id) {
//        return redisLopRepository.findById(id);
//    }
//
//    @Override
//    public List<RedisLopModel> getAllLops() {
//        return redisLopRepository.findAll();
//    }
//
//    @Override
//    public void deleteLop(String id) {
//        redisLopRepository.deleteById(id);
//    }
//
//    public long countLopsByName(String name) {
//        return redisLopRepository.countByName(name);
//    }
}
