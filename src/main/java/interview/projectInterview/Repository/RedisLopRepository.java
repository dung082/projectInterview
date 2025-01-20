package interview.projectInterview.Repository;

import interview.projectInterview.Models.RedisLopModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public interface RedisLopRepository extends CrudRepository<RedisLopModel,Long> {
    Page<RedisLopModel> findByTenLopContainingIgnoreCase(String tenLop, Pageable pageable);
//    @Autowired
//    private RedisTemplate<String, Object> redisTemplate;
//
//    private static final String KEY = "RedisLop";
//    private static final String LOP_ID_KEY = "Lop:ID";
//
//
//    public void save(RedisLopModel lop) {
//        if (lop.getId() == null || lop.getId().isEmpty()) {
//            // Tự tăng ID
//            Long newId = redisTemplate.opsForValue().increment(LOP_ID_KEY);
//            lop.setId(String.valueOf(newId));
//        }
//        redisTemplate.opsForHash().put(KEY, lop.getId(), lop);
//    }
//
//    public RedisLopModel findById(String id) {
//        return (RedisLopModel) redisTemplate.opsForHash().get(KEY, id);
//    }
//
//    public List<RedisLopModel> findAll() {
//        return redisTemplate.opsForHash().values(KEY).stream()
//                .map(obj -> (RedisLopModel) obj)
//                .collect(Collectors.toList());
//    }
//
//    public List<RedisLopModel> searchByNameWithPagination(String name, int pageNumber, int pageSize) {
//        List<RedisLopModel> allLops = findAll();
//        return allLops.stream()
//                .filter(lop -> name == null || name.isEmpty() || lop.getTenLop().toLowerCase().contains(name.toLowerCase()))
//                .skip((long) (pageNumber - 1) * pageSize)
//                .limit(pageSize)
//                .collect(Collectors.toList());
//    }
//
//    public void deleteById(String id) {
//        redisTemplate.opsForHash().delete(KEY, id);
//    }
//
//    public long countByName(String name) {
//        List<RedisLopModel> allLops = findAll();
//        return allLops.stream()
//                .filter(lop -> name == null || name.isEmpty() || lop.getTenLop().toLowerCase().contains(name.toLowerCase()))
//                .count();
//    }
}
