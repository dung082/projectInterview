package interview.projectInterview.Controllers;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.RedisLopModel;
import interview.projectInterview.ResponseDto.LopResponseDto;
import interview.projectInterview.ResponseDto.RedisLopResponseDto;
import interview.projectInterview.Services.Interface.IRedisLopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/redislop")
public class RedisLopController {
   @Autowired
    private IRedisLopService iRedisLopService;
//
//    public RedisLopController(IRedisLopService iRedisLopService) {
//        this.iRedisLopService = iRedisLopService;
//    }

    @RequestMapping(path = "/createRedisLop",method = RequestMethod.POST)
    @ResponseBody
    public RedisLopModel createRedisLop(@RequestBody RedisLopModel redisLopModel) {
        return iRedisLopService.createRedisLop(redisLopModel);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/getLop/{id}")
    public RedisLopModel getLop(@PathVariable long id) {
        return iRedisLopService.getRedisLopById(id);
    }
        @RequestMapping(method = RequestMethod.GET, path = "/getAllRedisLops")
    public Iterable<RedisLopModel> getAllRedisLops() {
        return iRedisLopService.getAllRedisLops();
    }

    @RequestMapping(method = RequestMethod.POST, path = "/deleteLop/{id}")
    public void deleteLop(@PathVariable long id) {
         iRedisLopService.deleteRedisLop(id);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/updateLop")
    public RedisLopModel updateLop( @RequestBody RedisLopModel redisLopModel) {
//        redisLopModel.setId();
        return iRedisLopService.updateRedisLop(redisLopModel);
    }

    @GetMapping("/searchRedisLop")
    public RedisLopResponseDto<RedisLopModel> searchLop(String searchString , int pageNumber, int pageSize) {
        return iRedisLopService.searchRedisLop(searchString,pageNumber,pageSize);
    }

}
