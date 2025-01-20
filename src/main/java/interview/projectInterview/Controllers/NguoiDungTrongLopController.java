package interview.projectInterview.Controllers;

import interview.projectInterview.Models.NguoiDungTrongLop;
import interview.projectInterview.ResponseDto.NguoiDungTrongLopResponseDto;
import interview.projectInterview.Services.Interface.INguoiDungTrongLopService;
import interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nguoidungtronglop")
public class NguoiDungTrongLopController {

    //    @Qualifier("INguoiDungTrongLopService")
    @Autowired
    private INguoiDungTrongLopService iNguoiDungTrongLopService;

    @GetMapping("/getAllNguoiDung")
    public List<NguoiDungTrongLopViewDto> getAllNguoiDungTrongLop(  @RequestParam(defaultValue = "0") int pageNumber,
                                                                    @RequestParam(defaultValue = "10") int pageSize) {
        return iNguoiDungTrongLopService.getAllNguoiDungTrongLop(pageNumber,pageSize);
    }

        @GetMapping("/getNguoiDungTrongLopByNamHoc")
    public NguoiDungTrongLopResponseDto<NguoiDungTrongLopViewDto> getNguoiDungTrongLopByNamHoc(@RequestParam(defaultValue = "0") int pageNumber,
                                                                                               @RequestParam(defaultValue = "10") int pageSize, @RequestParam int namHoc, @RequestParam long lopId) {
        return iNguoiDungTrongLopService.getNguoiDungTrongLopByNamHoc(pageNumber,pageSize,namHoc, lopId);
    }

    @RequestMapping(path = "/createNguoiDungTrongLop", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NguoiDungTrongLop createNguoiDungTrongLop(@Valid  @RequestBody NguoiDungTrongLop nguoiDungTrongLop) throws Exception {

        return iNguoiDungTrongLopService.createNguoiDungTrongLop(nguoiDungTrongLop);
    }


    @RequestMapping(path = "/updateNguoiDungTrongLop", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NguoiDungTrongLop updateNguoiDungTrongLop(@Valid @RequestBody NguoiDungTrongLop nguoiDungTrongLop) throws Exception {

        return iNguoiDungTrongLopService.updateNguoiDungTrongLop(nguoiDungTrongLop);
    }

    @RequestMapping(path = "/deleteNguoiDungTrongLop/{id}", method = RequestMethod.POST)
    public ResponseEntity<Void> deleteNguoiDungTrongLop(@PathVariable Long id) {
        iNguoiDungTrongLopService.deleteNguoiDungTrongLop(id);
        return ResponseEntity.noContent().build();
    }
}
