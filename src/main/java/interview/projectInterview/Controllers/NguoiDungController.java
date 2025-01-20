package interview.projectInterview.Controllers;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.ResponseDto.NguoiDungResponseDto;
import interview.projectInterview.Services.Interface.INguoiDungService;
import interview.projectInterview.Services.Interface.INguoiDungTrongLopService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/searchNguoiDung")
    public NguoiDungResponseDto<NguoiDung> searchNguoiDung(String searchString , int pageNumber, int pageSize) {
        return iNguoiDungService.getAllNguoiDungPagnition(searchString,pageNumber,pageSize);
    }

    @RequestMapping( path="/createNguoiDung" ,method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NguoiDung createNguoiDung(@Valid @RequestBody NguoiDung nguoiDung) {
        return iNguoiDungService.createNguoiDung(nguoiDung);
    }

    @RequestMapping( path="/updateNguoiDung" ,method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NguoiDung updateNguoiDung(@Valid @RequestBody NguoiDung nguoiDung) {
        return iNguoiDungService.updateNguoiDung(nguoiDung);
    }

    @RequestMapping(path = "/deleteNguoiDung/{id}", method = RequestMethod.POST)
    public ResponseEntity<Void> deleteLop(@PathVariable Long id) {
        iNguoiDungService.deleteNguoiDung(id);
        return ResponseEntity.noContent().build();
    }

}
