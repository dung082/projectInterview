package interview.projectInterview.Controllers;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Services.Interface.INguoiDungService;
import interview.projectInterview.Services.Interface.INguoiDungTrongLopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nguoidung")
public class NguoiDungController {

    @Autowired
    private INguoiDungService iNguoiDungService;

    @GetMapping("/getAllNguoiDung")
    public List<NguoiDung> getAllNguoiDung() {
        return iNguoiDungService.getAllNguoiDung();
    }

    @RequestMapping( path="/createNguoiDung" ,method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NguoiDung createNguoiDung( @RequestBody NguoiDung nguoiDung) {
        return iNguoiDungService.createNguoiDung(nguoiDung);
    }

}
