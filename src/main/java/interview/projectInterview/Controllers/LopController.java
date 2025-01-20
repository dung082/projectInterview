package interview.projectInterview.Controllers;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.ResponseDto.LopResponseDto;
import interview.projectInterview.ResponseDto.NguoiDungResponseDto;
import interview.projectInterview.Services.Interface.ILopService;
import interview.projectInterview.Services.Interface.INguoiDungService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/searchLop")
    public LopResponseDto<Lop> searchLop(String searchString , int pageNumber, int pageSize) {
        return iLopService.getAllLopPagnition(searchString,pageNumber,pageSize);
    }
    @RequestMapping(path = "/createLop", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Lop createLop(@Valid  @RequestBody Lop lop) {
        return iLopService.createLop(lop);
    }

    @RequestMapping(path = "/updateLop", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Lop updateLop(@Valid @RequestBody Lop lop) {
        return iLopService.updateLop(lop);
    }

    @RequestMapping(path = "/deleteLop/{id}", method = RequestMethod.POST)
    public ResponseEntity<Void> deleteLop(@PathVariable Long id) {
        iLopService.deleteLop(id);
        return ResponseEntity.noContent().build();
    }
}
