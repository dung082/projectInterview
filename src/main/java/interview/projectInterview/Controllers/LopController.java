package interview.projectInterview.Controllers;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Services.Interface.ILopService;
import interview.projectInterview.Services.Interface.INguoiDungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lop")
public class LopController {

    @Autowired
    private ILopService iLopService;

    @GetMapping("/getAllLop")
    public List<Lop> getAllLop() {
        return iLopService.getAllLop();
    }

    @RequestMapping(path = "/createLop", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Lop createLop(@RequestBody Lop lop) {
        return iLopService.createLop(lop);
    }
}
