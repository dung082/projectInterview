package interview.projectInterview.Services.Interface;

import interview.projectInterview.Models.RedisLopModel;
import interview.projectInterview.ResponseDto.RedisLopResponseDto;

import java.util.List;

public interface IRedisLopService {
//    public List<RedisLopModel> searchLops(String name, int pageNumber, int pageSize);
//    public void saveLop(RedisLopModel lop);
//    public RedisLopModel getLopById(String id);
//    public List<RedisLopModel> getAllLops();
//    public void deleteLop(String id);
//    public long countLopsByName(String name);

    RedisLopModel createRedisLop(RedisLopModel redisLopModel);
    RedisLopModel getRedisLopById(long id);
    Iterable<RedisLopModel> getAllRedisLops();
    RedisLopModel updateRedisLop(RedisLopModel RedisLop);
    void deleteRedisLop(long id);
    RedisLopResponseDto<RedisLopModel> searchRedisLop(String tenLop , int pageNumber, int pageSize);
}
