package interview.projectInterview.Controllers;

import interview.projectInterview.Models.NguoiDungTrongLop;
import interview.projectInterview.Services.Interface.INguoiDungTrongLopService;
import interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nguoidungtronglop")
public class NguoiDungTrongLopController {

    //    @Qualifier("INguoiDungTrongLopService")
    @Autowired
    private INguoiDungTrongLopService iNguoiDungTrongLopService;

    @GetMapping("/getAllNguoiDung")
    public List<NguoiDungTrongLopViewDto> getAllNguoiDungTrongLop() {
        return iNguoiDungTrongLopService.getAllNguoiDungTrongLop();
    }

    @GetMapping("/getNguoiDungTrongLopByNamHoc")
    public List<NguoiDungTrongLopViewDto> getNguoiDungTrongLopByNamHoc(@RequestParam int namHoc, @RequestParam long lopId) {
        return iNguoiDungTrongLopService.getNguoiDungTrongLopByNamHoc(namHoc, lopId);
    }

    @RequestMapping(path = "/createNguoiDungTrongLop", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NguoiDungTrongLop createNguoiDungTrongLop(@RequestBody NguoiDungTrongLop nguoiDungTrongLop) throws Exception {

        return iNguoiDungTrongLopService.createNguoiDungTrongLop(nguoiDungTrongLop);
    }

}
