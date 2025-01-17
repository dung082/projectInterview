package interview.projectInterview.Services;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Repository.NguoiDungTrongLopRepository;
import interview.projectInterview.Services.Interface.ILopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LopService implements ILopService {

    @Autowired
    private LopRepository lopRepository;

    public LopService(LopRepository lopRepository) {
        this.lopRepository = lopRepository;
    }

    public LopService() {
    }

    @Override
    public List<Lop> getAllLop() {
        return lopRepository.findAll();
    }

    @Override
    public Lop createLop(Lop lop) {
        return lopRepository.save(lop);
    }
}
