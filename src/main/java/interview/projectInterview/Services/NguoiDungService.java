package interview.projectInterview.Services;

import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Services.Interface.INguoiDungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NguoiDungService implements INguoiDungService {
    @Autowired
    private NguoiDungRepository nguoiDungRepository;

    public NguoiDungService(NguoiDungRepository nguoiDungRepository) {
        this.nguoiDungRepository = nguoiDungRepository;
    }

    public NguoiDungService() {
    }

    @Override
    public List<NguoiDung> getAllNguoiDung() {
        return nguoiDungRepository.findAll();
    }

    @Override
    public NguoiDung createNguoiDung(NguoiDung nguoiDung) {
        return nguoiDungRepository.save(nguoiDung);
    }
}
